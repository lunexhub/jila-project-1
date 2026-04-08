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
        <div className="space-y-12 sm:space-y-16">
          {servicesData.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col items-start gap-10 lg:flex-row ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex h-32 sm:h-48 w-full items-center justify-center rounded-lg border border-border bg-card-gradient lg:w-1/3">
                <service.icon className="h-14 w-14 sm:h-20 sm:w-20 text-primary" />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="font-display text-2xl font-bold text-foreground">{service.title}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
