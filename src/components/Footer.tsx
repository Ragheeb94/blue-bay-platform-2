import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071A4A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Blue Bay Mobility" width={40} height={40} className="rounded-full opacity-90" />
              <span className="font-bold text-white text-lg">BlueBay Mobility</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Complex Rehab Technology specialists serving Southern California. Part of the Medics Mobility Inc. family since 2003.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:18889990072" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Phone size={14} /> 1-888-999-0072
              </a>
              <a href="mailto:info@bluebaymobility.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Mail size={14} /> info@bluebaymobility.com
              </a>
              <p className="flex items-start gap-2 text-blue-200">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                3002 Dow Ave Unit 312<br />Tustin, CA 92780
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Power Wheelchairs", "/products?cat=power-wheelchairs"],
                ["Manual Wheelchairs", "/products?cat=manual-wheelchairs"],
                ["Seating & Positioning", "/products?cat=seating-positioning"],
                ["Power Scooters", "/products?cat=power-scooters"],
                ["Walkers & Rollators", "/products?cat=walkers-rollators"],
                ["Transfer Aids", "/products?cat=transfer-aids"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Free Consultation", "/consultation"],
                ["Equipment Finder Quiz", "/quiz"],
                ["How It Works", "/how-it-works"],
                ["Insurance Navigation", "/how-it-works#insurance"],
                ["Order Tracking", "/tracking"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Who We Help", "/who-we-help"],
                ["Patients & Users", "/who-we-help#patients"],
                ["Caregivers & Families", "/who-we-help#caregivers"],
                ["OTs & Clinicians", "/who-we-help#clinicians"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", href: "https://facebook.com", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Instagram", href: "https://instagram.com", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "LinkedIn", href: "https://linkedin.com", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/10 mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Blue Bay Mobility Inc. All rights reserved.</p>
          <p>Part of the <span className="text-white">Medics Mobility Inc.</span> family · Est. 2003</p>
        </div>
      </div>
    </footer>
  );
}
