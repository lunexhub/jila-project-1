import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-10 sm:py-16">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-sm font-bold text-white opacity-0 select-none">.</p>
            <p className="text-2xl font-black text-white leading-snug tracking-tight">
              Your SME service partner
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Pricing", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-white transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white">
              <a href="mailto:info@jilaservices.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> info@jilaservices.co.za
              </a>
              <a href="mailto:sales@jilaservices.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> sales@jilaservices.co.za
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" /> 32 Fricker Road, Illovo, Sandton
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-white space-y-2">
          <p>© {new Date().getFullYear()} JILA Business Services. All rights reserved.</p>
          <p>
            Built by{" "}
            <a href="https://www.lunexweb.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
              Lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
