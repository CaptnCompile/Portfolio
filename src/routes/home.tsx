import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedWork />
      <ServicesGrid />
      <Testimonials />
      <CtaSection />
    </>
  );
}
