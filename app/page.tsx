import { CapsuleCollection } from "@/components/capsule-collection";
import { CapsuleMediaBreaks } from "@/components/capsule-media-breaks";
import { CapsulePageFlow } from "@/components/capsule-page-flow";
import { SectionHero } from "@/components/section-hero";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <CapsulePageFlow />
      <CapsuleCollection />
      <CapsuleMediaBreaks />
    </>
  );
}
