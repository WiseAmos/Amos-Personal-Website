import BootSequence from "@/components/BootSequence";
import AiGuide from "@/components/AiGuide";
import QuestTracker from "@/components/QuestTracker";
import AbilityTree from "@/components/AbilityTree";
import ProjectGrid from "@/components/ProjectGrid";
import Resume from "@/components/Resume";
import MobileHud from "@/components/MobileHud";

export default function Home() {
  return (
    <main className="relative h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar bg-background text-foreground">
      <AiGuide />
      <QuestTracker />
      
      {/* Sections must be snap-start */}
      <BootSequence />
      <AbilityTree />
      <ProjectGrid />
      <Resume />

      <MobileHud />
    </main>
  );
}
