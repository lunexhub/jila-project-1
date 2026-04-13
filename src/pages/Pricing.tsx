import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Compliance",
    price: "R2,999",
    period: "/month",
    description: "Essential compliance Accounting, Taxation and Human Resources services for non-VAT registered small businesses.",
    featureGroups: [
      {
        label: "Accounting & Tax",
        shade: "primary",
        items: ["Bank reconciliations", "SARS Compliance", "CIPC Compliance", "Quarterly management accounts", "Annual Financial Statements", "Payroll add on option (incl EMP returns and IRP5)"],
      },
      {
        label: "Human Resources",
        shade: "blue",
        items: ["Employee Onboarding", "EE Reporting basic", "Leave management"],
      },
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "R6,999",
    period: "/month",
    description: "Comprehensive Accounting, Taxation and Human Resources management for growing VAT registered businesses.",
    featureGroups: [
      {
        label: "Everything in Compliance",
        shade: "neutral",
        items: [],
      },
      {
        label: "Accounting & Tax",
        shade: "primary",
        items: ["Supplier processing", "Monthly Management Accounts and Reporting", "VAT returns"],
      },
      {
        label: "Human Resources",
        shade: "blue",
        items: ["Hearings facilitation", "Statutory reporting reviews", "Compliance training"],
      },
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "R14,999",
    period: "/month",
    description: "Full-suite service support for medium to large enterprises.",
    featureGroups: [
      {
        label: "Everything in Standard",
        shade: "neutral",
        items: [],
      },
      {
        label: "Accounting & Tax",
        shade: "primary",
        items: ["Priority support", "Advisory hours across all disciplines", "Budgeting, Cashflow and Forecasting"],
      },
      {
        label: "Human Resources",
        shade: "blue",
        items: ["Industrial Relations", "Training and certification"],
      },
    ],
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
              <p className="mt-2 text-sm text-muted-foreground min-h-[3.5rem]">{pkg.description}</p>
              <div className="mt-6">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">From</span>
                <div>
                  <span className="font-display text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
              </div>
              <div className="mt-8 flex-1 space-y-4">
                {pkg.featureGroups.map((group) => (
                  <div
                    key={group.label}
                    className={`rounded-lg p-4 ${
                      group.shade === 'primary'
                        ? 'bg-primary/10 border border-primary/20'
                        : group.shade === 'blue'
                        ? 'bg-blue-900/20 border border-blue-400/20'
                        : 'bg-border/40 border border-border'
                    }`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      group.shade === 'primary' ? 'text-primary' : group.shade === 'blue' ? 'text-blue-400' : 'text-muted-foreground'
                    } ${group.items.length > 0 ? 'mb-2' : ''}`}>{group.label}</p>
                    {group.items.length > 0 && (
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check size={14} className={`mt-0.5 shrink-0 ${
                              group.shade === 'primary' ? 'text-primary' : 'text-blue-400'
                            }`} /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
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
