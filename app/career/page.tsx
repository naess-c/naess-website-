import type { Metadata } from "next";
import CareerContent from "./CareerContent";

export const metadata: Metadata = {
  title: "Career & Working Areas for Agricultural Engineers",
  description:
    "Explore career opportunities for Agricultural Engineers (Agri Engineers) in Nepal — government, NGO/INGO, and private sector. IOE Purwanchal Campus Agricultural Engineering graduates career guide.",
  alternates: {
    canonical: "https://www.naessnepal.org.np/career",
  },
};

export default function CareerPage() {
  return <CareerContent />;
}