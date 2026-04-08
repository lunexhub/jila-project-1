import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import aboutImage from "@/assets/about-image.png";
import { Target, Eye, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To provide accessible, high-quality business services that empower South African businesses to thrive and remain fully compliant." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted business services partner for small and medium enterprises across South Africa." },
  { icon: Shield, title: "Our Values", desc: "Integrity, excellence, client-centricity and innovation drive everything we do at JILA Business Services." },
];

const About = () => {
  return (
    <Layout>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Who We Are
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold lg:text-6xl">
            About <span className="text-gradient">JILA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            A modern approach to business accounting and advisory services.
          </p>
        </div>
      </HeroSection>

      <section className="container py-16 sm:py-24">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <img
            src={aboutImage}
            alt="JILA Business Services team in a meeting"
            className="rounded-lg shadow-glow"
            loading="lazy"
          />
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">
              Driving <span className="text-gradient">Business Success</span>
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              JILA Business Services is a modern accounting and business advisory firm dedicated to helping South African businesses grow. We go beyond traditional bookkeeping — we use accounting as a strategic tool to make your business profitable.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our team of experienced professionals provides tailored solutions across accounting, taxation, payroll, CIPC registration and human resources. We pride ourselves on real results, transparent pricing and a client-first approach.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card-gradient p-8 text-center">
                <v.icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
