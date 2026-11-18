import type { Metadata } from "next";
import { ChaliClientPage } from "./ChaliClientPage";

export const metadata: Metadata = {
  title: "Chali App (ചളി) | Iconic Mallu Meme Characters AI Chat & Game Arena",
  description:
    "The world's first AI conversation & multiplayer game app powered by legendary Mollywood meme characters. Chat with Dashamoolam Damu, get roasted by Gafoor Ka Dosth, battle friends in Chali Rapido trivia, and blast 500+ iconic sound bites.",
  keywords: [
    "Chali App",
    "Malayalam Meme App",
    "Mallu Meme AI",
    "Dashamoolam Damu Chat",
    "Gafoor Ka Dosth",
    "Ramanan Punjabi House",
    "Pavanayi",
    "Manavalan",
    "Malayalam Movie Quiz",
    "Mollywood Meme Game",
    "Chali Games",
    "Kerala Comedy Dialogues",
  ],
  openGraph: {
    title: "Chali App (ചളി) | Iconic Mallu Meme AI Chat & Games",
    description:
      "Chat with Dashamoolam Damu, get roasted by Gafoorka, and play live Malayalam punchline trivia with friends!",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chali App (ചളി) | Mallu Meme Chat & Battle Arena",
    description:
      "Chat with Damu, Gafoor, Ramanan & Manavalan. Real-time Malayalam meme trivia and instant soundboard.",
  },
};

export default function ChaliPage() {
  return <ChaliClientPage />;
}
