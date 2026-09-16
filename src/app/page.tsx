import Hero from "@/components/home/Hero";
import JobStrip from "@/components/home/JobStrip";
import CollectionRows from "@/components/home/CollectionRows";
import WoodPanels from "@/components/home/WoodPanels";
import Story from "@/components/home/Story";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Cta from "@/components/home/Cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <JobStrip />
      <CollectionRows />
      <WoodPanels />
      <Story />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
