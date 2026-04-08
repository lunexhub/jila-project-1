import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/Untitled design (2).png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="container py-10 sm:py-16">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/">
              <img src={logo} alt="JILA Business Services" className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your SME service partner
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Pricing", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:info@jilaservices.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> info@jilaservices.co.za
              </a>
              <a href="tel:+27000000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> +27 (0) 00 000 0000
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" /> 32 Fricker Road, Illovo, Sandton
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground space-y-2">
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
