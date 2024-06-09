"use client"
import { Presentation } from "../Presentation/Presentation";
import { VideoSection } from "../VideoSection/VideoSection";
import { main } from "./Main.css";
import { GameColletionStatistics } from "../GameCollectionStatistics/GameColletionStatistics";

export function Main() {
  return (
    <main className={main}>
      <Presentation />
      <VideoSection />
      <GameColletionStatistics />
    </main>
  );
}
