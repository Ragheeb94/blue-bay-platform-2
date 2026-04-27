"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const productLinks = [
  { href: "/products?cat=power-wheelchairs", label: "Power Wheelchairs" },
  { href: "/products?cat=manual-wheelchairs", label: "Manual Wheelchairs" },
  { href: "/products?cat=seating-positioning", label: "Seating & Positioning" },
  { href: "/products?cat=power-scooters", label: "Power Scooters" },
  { href: "/products?cat=walkers-rollators", label: "Walkers & Rollators" },
  { href: "/products?cat=transfer-aids", label: "Transfer Aids" },
  { href: "/products", label: "View All Products →" },
];

const helpLinks = [
  { href: "/who-we-help#patients", label: "Patients & Users" },
  { href: "/who-we-help#caregivers", label: "Caregivers & Families" },
  { href: "/who-we-help#clinicians", label: "OTs & Clinicians" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top strip */}
      <div className="bg-[#0A2463] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="text-blue-200 text-xs">
            Certified ATP Specialists · Medicare & Medicaid Accepted · Tustin, CA
          </span>
          <a href="tel:18889990072" className="flex items-center gap-1.5 font-semibold text-white hover:text-sky-300 transition-colors">
            <Phone size={13} />
            1-888-999-0072
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Blue Bay Mobility"
            width={44}
            height={44}
            className="rounded-full"
            onError={() => {}}
          />
          <span className="font-bold text-[#0A2463] text-lg leading-tight hidden sm:block">
            BlueBay<br />
            <span className="font-normal text-sm text-gray-500">Mobility</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Products dropdown */}
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#0A2463] font-medium transition-colors py-2">
              Products <ChevronDown size={15} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-56 z-50">
                {productLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7FF] hover:text-[#0A2463] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Who We Help dropdown */}
          <div className="relative" onMouseEnter={() => setHelpOpen(true)} onMouseLeave={() => setHelpOpen(false)}>
            <button className="flex items-center gap-1 text-gray-700 hover:text-[#0A2463] font-medium transition-colors py-2">
              Who We Help <ChevronDown size={15} />
            </button>
            {helpOpen && (
              <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52 z-50">
                {helpLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F0F7FF] hover:text-[#0A2463] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/how-it-works" className="text-gray-700 hover:text-[#0A2463] font-medium transition-colors">
            How It Works
          </Link>
          <Link href="/tracking" className="text-gray-700 hover:text-[#0A2463] font-medium transition-colors">
            Track Order
          </Link>
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/quiz"
            className="bg-[#F0F7FF] text-[#0A2463] font-semibold px-4 py-2 rounded-full text-sm hover:bg-blue-100 transition-colors"
          >
            Find My Equipment
          </Link>
          <Link
            href="/consultation"
            className="bg-[#0A2463] text-white font-semibold px-5 py-2 rounded-full text-sm hover:bg-[#071A4A] transition-colors"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">Products</p>
          {productLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block px-2 py-2 text-gray-700 hover:text-[#0A2463]" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <hr className="my-2" />
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">Who We Help</p>
          {helpLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block px-2 py-2 text-gray-700 hover:text-[#0A2463]" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <hr className="my-2" />
          <Link href="/how-it-works" className="block px-2 py-2 text-gray-700" onClick={() => setMobileOpen(false)}>How It Works</Link>
          <Link href="/tracking" className="block px-2 py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Track Order</Link>
          <div className="flex flex-col gap-2 pt-2">
            <Link href="/quiz" className="text-center bg-[#F0F7FF] text-[#0A2463] font-semibold px-4 py-3 rounded-full text-sm" onClick={() => setMobileOpen(false)}>
              Find My Equipment
            </Link>
            <Link href="/consultation" className="text-center bg-[#0A2463] text-white font-semibold px-4 py-3 rounded-full text-sm" onClick={() => setMobileOpen(false)}>
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
