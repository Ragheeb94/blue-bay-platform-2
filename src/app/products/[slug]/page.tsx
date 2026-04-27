import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ChevronLeft, Phone } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F0F7FF] border-b border-blue-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/products" className="flex items-center gap-1 hover:text-[#0A2463] transition-colors">
            <ChevronLeft size={14} /> All Products
          </Link>
          <span>/</span>
          <span className="text-[#0A2463] font-medium">{product.name}</span>
        </div>
      </div>

      <section className="py-[72px] bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.insuranceCovered && (
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> Insurance Eligible
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-sm text-[#0EA5E9] font-semibold uppercase tracking-wider mb-2">
                {product.categoryLabel}
              </p>
              <h1 className="text-3xl lg:text-4xl font-black text-[#0A2463] mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-500 mb-5">{product.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              <h3 className="font-bold text-[#0A2463] mb-3">Key features</h3>
              <ul className="space-y-2 mb-6">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={15} className="text-[#0EA5E9] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div className="bg-[#F0F7FF] rounded-xl p-5 mb-6">
                <p className="text-sm font-semibold text-[#0A2463] mb-1">Ideal for</p>
                <p className="text-sm text-gray-600">{product.idealFor}</p>
              </div>

              {/* Insurance */}
              {product.insuranceCovered && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
                  <strong>Medicare & Medicaid eligible.</strong> With proper documentation from a certified ATP and your physician, this equipment may be covered. We handle all paperwork.
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors"
                >
                  Book an Evaluation <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:18889990072"
                  className="inline-flex items-center justify-center gap-2 bg-[#F0F7FF] text-[#0A2463] font-bold px-6 py-3.5 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Phone size={15} /> Call 1-888-999-0072
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-[72px] bg-[#F0F7FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-[#0A2463] mb-3">
            Ready to get started?
          </h2>
          <p className="text-gray-500 mb-6">
            A certified ATP will evaluate your needs and configure this equipment specifically for your body and functional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] text-white font-bold px-6 py-3 rounded-full hover:bg-sky-400 transition-colors"
            >
              Take Equipment Finder
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-3 rounded-full hover:bg-[#071A4A] transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
