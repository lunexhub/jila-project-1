import { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const data = new FormData(e.target as HTMLFormElement);
    data.append("access_key", "85860466-3194-477b-adc9-1bb86fabb4fb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    setSending(false);

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      <HeroSection>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Let's Talk
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold lg:text-6xl">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Ready to take your business to the next level? Reach out to us today.
          </p>
        </div>
      </HeroSection>

      <section className="container py-16 sm:py-24">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@jilaservices.co.za" className="block font-medium text-foreground hover:text-primary transition-colors">info@jilaservices.co.za</a>
                  <a href="mailto:sales@jilaservices.co.za" className="block font-medium text-foreground hover:text-primary transition-colors">sales@jilaservices.co.za</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">32 Fricker Road, Illovo, Sandton</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card-gradient p-6">
              <h3 className="font-display font-semibold text-foreground">Business Hours</h3>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Monday – Friday: 08:00 – 17:00</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card-gradient p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-xl font-bold text-foreground">Send us a message</h3>
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  { id: "phone", label: "Phone", type: "tel", placeholder: "+27..." },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-foreground">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      name={field.id}
                      placeholder={field.placeholder}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:opacity-60"
                >
                  {sending ? "Sending..." : <> Send Message <Send size={16} /> </>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
