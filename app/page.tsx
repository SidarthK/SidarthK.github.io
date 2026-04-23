import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { PersonalSection } from "@/components/PersonalSection";
import { ProjectList } from "@/components/ProjectList";
import { Section } from "@/components/Section";
import { ExperienceItem } from "@/components/ExperienceItem";
import { siteContent } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <Navbar items={siteContent.navItems} />
      <main className="mx-auto max-w-4xl px-6 pb-14 pt-6 sm:px-10 sm:pt-8">
        <section id="home" aria-label="Home" className="scroll-mt-20 py-8 sm:py-10">
          <HeroSection
            name={siteContent.name}
            headshotSrc={siteContent.headshotSrc}
            intro={siteContent.intro}
            summary={siteContent.summary}
            links={siteContent.links}
          />
        </section>

        <Section id="experience" title="Experience">
          <div className="space-y-4">
            {siteContent.experience.map((item) => (
              <ExperienceItem key={`${item.organization}-${item.role}`} item={item} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <ProjectList projects={siteContent.projects} />
        </Section>

        <Section id="personal" title="Personal">
          <PersonalSection text={siteContent.personal.text} photoSlots={siteContent.personal.photoSlots} />
        </Section>
      </main>
      <Footer name={siteContent.name} note={siteContent.footerNote} />
    </>
  );
}
