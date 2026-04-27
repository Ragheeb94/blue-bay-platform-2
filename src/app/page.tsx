import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Users,
  Award,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { products } from "@/lib/products";

const stats = [
  { value: "22+", label: "Years of Experience" },
  { value: "5,000+", label: "Clients Served" },
  { value: "98%", label: "Insurance Approval Rate" },
  { value: "48hr", label: "Avg Quote Turnaround" },
];

const audiences = [
  {
    icon: "🧑‍🦽",
    title: "Patients & Users",
    desc: "You need equipment that fits your life — not just your diagnosis. We evaluate you as a whole person.",
    href: "/who-we-help#patients",
    color: "bg-[#F0F7FF]",
    accent: "text-[#0A2463]",
  },
  {
    icon: "❤️",
    title: "Caregivers & Families",
    desc: "Insurance paperwork doesn't have to be your burden. We handle it — and keep you in the loop every step.",
    href: "/who-we-help#caregivers",
    color: "bg-[#FFF7F0]",
    accent: "text-orange-700",
  },
  {
    icon: "🩺",
    title: "OTs & Clinicians",
    desc: "Refer with confidence. Our ATPs handle all documentation and keep you informed on your patient's progress.",
    href: "/who-we-help#clinicians",
    color: "bg-[#F0FFF4]",
    accent: "text-green-700",
  },
];

const steps = [
  {
    n: "1",
    title: "Get started.",
    desc: "Tell us who you are and what you're looking for. A 10-minute conversation saves weeks of wrong turns.",
    cta: "Book a consultation",
    href: "/consultation",
    Icon: Users,
  },
  {
    n: "2",
    title: "Find solutions.",
    desc: "Our team evaluates your functional needs, tries options with you, and matches you to the right equipment.",
    cta: "See how it works",
    href: "/how-it-works",
    Icon: Award,
  },
  {
    n: "3",
    title: "Understand funding.",
    desc: "We demystify insurance — Medicare, Medicaid, private plans. We verify coverage and submit everything for you.",
    cta: "Learn about funding",
    href: "/how-it-works#insurance",
    Icon: ShieldCheck,
  },
  {
    n: "4",
    title: "Live vibrantly.",
    desc: "Equipment delivered to your door, configured to fit, and we train you and your caregivers on-site.",
    cta: "Book a repair",
    href: "/consultation",
    Icon: Clock,
  },
];

const testimonials = [
  {
    quote:
      "I'd been told by three other places my insurance wouldn't cover a power wheelchair. Blue Bay got it approved in two weeks. Their team actually fought for me.",
    name: "Maria T.",
    role: "Power wheelchair user, Anaheim CA",
    rating: 5,
  },
  {
    quote:
      "As an OT, I refer all my complex patients here. The documentation is airtight and I always know the status of my referrals. Exceptional partner.",
    name: "Dr. Sarah K.",
    role: "Occupational Therapist, Irvine CA",
    rating: 5,
  },
  {
    quote:
      "My mom was terrified about the whole process. The team came to our home, explained everything, and made her feel like a person — not a claim number.",
    name: "James R.",
    role: "Caregiver, Orange County CA",
    rating: 5,
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A2463] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-3">
              Complex Rehab & Mobility Solutions<br />
              <span className="text-[#0EA5E9]">Backed by Over 22 Years of Proven Expertise</span>
            </h1>
            <p className="text-base text-blue-100 mb-6 leading-relaxed max-w-2xl">
              BlueBay Mobility provides custom rehab wheelchairs, power wheelchairs, and professional mobility services expanding into the U.S. from our established Canadian operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-sky-400 transition-colors"
              >
                Find My Equipment <ArrowRight size={16} />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2463] font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-[#071A4A] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-black text-[#0EA5E9]">{s.value}</div>
                <div className="text-sm text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-3">
              We help real people in real situations.
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Whether you&apos;re navigating this for yourself, a parent, or a patient — there&apos;s a path here for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className={`${a.color} rounded-2xl p-7 group hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className={`text-xl font-bold ${a.accent} mb-2`}>{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.desc}</p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${a.accent} group-hover:gap-2 transition-all`}>
                  Learn more <ChevronRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz CTA banner */}
      <section className="py-[72px] bg-[#0EA5E9]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Answer 4 quick questions and we&apos;ll point you toward the right equipment category — and whether insurance will help cover it.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-[#0A2463] font-black px-8 py-4 rounded-full text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Take the Equipment Finder <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-3">
              Your journey begins here.
            </h2>
            <p className="text-gray-500 text-lg">Simple steps. No surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0A2463] text-white rounded-full flex items-center justify-center font-black text-lg shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2463] mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9] hover:text-[#0A2463] transition-colors"
                    >
                      {step.cta} <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-2">Featured equipment.</h2>
              <p className="text-gray-500">Every item is evaluated and configured by a certified ATP for your exact needs.</p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1 text-[#0EA5E9] font-semibold hover:text-[#0A2463] transition-colors"
            >
              View all <ChevronRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-52 bg-gray-50 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.insuranceCovered && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={11} /> Insurance Eligible
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#0EA5E9] font-semibold uppercase tracking-wider mb-1">{p.categoryLabel}</p>
                  <h3 className="font-bold text-[#0A2463] text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{p.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A2463] group-hover:gap-2 transition-all">
                    View details <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-1 text-[#0EA5E9] font-semibold">
              View all products <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / impact */}
      <section className="py-[72px] bg-[#0A2463]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-5">
                We care because we&apos;re real.
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Our team includes certified ATPs, insurance specialists, and delivery technicians who have spent over two decades figuring out what actually works — clinically and logistically — for people who need mobility equipment.
              </p>
              <ul className="space-y-3">
                {[
                  "Certified Assistive Technology Professionals (ATP) on every case",
                  "Medicare, Medicaid, and private insurance processed in-house",
                  "In-home delivery, fitting, and caregiver training",
                  "Ongoing repair and follow-up support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-blue-100">
                    <CheckCircle2 size={17} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-8">
                <Link href="/consultation" className="bg-[#0EA5E9] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-sky-400 transition-colors">
                  Book Consultation
                </Link>
                <Link href="/about" className="bg-white/10 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-white/20 transition-colors">
                  About Us
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-[#0EA5E9] mb-1">{s.value}</div>
                  <div className="text-sm text-blue-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-3">What our clients say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#F0F7FF] rounded-2xl p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-[#0A2463] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge CTA */}
      <section className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-4">Knowledge is key. Build yours now.</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Understanding your options — and your rights — is the first step to getting the equipment you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors">
              How It Works <ArrowRight size={17} />
            </Link>
            <Link href="/consultation" className="inline-flex items-center justify-center gap-2 bg-white text-[#0A2463] font-bold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors border border-gray-200">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
