import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    year: "2003",
    title: "Medics Mobility Inc. Founded",
    desc: "Established in Ontario, Canada, Medics Mobility set out to change the way people with complex mobility needs receive equipment and care.",
  },
  {
    year: "2010",
    title: "ATP Certification Program",
    desc: "The team formalized its Assistive Technology Professional certification pathway, ensuring every client evaluation is led by a credentialed specialist.",
  },
  {
    year: "2018",
    title: "5,000 Clients Served",
    desc: "A milestone that reflected not just growth, but the compounding trust built through careful, clinical care over 15 years.",
  },
  {
    year: "2024",
    title: "Blue Bay Mobility Launches in the U.S.",
    desc: "Bringing 22+ years of Canadian clinical experience to Southern California. Blue Bay Mobility opened its Tustin, CA location to serve U.S. patients with Medicare, Medicaid, and private insurance.",
  },
];

const competencies = [
  {
    title: "Complex Rehab Technology",
    desc: "Power wheelchairs, manual ultralight chairs, custom seating systems — evaluated and configured by ATPs for medically complex individuals.",
  },
  {
    title: "Insurance Navigation",
    desc: "In-house insurance specialists handle Medicare, Medicaid, and private payer documentation, prior authorization, and appeals.",
  },
  {
    title: "Clinical Collaboration",
    desc: "We partner with OTs, PTs, and physicians — joining evaluations, preparing documentation, and ensuring clinical intent is preserved through the insurance process.",
  },
  {
    title: "In-Home Service",
    desc: "Delivery, custom fitting, and caregiver training at your home. Equipment is configured to your body and your environment — not just from a catalog.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0A2463] py-[72px]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">About Blue Bay Mobility</h1>
          <p className="text-blue-200 text-lg max-w-xl">
            22+ years of clinical experience. Part of the Medics Mobility Inc. family. Now serving Southern California.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[72px] bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-5">
            Our mission is simple.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-5">
            Get the right equipment to the right person — clinically correct, properly funded, and configured for their actual life. Not their diagnosis. Their life.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We exist because the standard model is broken. Too many people settle for equipment that doesn&apos;t fit, give up on insurance because it feels impossible, or never even know what they&apos;re entitled to. We fix that — one person at a time.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0A2463] mb-10 text-center">Our history</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#0A2463]/20 hidden sm:block" />
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-[#0A2463] rounded-2xl flex items-center justify-center z-10">
                    <span className="text-white text-xs font-black">{item.year.slice(2)}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm">
                    <div className="text-xs text-[#0EA5E9] font-bold mb-1">{item.year}</div>
                    <h3 className="font-bold text-[#0A2463] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core competencies */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0A2463] mb-10 text-center">Core competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((c) => (
              <div key={c.title} className="bg-[#F0F7FF] rounded-2xl p-6">
                <h3 className="font-bold text-[#0A2463] text-lg mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-[72px] bg-[#0A2463]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-white mb-4">Get in touch</h2>
              <p className="text-blue-100 mb-8">
                We&apos;re based in Tustin, CA and serve clients throughout Southern California. Reach out however works best for you.
              </p>
              <div className="space-y-4">
                <a href="tel:18889990072" className="flex items-center gap-3 text-white hover:text-[#0EA5E9] transition-colors">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300">Phone</p>
                    <p className="font-semibold">1-888-999-0072</p>
                  </div>
                </a>
                <a href="mailto:info@bluebaymobility.com" className="flex items-center gap-3 text-white hover:text-[#0EA5E9] transition-colors">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300">Email</p>
                    <p className="font-semibold">info@bluebaymobility.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-white">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300">Address</p>
                    <p className="font-semibold">3002 Dow Ave Unit 312<br />Tustin, CA 92780</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-white mb-4">Why work with us?</h3>
              <ul className="space-y-3">
                {[
                  "22+ years clinical experience",
                  "5,000+ clients successfully served",
                  "98% insurance approval rate",
                  "48hr average quote turnaround",
                  "Certified ATP on every case",
                  "Medicare, Medicaid, private insurance",
                  "In-home delivery & training",
                  "Ongoing support & repairs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                    <CheckCircle2 size={14} className="text-[#0EA5E9] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-6">
                <Link href="/consultation" className="bg-[#0EA5E9] text-white font-bold px-5 py-3 rounded-full text-sm hover:bg-sky-400 transition-colors">
                  Book Consultation
                </Link>
                <Link href="/quiz" className="bg-white/10 text-white font-bold px-5 py-3 rounded-full text-sm hover:bg-white/20 transition-colors">
                  Equipment Finder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
