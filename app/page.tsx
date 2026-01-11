import { TopBanner } from "@/components/TopBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StackSection } from "@/components/sections/StackSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <HeroSection />
      <ProblemSection />
      <StackSection />
      <WaitlistSection />
    </main>
  );
}
