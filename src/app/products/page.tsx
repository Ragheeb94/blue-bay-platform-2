"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ChevronRight, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/lib/products";
import { Suspense } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("cat") || "all";
  const [activeCategory, setActiveCategory] = useState(catParam);

  useEffect(() => {
    setActiveCategory(catParam);
  }, [catParam]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A2463] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Mobility Equipment
          </h1>
          <p className="text-blue-200 text-lg max-w-xl">
            Every product is evaluated, configured, and delivered by certified
            ATP specialists. Insurance documentation handled for you.
          </p>
        </div>
      </section>

      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category filter */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            <SlidersHorizontal size={16} className="text-gray-400" />
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === c.value
                    ? "bg-[#0A2463] text-white"
                    : "bg-[#F0F7FF] text-[#0A2463] hover:bg-blue-100"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-56 bg-gray-50 overflow-hidden">
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
                    <p className="text-xs text-[#0EA5E9] font-semibold uppercase tracking-wider mb-1">
                      {p.categoryLabel}
                    </p>
                    <h3 className="font-bold text-[#0A2463] text-lg mb-1">
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">{p.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A2463] group-hover:gap-2 transition-all">
                      View details <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-16 text-gray-400">
                <p className="text-lg">No products in this category yet.</p>
                <p className="text-sm mt-2">
                  <Link href="/consultation" className="text-[#0EA5E9] font-semibold">
                    Contact us
                  </Link>{" "}
                  and we&apos;ll help you find exactly what you need.
                </p>
              </div>
            )}
          </div>

          {/* Insurance note */}
          <div className="mt-14 bg-[#F0F7FF] rounded-2xl p-8 flex flex-col sm:flex-row gap-5 items-start">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-bold text-[#0A2463] text-lg mb-1">
                Most equipment may be covered by insurance.
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Medicare, Medicaid, and many private plans cover Complex Rehab
                Technology with the right documentation. We verify your
                benefits and handle everything — at no extra cost to you.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0EA5E9] hover:text-[#0A2463] transition-colors"
              >
                Check my coverage <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
