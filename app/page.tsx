import { CapsuleCollection } from "@/components/capsule-collection";
import { CapsuleMediaBreaks } from "@/components/capsule-media-breaks";
import { CapsulePageFlow } from "@/components/capsule-page-flow";
import { SectionHero } from "@/components/section-hero";
import { SectionProducts } from "@/components/section-products";
import { SectionStory } from "@/components/section-story";
import { CapsuleGenderStory } from "@/components/capsule-gender-story";
import { SectionNotes } from "@/components/section-notes";
import { SignatureMood } from "@/components/signature-mood";
import { Newsletter } from "@/components/newsletter";

export default function HomePage() {
  return (
    <>
      <SectionHero />
      <CapsulePageFlow />
      <CapsuleCollection />
      <SectionProducts />
      <CapsuleGenderStory />
      <SectionStory />
      <SectionNotes />
      <SignatureMood />
      <CapsuleMediaBreaks />
      <Newsletter />
    </>
  );
}
