import { CapsuleCollection } from "@/components/capsule-collection";
import { CapsuleGenderStory } from "@/components/capsule-gender-story";
import { CapsuleMediaBreaks } from "@/components/capsule-media-breaks";
import { CapsulePageFlow } from "@/components/capsule-page-flow";
import { Newsletter } from "@/components/newsletter";
import { SignatureMood } from "@/components/signature-mood";

export default function HomePage() {
  return (
    <>
      <CapsulePageFlow />
      <CapsuleMediaBreaks />
      <CapsuleGenderStory />
      <CapsuleCollection />
      <SignatureMood />
      <Newsletter />
    </>
  );
}
