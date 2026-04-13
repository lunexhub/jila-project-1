import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Calculator, FileText, Users, Building2, UserCheck } from "lucide-react";

const servicesData = [
  {
    icon: Calculator,
    title: "Accounting",
    items: ["Bookkeeping", "Management Accounts", "Annual Financial Statements", "Budgeting", "Cashflow Forecasting"],
  },
  {
    icon: FileText,
    title: "Taxation",
    items: ["Company Income Tax Returns", "Company Provisional Tax Returns", "VAT 201s", "Compliance Management", "SARS Liaison"],
  },
  {
    icon: Users,
    title: "Payroll",
    items: ["Monthly Payslips", "Monthly EMP201s", "Bi-annual EMP501s", "IRP5s"],
  },
  {
    icon: Building2,
    title: "CIPC",
    items: ["Company Registrations", "Company Deregistrations", "CIPC Maintenance (Changes, Updates, Resignations)", "Annual Return Filing"],
  },
  {
    icon: UserCheck,
    title: "Human Resources",
    items: ["Onboarding and Exit Management", "Industrial Relations", "Employee Equity Reporting", "Leave Management"],
  },
];

const Services = () => {
  return (
    <Layout>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            What We Offer
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold lg:text-6xl">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Comprehensive business solutions designed to keep your company compliant, efficient and profitable.
          </p>
        </div>
      </HeroSection>

      <section className="container py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-secondary border border-border p-8 space-y-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold text-foreground">{service.title}</h2>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
