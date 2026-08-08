"use client";


import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};


export default function Quiz({
  chapterTitle,
  questions,
}: {
  chapterTitle: string;
  questions: Question[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null | "skipped")[]>(
    Array(questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const userAnswer = answers[currentIndex];
  const isAnswered = userAnswer !== null && userAnswer !== "skipped";
  const isSkipped = userAnswer === "skipped";
  const isResolved = isAnswered || isSkipped;
  const isCorrect = userAnswer === currentQuestion.correctIndex;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelect = (optionIndex: number) => {
    if (isResolved) return;
    const updated = [...answers];
    updated[currentIndex] = optionIndex;
    setAnswers(updated);
  };

  const handleSkip = () => {
    if (isResolved) return;
    const updated = [...answers];
    updated[currentIndex] = "skipped";
    setAnswers(updated);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setFinished(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrentIndex(0);
    setFinished(false);
  };

  const correctCount = answers.filter(
    (a, i) => a === questions[i].correctIndex
  ).length;
  const wrongCount = answers.filter(
    (a, i) => a !== null && a !== "skipped" && a !== questions[i].correctIndex
  ).length;
  const skippedCount = answers.filter((a) => a === "skipped").length;
  const attemptedCount = correctCount + wrongCount;
  

  // Final summary screen
  if (finished) {
    return (
      <div className="max-w-3xl mx-auto">

        <div className="bg-teal-700 text-white rounded-2xl p-8 text-center shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">{chapterTitle} — Final Result</h2>
          <p className="text-5xl font-extrabold mb-6">{correctCount} / {questions.length}</p>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold">{attemptedCount}</p>
              <p className="text-sm text-teal-100 mt-1">Attempted</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-green-300">{correctCount}</p>
              <p className="text-sm text-teal-100 mt-1">Correct</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-red-300">{wrongCount}</p>
              <p className="text-sm text-teal-100 mt-1">Wrong</p>
            </div>
          </div>

          <div className="mt-4 bg-white/10 rounded-xl p-4 inline-block px-8">
            <p className="text-3xl font-bold text-yellow-300">{skippedCount}</p>
            <p className="text-sm text-teal-100 mt-1">Skipped</p>
          </div>

          <div>
            <button
              onClick={handleRetry}
              className="mt-6 bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Retry Quiz
            </button>
          </div>
        </div>

        {/* Question-by-question review */}
        <div className="space-y-4">
          {questions.map((q, index) => {
            const ans = answers[index];
            const wasSkipped = ans === "skipped";
            const wasCorrect = ans === q.correctIndex;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow p-5 border-2 ${
                  wasSkipped ? "border-yellow-400" : wasCorrect ? "border-green-400" : "border-red-400"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-800">{index + 1}. {q.question}</h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    wasSkipped ? "bg-yellow-100 text-yellow-700" : wasCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}>
                    {wasSkipped ? "Skipped" : wasCorrect ? "Correct" : "Wrong"}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Correct answer: <span className="font-semibold text-green-700">{q.options[q.correctIndex]}</span>
                </p>
                {!wasSkipped && !wasCorrect && (
                  <p className="text-sm text-red-600 mt-1">
                    Your answer: {q.options[ans as number]}
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-2">{q.explanation}</p>
              </div>
            );
          })}
        </div>

      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>Correct: {correctCount} · Wrong: {wrongCount} · Skipped: {skippedCount}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-600 transition-all duration-500"
            style={{ width: `${(currentIndex / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div
        className={`bg-white rounded-2xl shadow-lg p-5 border-2 transition-colors duration-300 mb-24 ${
          isResolved ? (isSkipped ? "border-yellow-400" : isCorrect ? "border-green-400" : "border-red-400") : "border-transparent"
        }`}
      >
        <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3">
          {currentIndex + 1}. {currentQuestion.question}
        </h3>

        <div className="space-y-2">
          {currentQuestion.options.map((option, optIndex) => {
            const isSelected = userAnswer === optIndex;
            const isCorrectOption = optIndex === currentQuestion.correctIndex;

            let optionStyle = "border-gray-200 hover:border-teal-400";

            if (isSkipped && isCorrectOption) {
              optionStyle = "border-green-500 bg-green-50";
            } else if (isAnswered) {
              if (isCorrectOption) {
                optionStyle = "border-green-500 bg-green-50";
              } else if (isSelected && !isCorrectOption) {
                optionStyle = "border-red-500 bg-red-50";
              } else {
                optionStyle = "border-gray-200 opacity-60";
              }
            }

            return (
              <button
                key={optIndex}
                onClick={() => handleSelect(optIndex)}
                disabled={isResolved}
                className={`w-full text-left p-2.5 text-sm md:text-base rounded-lg border-2 transition-all ${optionStyle} ${
                  isResolved ? "cursor-default" : "cursor-pointer"
                }`}
              >
                {option}
                {isResolved && isCorrectOption && (
                  <span className="ml-2 text-green-600 font-semibold">✓ Correct Answer</span>
                )}
                {isAnswered && isSelected && !isCorrectOption && (
                  <span className="ml-2 text-red-600 font-semibold">✗ Your Answer</span>
                )}
              </button>
            );
          })}
        </div>

        {isSkipped && (
          <div className="mt-4 p-4 rounded-lg text-sm leading-6 bg-yellow-50 text-yellow-800 border border-yellow-200">
            <p className="font-semibold mb-1">⏭ Skipped</p>
            <p><span className="font-semibold">Explanation: </span>{currentQuestion.explanation}</p>
          </div>
        )}

        {isAnswered && (
          <div
            className={`mt-4 p-4 rounded-lg text-sm leading-6 ${
              isCorrect ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <p className="font-semibold mb-1">{isCorrect ? "✓ Correct!" : "✗ Incorrect"}</p>
            <p><span className="font-semibold">Explanation: </span>{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      {/* Sticky bottom action bar */}
      <div className="sticky bottom-0 left-0 right-0 mt-6 bg-gray-50/95 backdrop-blur-sm border-t border-gray-200 py-4 px-1 -mx-1">
        <div className="flex gap-3">
          {!isResolved && (
            <button
              onClick={handleSkip}
              className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition shadow-lg"
            >
              Skip Question
            </button>
          )}

          {isResolved && (
            <button
              onClick={handleNext}
              className="flex-1 bg-teal-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-teal-800 transition shadow-lg"
            >
              {isLastQuestion ? "Finish Quiz" : "Next Question →"}
            </button>
          )}
        </div>
      </div>

    </div>
  );
}