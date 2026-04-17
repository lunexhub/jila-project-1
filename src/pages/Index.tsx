import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import heroImage from "@/assets/hero-image.png";
import {
  ArrowRight,
  CheckCircle,
  Target,
  Eye,
  Shield,
} from "lucide-react";


const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection tall>
        <div className="grid w-full items-center gap-8 py-10 sm:py-20 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up space-y-5 sm:space-y-8 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              <span className="text-gradient">One</span> Stop<br />
              Shop.
            </h1>
            <p className="mx-auto max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground lg:mx-0">
              We leverage our in-depth expertise in Small and Medium Enterprises' advisory and support services, combined with cloud based solutions, to partner in your company's journey.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:shadow-glow hover:opacity-90"
              >
              Our Services <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/50 px-5 sm:px-7 py-3 sm:py-3.5 font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-secondary hover:border-primary/30"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="animate-fade-in mt-8 sm:mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-2xl" />
              <img
                src={heroImage}
                alt="Professional business consultant at JILA Business Services"
                className="relative mx-auto w-full max-w-md rounded-lg shadow-glow lg:max-w-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/80 backdrop-blur-sm">
        <div className="container grid grid-cols-2 gap-6 py-10 sm:gap-8 sm:py-12 md:grid-cols-4">
          {["Competitive pricing", "Compliance focused", "Simplified tools and technologies", "Customised service"].map((item) => (
            <div key={item} className="text-center">
              <p className="font-display text-xl sm:text-2xl font-bold text-primary">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="container py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold lg:text-4xl">
            Comprehensive <span className="text-gradient">Business Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We have you <span className="text-primary font-semibold">covered</span>
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-secondary border border-border p-8 shadow-lg text-center">
            <p className="text-muted-foreground leading-relaxed">
              Our team of professionals have extensive experience and comprehensive knowledge in:
            </p>
            <ul className="mt-4 space-y-2 inline-block text-left">
              {["Accounting and Taxation", "Human Resources", "Business Advisory"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle size={16} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-8 shadow-lg text-center">
            <p className="text-muted-foreground leading-relaxed">
              Practitioners who will partner with you include registered:
            </p>
            <ul className="mt-4 space-y-2 inline-block text-left">
              {["Chartered Accountants", "Tax Practitioners", "Human Resources Practitioners"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle size={16} className="text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline"
          >
            Learn more <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="border-t border-border bg-secondary py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-background border border-border p-8 text-center shadow-lg">
              <Eye className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">To be one of the key leaders in the SME consulting and advisory services in SA through innovative and optimal solutions!</p>
            </div>
            <div className="rounded-2xl bg-background border border-border p-8 text-center shadow-lg">
              <Shield className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Our Values</h3>
              <ul className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                <li>Customer focus</li>
                <li>Honesty</li>
                <li>Excellence</li>
                <li>Accountable</li>
                <li>Passion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary">
        <div className="container py-16 sm:py-24 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold lg:text-4xl">
            Ready to <span className="text-gradient">Get Started</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Let us handle the numbers while you focus on what matters most — growing your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get a Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
