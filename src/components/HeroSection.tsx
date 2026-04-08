import { ReactNode } from "react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  children: ReactNode;
  tall?: boolean;
}

const HeroSection = ({ children, tall = false }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/60" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      {/* Decorative glow */}
      <div className="absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className={`container relative z-10 ${tall ? "min-h-[60vh] sm:min-h-[85vh] flex items-center" : "py-16 sm:py-28 lg:py-36"}`}>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
