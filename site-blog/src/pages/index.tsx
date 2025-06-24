import { FeatureSection } from "@/components/feature-section/feature-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col bg-black">
        <HeroSection />
        <FeatureSection />
      </article>
    </>
  );
}


