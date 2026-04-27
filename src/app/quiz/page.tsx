"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

type Answer = {
  questionId: number;
  value: string;
};

const questions = [
  {
    id: 1,
    question: "Who is the equipment for?",
    options: [
      { value: "myself", label: "Myself", icon: "🧑‍🦽" },
      { value: "family-member", label: "A family member", icon: "❤️" },
      { value: "patient", label: "My patient (clinician)", icon: "🩺" },
    ],
  },
  {
    id: 2,
    question: "What is the primary mobility challenge?",
    options: [
      { value: "cannot-walk", label: "Cannot walk / very limited walking", icon: "🚫" },
      { value: "pain-fatigue", label: "Pain or fatigue limits distance", icon: "😔" },
      { value: "balance", label: "Balance or fall risk", icon: "⚖️" },
      { value: "transfers", label: "Difficulty getting in/out of bed or chair", icon: "🛏️" },
    ],
  },
  {
    id: 3,
    question: "Can the person use their arms and hands?",
    options: [
      { value: "full-use", label: "Full arm strength and coordination", icon: "💪" },
      { value: "limited", label: "Limited arm strength or coordination", icon: "🤝" },
      { value: "minimal", label: "Minimal or no arm function", icon: "🔴" },
    ],
  },
  {
    id: 4,
    question: "Do you have insurance coverage?",
    options: [
      { value: "medicare", label: "Medicare", icon: "🏥" },
      { value: "medicaid", label: "Medicaid", icon: "🏛️" },
      { value: "private", label: "Private insurance", icon: "📋" },
      { value: "unsure", label: "Not sure", icon: "❓" },
    ],
  },
];

function getRecommendation(answers: Answer[]) {
  const mobility = answers.find((a) => a.questionId === 2)?.value;
  const arms = answers.find((a) => a.questionId === 3)?.value;

  if (mobility === "cannot-walk") {
    if (arms === "minimal") {
      return {
        category: "Power Wheelchairs",
        slug: "power-wheelchairs",
        reason:
          "Based on your answers, a power wheelchair is the most appropriate option. With limited arm function, a power chair with joystick or alternative control gives full independence.",
        product: "permobil-m3-corpus",
        productName: "Permobil M3 Corpus",
      };
    }
    return {
      category: "Manual or Power Wheelchairs",
      slug: "manual-wheelchairs",
      reason:
        "You may benefit from either a manual or power wheelchair depending on your specific needs. Our ATP will evaluate which gives you the best independence and comfort.",
      product: "quickie-q50-r",
      productName: "Quickie Q50 R",
    };
  }

  if (mobility === "pain-fatigue") {
    return {
      category: "Power Scooters",
      slug: "power-scooters",
      reason:
        "A power scooter is often ideal for people who retain some walking ability but need support for longer distances and community outings.",
      product: "pride-gogo",
      productName: "Pride Go-Go Sport",
    };
  }

  if (mobility === "balance") {
    return {
      category: "Walkers & Rollators",
      slug: "walkers-rollators",
      reason:
        "A rollator walker with a seat provides walking support and a rest option, which is great for balance concerns and fall prevention.",
      product: "drive-nitro",
      productName: "Drive Nitro Walker",
    };
  }

  if (mobility === "transfers") {
    return {
      category: "Seating & Positioning",
      slug: "seating-positioning",
      reason:
        "Transfer aids, positioning cushions, and lift systems can make daily transfers safer and more comfortable. Our team will assess your specific situation.",
      product: "roho-cushion",
      productName: "ROHO Mosaic Cushion",
    };
  }

  return {
    category: "All Equipment",
    slug: null,
    reason:
      "Based on your answers, we recommend a personal consultation so our certified ATPs can properly evaluate your unique needs.",
    product: null,
    productName: null,
  };
}

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const question = questions[currentStep];

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = [
      ...answers.filter((a) => a.questionId !== question.id),
      { questionId: question.id, value: selected },
    ];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const prev = answers.find((a) => a.questionId === questions[currentStep - 1].id);
      setSelected(prev?.value || null);
    }
  }

  const recommendation = done ? getRecommendation(answers) : null;
  const progress = ((currentStep + (done ? 1 : 0)) / questions.length) * 100;

  return (
    <>
      <section className="bg-[#0A2463] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">Equipment Finder</h1>
          <p className="text-blue-200 text-lg">4 questions · 2 minutes · personalized recommendation</p>
        </div>
      </section>

      <section className="py-[72px] bg-[#F0F7FF] min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>{done ? "Done!" : `Question ${currentStep + 1} of ${questions.length}`}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0EA5E9] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!done ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-black text-[#0A2463] mb-6">{question.question}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {question.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      selected === opt.value
                        ? "border-[#0A2463] bg-[#F0F7FF]"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className={`font-medium text-sm ${selected === opt.value ? "text-[#0A2463]" : "text-gray-700"}`}>
                      {opt.label}
                    </span>
                    {selected === opt.value && (
                      <CheckCircle2 size={16} className="text-[#0A2463] ml-auto shrink-0" />
                    )}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
                >
                  <ArrowLeft size={15} /> Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="flex items-center gap-2 bg-[#0A2463] text-white font-bold px-6 py-2.5 rounded-full text-sm disabled:opacity-40 hover:bg-[#071A4A] transition-colors"
                >
                  {currentStep < questions.length - 1 ? "Next" : "See Results"} <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ) : recommendation ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🎯</div>
                <h2 className="text-2xl font-black text-[#0A2463] mb-2">Your recommendation</h2>
                <div className="inline-block bg-[#0EA5E9] text-white font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                  {recommendation.category}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{recommendation.reason}</p>
              </div>

              {recommendation.product && (
                <div className="border border-gray-100 rounded-xl p-4 mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Suggested product</p>
                    <p className="font-bold text-[#0A2463]">{recommendation.productName}</p>
                  </div>
                  <Link
                    href={`/products/${recommendation.product}`}
                    className="text-sm font-semibold text-[#0EA5E9] hover:text-[#0A2463] transition-colors flex items-center gap-1"
                  >
                    View <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              <div className="bg-[#F0F7FF] rounded-xl p-5 mb-6 text-sm text-gray-600">
                <strong className="text-[#0A2463]">Next step:</strong> Book a free consultation with a certified ATP who will evaluate your needs in detail and confirm the right equipment — and whether insurance will cover it.
              </div>

              <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
                <Link
                  href="/consultation"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#0A2463] text-white font-bold px-5 py-3.5 rounded-full hover:bg-[#071A4A] transition-colors text-center min-h-[52px]"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                {recommendation.slug && (
                  <Link
                    href={`/products?cat=${recommendation.slug}`}
                    className="flex-1 flex items-center justify-center bg-[#F0F7FF] text-[#0A2463] font-bold px-5 py-3.5 rounded-full hover:bg-blue-100 transition-colors text-center min-h-[52px]"
                  >
                    Browse {recommendation.category}
                  </Link>
                )}
              </div>

              <button
                onClick={() => { setDone(false); setAnswers([]); setCurrentStep(0); setSelected(null); }}
                className="w-full text-center text-sm text-gray-400 hover:text-gray-600 transition-colors mt-4"
              >
                Start over
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
