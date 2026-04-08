import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Compliance",
    price: "R2,999",
    period: "/month",
    description: "Essential compliance services for small businesses.",
    features: ["Bookkeeping", "VAT Returns", "SARS Compliance", "Monthly Reporting", "Email Support"],
    popular: false,
  },
  {
    name: "Standard",
    price: "R7,000",
    period: "/month",
    description: "Comprehensive accounting and tax management for growing businesses.",
    features: ["Everything in Compliance", "Management Accounts", "Payroll (up to 10 employees)", "Tax Returns", "CIPC Annual Returns", "Dedicated Account Manager"],
    popular: true,
  },
  {
    name: "Premium",
    price: "R15,000",
    period: "/month",
    description: "Full-service business support for established enterprises.",
    features: ["Everything in Standard", "Full Payroll Management", "HR Services", "Cashflow Forecasting", "Budgeting", "Priority Support", "Quarterly Business Reviews"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Simple & Transparent
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold lg:text-6xl">
            Our <span className="text-gradient">Packages</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Transparent pricing. No hidden fees. All packages exclude VAT.
          </p>
        </div>
      </HeroSection>

      <section className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-lg border p-8 transition-all ${
                pkg.popular
                  ? "border-primary shadow-glow"
                  : "border-border bg-card-gradient hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground">{pkg.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="shrink-0 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
