import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WhoWeHelpPage() {
  return (
    <>
      <section className="bg-[#0A2463] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">Who We Help</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Every person who walks through our door has a different story. Here&apos;s how we serve each one.
          </p>
        </div>
      </section>

      {/* Patients */}
      <section id="patients" className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">🧑‍🦽</div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-4">
                Patients & Users
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                You&apos;re not a diagnosis. You&apos;re a person with goals, habits, and a life to live. The right mobility equipment should help you live it — not just get you from point A to B.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you&apos;ve been recently diagnosed, have been using a chair for years, or are exploring options for the first time, we meet you where you are. Our certified ATPs take time to understand what independence means to you — and then configure equipment that gets you there.
              </p>
              <ul className="space-y-2 mb-7">
                {[
                  "Free, no-obligation consultation",
                  "In-home evaluation at your convenience",
                  "All insurance paperwork handled for you",
                  "Equipment trial before final order",
                  "Ongoing support and repairs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-[#0EA5E9] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quiz" className="inline-flex items-center gap-2 bg-[#0EA5E9] text-white font-bold px-6 py-3.5 rounded-full hover:bg-sky-400 transition-colors">
                  Find My Equipment <ArrowRight size={16} />
                </Link>
                <Link href="/consultation" className="inline-flex items-center gap-2 bg-[#F0F7FF] text-[#0A2463] font-bold px-6 py-3.5 rounded-full hover:bg-blue-100 transition-colors">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="bg-[#F0F7FF] rounded-2xl p-8">
              <h3 className="font-bold text-[#0A2463] mb-4 text-lg">Conditions we commonly work with</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "ALS / Lou Gehrig&apos;s disease",
                  "Multiple Sclerosis (MS)",
                  "Spinal Cord Injury",
                  "Cerebral Palsy",
                  "Muscular Dystrophy",
                  "Parkinson&apos;s Disease",
                  "Stroke / Hemiplegia",
                  "Orthopedic conditions",
                  "Traumatic Brain Injury",
                  "Post-surgical recovery",
                  "Aging-related mobility loss",
                  "Rare neurological conditions",
                ].map((cond) => (
                  <div key={cond} className="text-sm text-gray-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full shrink-0"></span>
                    <span dangerouslySetInnerHTML={{ __html: cond }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregivers */}
      <section id="caregivers" className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-[#0A2463] mb-4 text-lg">We take the burden off your plate</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Insurance verification",
                    desc: "We call your insurer, verify benefits, and tell you exactly what&apos;s covered before any commitment.",
                  },
                  {
                    title: "Prior authorization",
                    desc: "We prepare and submit all clinical documentation — letters, physician orders, functional assessments.",
                  },
                  {
                    title: "Communication",
                    desc: "We keep you updated at every step so you&apos;re never wondering what&apos;s happening.",
                  },
                  {
                    title: "Training",
                    desc: "When equipment arrives, we train both the user and the caregiver — at home, at your pace.",
                  },
                ].map((item) => (
                  <li key={item.title} className="border-l-2 border-[#0EA5E9] pl-4">
                    <p className="font-semibold text-[#0A2463] text-sm">{item.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-5xl mb-4">❤️</div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-4">
                Caregivers & Families
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Watching someone you love struggle with mobility — while simultaneously navigating insurance, paperwork, and medical jargon — is exhausting. You shouldn&apos;t have to do this alone.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We work alongside you. One point of contact. Clear timelines. Plain-language explanations of what&apos;s happening and what comes next. You focus on your loved one. We handle the rest.
              </p>
              <Link href="/consultation" className="inline-flex items-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors">
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinicians */}
      <section id="clinicians" className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl mb-4">🩺</div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-4">
                OTs & Clinicians
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                Your patients deserve equipment that&apos;s been properly evaluated, correctly documented, and actually approved. That means working with a team that understands the clinical and insurance sides equally well.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our certified ATPs partner with OTs, PTs, and physicians to ensure joint evaluations go smoothly, documentation meets payer requirements, and patients receive their equipment without unnecessary delays.
              </p>
              <ul className="space-y-2 mb-7">
                {[
                  "Streamlined referral pathway — call or fax",
                  "Joint evaluations available",
                  "We prepare all prior auth documentation",
                  "Status updates throughout the process",
                  "Appeals handled if insurance denies",
                  "No cost to your practice",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-[#0EA5E9] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:18889990072" className="inline-flex items-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors">
                  Call to Refer a Patient
                </a>
                <a href="mailto:info@bluebaymobility.com" className="inline-flex items-center gap-2 bg-[#F0F7FF] text-[#0A2463] font-bold px-6 py-3.5 rounded-full hover:bg-blue-100 transition-colors">
                  Send a Referral
                </a>
              </div>
            </div>
            <div className="bg-[#0A2463] rounded-2xl p-8 text-white">
              <h3 className="font-bold text-white mb-5 text-lg">Why clinicians trust Blue Bay</h3>
              <div className="space-y-5">
                {[
                  { icon: "📋", title: "Documentation expertise", desc: "Our team knows exactly what Medicare and private payers require. No missing letters, no incomplete orders." },
                  { icon: "📞", title: "Reliable communication", desc: "We don't go silent. You and your patient get updates throughout the authorization and delivery process." },
                  { icon: "✅", title: "High approval rate", desc: "98% insurance approval. When we submit, we've already anticipated and addressed the likely denial reasons." },
                  { icon: "🤝", title: "Collaborative approach", desc: "We join your evaluation if helpful, or work from your notes. We adapt to your workflow." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-blue-200 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-[72px] bg-[#0EA5E9]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to take the first step?</h2>
          <p className="text-white/90 text-lg mb-7">
            Whether you&apos;re a patient, a caregiver, or a clinician — we&apos;re here to make this easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2463] font-black px-7 py-4 rounded-full hover:bg-gray-50 transition-colors">
              Book Consultation <ArrowRight size={17} />
            </Link>
            <Link href="/quiz" className="inline-flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-7 py-4 rounded-full hover:bg-[#071A4A] transition-colors">
              Take the Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
