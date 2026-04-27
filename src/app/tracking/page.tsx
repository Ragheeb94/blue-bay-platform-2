"use client";
import { useState } from "react";
import { Search, Package, CheckCircle2, Clock, Truck, Home } from "lucide-react";

type TrackingStatus = {
  orderId: string;
  product: string;
  status: "processing" | "insurance" | "approved" | "shipping" | "delivered";
  steps: { label: string; done: boolean; date?: string }[];
};

const DEMO_ORDERS: Record<string, TrackingStatus> = {
  "BBM-2024-001": {
    orderId: "BBM-2024-001",
    product: "Permobil M3 Corpus",
    status: "shipping",
    steps: [
      { label: "Order received", done: true, date: "Jan 15, 2025" },
      { label: "Insurance verification", done: true, date: "Jan 17, 2025" },
      { label: "Prior authorization approved", done: true, date: "Jan 28, 2025" },
      { label: "Equipment shipped", done: true, date: "Feb 3, 2025" },
      { label: "Delivered & fitted", done: false },
    ],
  },
  "BBM-2024-002": {
    orderId: "BBM-2024-002",
    product: "Quickie Q50 R",
    status: "approved",
    steps: [
      { label: "Order received", done: true, date: "Jan 20, 2025" },
      { label: "Insurance verification", done: true, date: "Jan 22, 2025" },
      { label: "Prior authorization approved", done: true, date: "Feb 1, 2025" },
      { label: "Equipment shipped", done: false },
      { label: "Delivered & fitted", done: false },
    ],
  },
};

const statusIcons = {
  processing: Clock,
  insurance: Clock,
  approved: CheckCircle2,
  shipping: Truck,
  delivered: Home,
};

export default function TrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState<TrackingStatus | null | "not-found">(null);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const found = DEMO_ORDERS[orderId.trim().toUpperCase()];
    setResult(found || "not-found");
  }

  return (
    <>
      <section className="bg-[#0A2463] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">Track Your Order</h1>
          <p className="text-blue-200 text-lg">
            Enter your order ID to see the current status of your equipment.
          </p>
        </div>
      </section>

      <section className="py-[72px] bg-[#F0F7FF] min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Order ID</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="e.g. BBM-2024-001"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#0A2463] text-white font-bold px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-[#071A4A] transition-colors"
              >
                <Search size={16} /> Track
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Try <strong>BBM-2024-001</strong> or <strong>BBM-2024-002</strong> for a demo
            </p>
          </form>

          {result === "not-found" && (
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <Package size={40} className="text-gray-300 mx-auto mb-3" />
              <h3 className="font-bold text-gray-700 mb-1">Order not found</h3>
              <p className="text-sm text-gray-400">
                Check the order ID in your confirmation email or call us at{" "}
                <a href="tel:18889990072" className="text-[#0EA5E9] font-semibold">
                  1-888-999-0072
                </a>
              </p>
            </div>
          )}

          {result && result !== "not-found" && (
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Order ID</p>
                  <p className="font-bold text-[#0A2463] text-lg">{result.orderId}</p>
                  <p className="text-sm text-gray-500">{result.product}</p>
                </div>
                <div className="bg-[#F0F7FF] rounded-xl px-4 py-2 text-sm font-semibold text-[#0A2463] capitalize flex items-center gap-1.5">
                  {(() => {
                    const Icon = statusIcons[result.status];
                    return <Icon size={14} />;
                  })()}
                  {result.status === "shipping" ? "In Transit" : result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                </div>
              </div>

              <div className="space-y-4">
                {result.steps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${step.done ? "bg-[#0A2463]" : "bg-gray-100"}`}>
                        {step.done ? (
                          <CheckCircle2 size={16} className="text-white" />
                        ) : (
                          <span className="text-xs text-gray-400 font-bold">{i + 1}</span>
                        )}
                      </div>
                      {i < result.steps.length - 1 && (
                        <div className={`w-0.5 h-8 mt-1 ${step.done ? "bg-[#0A2463]" : "bg-gray-100"}`} />
                      )}
                    </div>
                    <div className="pt-1">
                      <p className={`text-sm font-semibold ${step.done ? "text-[#0A2463]" : "text-gray-400"}`}>
                        {step.label}
                      </p>
                      {step.date && (
                        <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 text-sm text-gray-500">
                Questions about your order?{" "}
                <a href="tel:18889990072" className="text-[#0EA5E9] font-semibold hover:text-[#0A2463] transition-colors">
                  Call 1-888-999-0072
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
