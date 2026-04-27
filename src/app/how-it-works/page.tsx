import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Initial Consultation",
    desc: "Your journey begins with a conversation — not paperwork. We spend time understanding your daily life: where you live, what you do, what you want to be able to do. This isn't a standard intake form. It's a real conversation with a mobility specialist.",
    detail: "In-person, phone, or telehealth. We come to you if needed.",
  },
  {
    n: "02",
    title: "Clinical Evaluation",
    desc: "A certified Assistive Technology Professional (ATP) conducts a thorough seating and mobility evaluation. We coordinate with your occupational therapist or physical therapist, or we can refer you to one of our clinical partners.",
    detail: "Completed within 1–2 weeks of first contact.",
  },
  {
    n: "03",
    title: "Equipment Selection",
    desc: "Based on the evaluation, we identify 2–3 equipment options that match your functional goals, home environment, and insurance requirements. We explain the pros and cons of each — clearly, without jargon.",
    detail: "You're involved in every decision.",
  },
  {
    n: "04",
    title: "Insurance & Authorization",
    desc: "We gather all required documentation — physician orders, clinical notes, justification letters — and submit a Prior Authorization to your insurance. We track it, follow up, and appeal if needed. This is where most providers drop the ball. We don't.",
    detail: "98% approval rate. 48-hour average quote turnaround.",
  },
  {
    n: "05",
    title: "Delivery & Fitting",
    desc: "Once approved, your equipment is delivered to your home and custom-fitted by our technicians. This isn't a drop-and-go. We adjust every setting — seat height, footrest angle, armrest position — until it's right.",
    detail: "In-home delivery within Southern California.",
  },
  {
    n: "06",
    title: "Ongoing Support",
    desc: "Your needs change. Equipment wears. We're here for repairs, follow-up adjustments, and re-evaluations when your condition evolves. Our relationship doesn't end at delivery.",
    detail: "Repair services and follow-up visits available.",
  },
];

const faqs = [
  {
    q: "Does Medicare cover power wheelchairs?",
    a: "Yes — Medicare Part B covers power wheelchairs as Durable Medical Equipment (DME) when medically necessary. You need a face-to-face evaluation with your physician, documentation of your functional limitations, and a detailed written order. We handle all of this for you.",
  },
  {
    q: "How long does the insurance approval process take?",
    a: "Prior authorization timelines vary by insurer. Medicare typically takes 2–4 weeks. Some private insurers can take 4–8 weeks. We submit immediately after the evaluation and follow up proactively — most of our clients receive approval faster than average.",
  },
  {
    q: "Do I need a referral to contact you?",
    a: "No. You can contact us directly. We'll help identify whether you need a physician referral as part of the insurance documentation process — but that doesn't stop you from getting the conversation started today.",
  },
  {
    q: "Can you work with my existing OT or PT?",
    a: "Absolutely. We collaborate with therapists regularly. We can join the evaluation, provide equipment expertise, and handle all documentation once the therapist completes the clinical portion. Many OTs and PTs prefer this model.",
  },
  {
    q: "What if my insurance denies coverage?",
    a: "Denials aren't final. We review the reason for denial, update documentation if needed, and submit a formal appeal. Our team has a strong track record on appeals because we build the right documentation from day one.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-[#0A2463] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            How It Works
          </h1>
          <p className="text-blue-200 text-lg max-w-xl">
            The CRT process can feel overwhelming. Here&apos;s exactly what happens — step by step — when you work with Blue Bay Mobility.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-[72px] bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0A2463] flex items-center justify-center">
                  <span className="text-white font-black text-sm">{step.n}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-black text-[#0A2463]">{step.title}</h2>
                    {i < steps.length - 1 && (
                      <span className="text-xs text-gray-300 hidden sm:block ml-4 shrink-0 mt-1.5">Step {i + 1} of {steps.length}</span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-2">{step.desc}</p>
                  <div className="inline-flex items-center gap-1.5 bg-[#F0F7FF] rounded-full px-3 py-1 text-xs text-[#0A2463] font-medium">
                    <CheckCircle2 size={11} className="text-[#0EA5E9]" /> {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3">
            <Link
              href="/consultation"
              className="flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-7 py-4 rounded-full hover:bg-[#071A4A] transition-colors"
            >
              Start with a Consultation <ArrowRight size={17} />
            </Link>
            <Link
              href="/quiz"
              className="flex items-center justify-center gap-2 bg-[#F0F7FF] text-[#0A2463] font-bold px-7 py-4 rounded-full hover:bg-blue-100 transition-colors"
            >
              Take Equipment Finder Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance section */}
      <section id="insurance" className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-3">
              Understanding Insurance
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Insurance shouldn&apos;t be a barrier. Here&apos;s what you need to know.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Medicare",
                color: "bg-blue-50 border-blue-200",
                items: [
                  "Part B covers DME including power wheelchairs",
                  "Requires face-to-face physician evaluation",
                  "Prior Authorization required for most CRT",
                  "80% covered after deductible (Part B)",
                ],
              },
              {
                title: "Medicaid / Medi-Cal",
                color: "bg-purple-50 border-purple-200",
                items: [
                  "Covers complex rehab technology",
                  "California Medi-Cal has broad CRT coverage",
                  "Income-based eligibility",
                  "We verify your specific plan benefits",
                ],
              },
              {
                title: "Private Insurance",
                color: "bg-green-50 border-green-200",
                items: [
                  "Coverage varies widely by plan",
                  "Most plans cover medically necessary DME",
                  "We verify benefits before any cost to you",
                  "Appeals available if initially denied",
                ],
              },
            ].map((plan) => (
              <div key={plan.title} className={`rounded-2xl border p-6 ${plan.color}`}>
                <h3 className="font-bold text-[#0A2463] text-lg mb-4">{plan.title}</h3>
                <ul className="space-y-2">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={13} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[72px] bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-100 rounded-2xl p-5">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-bold text-[#0A2463] pr-4">{faq.q}</span>
                  <ChevronDown size={18} className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-[#0A2463] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors"
            >
              Talk to a Specialist <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
