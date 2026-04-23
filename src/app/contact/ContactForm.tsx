"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 chess-bg">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="label-caps text-gold mb-4">Get In Touch</p>
          <h1 className="heading-display text-5xl md:text-6xl text-ivory mb-6">
            Start the <span className="gold-text italic">Conversation</span>
          </h1>
          <hr className="divider-gold w-24 mx-auto mb-6" />
          <p className="text-ivory-dim text-lg max-w-2l mx-auto leading-relaxed">
            Every great outcome starts with a single conversation. Tell us where
            you want to go - we'll help you get there.
          </p>
        </div>
      </section>

      {/* contact body */}
      <section className="bg-black py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left side */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="label-caps text-gold">Contact Information</p>
              <h2 className="heading-section text-ivory">
                Let's make your
                <span className="gold-text italic"> next move.</span>
              </h2>
              <hr className="divider-gold w-16" />
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <p className="label-caps text-gold-dim">Email</p>
                <a
                  href="mailto:info@nexgenprosol.com"
                  className="text-ivory hover:text-gold transition-colors duration-300"
                >
                  info@nexgenprosol.com
                </a>
              </div>

              {/* <div className="flex flex-col gap-1">
                <p className="label-caps text-gold-dim">Phone</p>
                <a
                  href="tel:+17135550000"
                  className="text-ivory hover:text-gold transition-colors duration-300"
                >
                  (713) 555-0000
                </a>
              </div> */}

              <div className="flex flex-col gap-1">
                <p className="label-caps text-gold-dim">Location</p>
                <p className="text-ivory">Austin, TX</p>
              </div>

              {/* <div className="flex flex-col gap-1">
                <p className="label-caps text-gold-dim">Office Hours</p>
                <p className="text-ivory">Monday - Friday, 9AM - 6PM CST</p>
              </div> */}
            </div>

            <div className="relative h-48 chess-bg-sm border border-white/10 flex items-center justify-center mt-auto">
              <div className="absolute inset-0 bg-black/70" />
              <span className="relative z-10 text-6xl text-ivory/30">♟︎</span>
            </div>
          </div>

          {/* right side */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col gap-6 items-start justify-center h-full border border-gold/30 p-10">
                <span className="text-5xl text-ivory">♛︎</span>
                <h3 className="heading-section text-ivory">
                  Message <span className="gold-text italic">received.</span>
                </h3>
                <hr className="divider-gold w-16" />
                <p className="text-ivory-dim leading-relaxed">
                  Thank you for reaching out. A member of our team will be in
                  touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="label-caps text-gold-dim" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-black-soft border border-white/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="label-caps text-gold-dim" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-black-soft border border-white/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="label-caps text-gold-dim" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder=""
                    className="bg-black-soft border border-white/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>

                {/* Service */}
                <div className="flex flex-col gap-2">
                  <label className="label-caps text-gold-dim" htmlFor="service">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-black-soft border border-white/10 text-ivory px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-black-soft">
                      Select a service...
                    </option>
                    <option value="strategy" className="bg-black-soft">
                      Business Strategy
                    </option>
                    <option value="operations" className="bg-black-soft">
                      Operations
                    </option>
                    <option value="consulting" className="bg-black-soft">
                      Consulting
                    </option>
                    <option value="coaching" className="bg-black-soft">
                      Executive Coaching
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="label-caps text-gold-dim" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals and challenges..."
                    className="bg-black-soft border border-white/10 text-ivory placeholder:text-ivory/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
