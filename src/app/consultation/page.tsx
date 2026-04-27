"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    insurance: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-[#0A2463] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Book a Free Consultation
          </h1>
          <p className="text-blue-200 text-lg max-w-xl">
            A certified ATP specialist will reach out within one business day to understand your needs and outline next steps.
          </p>
        </div>
      </section>

      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-[#F0FFF4] border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-black text-[#0A2463] mb-2">We&apos;ll be in touch shortly!</h2>
                <p className="text-gray-600 mb-6">
                  A member of our team will call or email you within one business day to begin the conversation.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3 rounded-full hover:bg-[#071A4A] transition-colors"
                >
                  Back to Home <ArrowRight size={15} />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors"
                      placeholder="(714) 555-0100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">I am a...</label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="patient">Patient / User</option>
                      <option value="caregiver">Caregiver / Family Member</option>
                      <option value="ot">Occupational Therapist</option>
                      <option value="pt">Physical Therapist</option>
                      <option value="physician">Physician</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Insurance Type</label>
                    <select
                      name="insurance"
                      value={form.insurance}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="medicare">Medicare</option>
                      <option value="medicaid">Medicaid / Medi-Cal</option>
                      <option value="private">Private Insurance</option>
                      <option value="va">VA Benefits</option>
                      <option value="none">No Insurance / Self-Pay</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tell us about your situation</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors resize-none"
                    placeholder="What equipment are you looking for? Any diagnoses or functional limitations we should know about?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A2463] text-white font-bold py-4 rounded-full hover:bg-[#071A4A] transition-colors flex items-center justify-center gap-2"
                >
                  Submit Request <ArrowRight size={16} />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We respond within 1 business day. Your information is never shared.
                </p>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-5">
            <div className="bg-[#F0F7FF] rounded-2xl p-6">
              <h3 className="font-bold text-[#0A2463] mb-4">Prefer to call?</h3>
              <a
                href="tel:18889990072"
                className="flex items-center gap-2 text-[#0A2463] font-bold text-lg hover:text-[#0EA5E9] transition-colors"
              >
                <Phone size={18} /> 1-888-999-0072
              </a>
              <p className="text-sm text-gray-500 mt-1">Mon–Fri, 9am–5pm PT</p>
            </div>

            <div className="bg-[#F0F7FF] rounded-2xl p-6 space-y-3">
              <h3 className="font-bold text-[#0A2463] mb-3">Contact info</h3>
              <a href="mailto:info@bluebaymobility.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0A2463] transition-colors">
                <Mail size={14} className="text-[#0EA5E9]" /> info@bluebaymobility.com
              </a>
              <p className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={14} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                3002 Dow Ave Unit 312<br />Tustin, CA 92780
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-[#0A2463] mb-3">What to expect</h3>
              <ul className="space-y-3">
                {[
                  "Response within 1 business day",
                  "No obligation, no pressure",
                  "Insurance verified before any commitment",
                  "We come to you for evaluations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
