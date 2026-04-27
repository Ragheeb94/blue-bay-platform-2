export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string;
  insuranceCovered: boolean;
};

export const products: Product[] = [
  {
    slug: "permobil-m3-corpus",
    name: "Permobil M3 Corpus",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Advanced power mobility for complex rehab needs",
    description:
      "The Permobil M3 Corpus is a mid-wheel drive power wheelchair engineered for users who require advanced seating and positioning. With multiple tilt, recline, and leg-rest functions, it enables pressure relief and postural support throughout the day.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    features: [
      "Mid-wheel drive for tight-turn maneuverability",
      "Power tilt, recline, and elevating leg rests",
      "ActiveReach technology for 12\" forward reach",
      "Permobil SmartDrive integration",
      "Bluetooth connectivity and app control",
      "Corpus seating system for custom fit",
    ],
    idealFor:
      "Users with ALS, MS, SCI, or other conditions requiring advanced power seating and significant pressure relief.",
    insuranceCovered: true,
  },
  {
    slug: "quickie-q50-r",
    name: "Quickie Q50 R",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Rigid ultra-lightweight for active manual users",
    description:
      "The Quickie Q50 R is a rigid-frame manual wheelchair built from aircraft-grade aluminum. Its adjustable geometry allows ATP customization for optimal propulsion efficiency, reducing shoulder strain for daily active users.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    features: [
      "Rigid aircraft-grade aluminum frame",
      "Fully adjustable seat depth, width, and angle",
      "Quick-release rear wheels",
      "Low-maintenance sealed bearings",
      "Center of gravity adjustment for optimal propulsion",
      "Multiple color and upholstery options",
    ],
    idealFor:
      "Active manual wheelchair users with upper-body strength who need a durable, customized daily-use chair.",
    insuranceCovered: true,
  },
  {
    slug: "tilite-aero-z",
    name: "TiLite Aero Z",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Titanium strength, featherweight performance",
    description:
      "The TiLite Aero Z is a titanium cross-frame manual wheelchair that delivers exceptional strength-to-weight ratio. Titanium's natural flex absorbs vibration, reducing fatigue on long propulsion days.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    features: [
      "Aircraft-grade titanium frame",
      "Cross-brace folding for easy transport",
      "Vibration-dampening titanium flex",
      "Custom width and depth configuration",
      "Anti-tip options available",
      "Lifetime frame warranty",
    ],
    idealFor:
      "Users who travel frequently or need a folding frame, and prioritize minimal weight with long-term durability.",
    insuranceCovered: true,
  },
  {
    slug: "roho-cushion",
    name: "ROHO Mosaic Cushion",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Pressure redistribution engineered for skin integrity",
    description:
      "The ROHO Mosaic uses dry-air cell technology to distribute pressure across the seating surface, protecting skin integrity for users at moderate-to-high risk of pressure injuries. Lightweight and easy to adjust.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?w=800&q=80",
    features: [
      "Dry-air interconnected cell technology",
      "Single valve inflation adjustment",
      "Non-powered — no batteries required",
      "Machine-washable stretch cover included",
      "Compatible with most manual and power wheelchairs",
      "Multiple size options",
    ],
    idealFor:
      "Wheelchair users at risk of pressure injuries who need reliable daily pressure redistribution.",
    insuranceCovered: true,
  },
  {
    slug: "pride-gogo",
    name: "Pride Go-Go Sport",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "Compact travel scooter for active lifestyles",
    description:
      "The Pride Go-Go Sport is a disassembling travel scooter designed for users who need mobility assistance for community outings. It breaks into five lightweight pieces — no tools required — for easy car loading.",
    image:
      "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?w=800&q=80",
    features: [
      "Disassembles into 5 pieces without tools",
      "Heaviest piece under 27 lbs",
      "Delta tiller for easy steering",
      "8-mile range per charge",
      "Front and rear LED lighting",
      "250 lb weight capacity",
    ],
    idealFor:
      "Users who retain some walking ability but need scooter support for longer distances and community outings.",
    insuranceCovered: false,
  },
  {
    slug: "drive-nitro",
    name: "Drive Nitro Walker",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Lightweight rollator for confident everyday mobility",
    description:
      "The Drive Nitro is a featherweight aluminum rollator with large 10\" wheels designed for both indoor and outdoor use. Loop brakes, padded seat, and under-seat storage make it a versatile everyday mobility aid.",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    features: [
      "Lightweight aluminum frame — under 13 lbs",
      '10" front wheels for outdoor terrain',
      "Loop-lock hand brakes",
      "Padded flip-down seat",
      "Under-seat storage pouch",
      "Folds flat for car transport",
    ],
    idealFor:
      "Users who need walking support and prefer a rollator with a seat for rest breaks during community activities.",
    insuranceCovered: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export const categories = [
  { value: "all", label: "All Products" },
  { value: "power-wheelchairs", label: "Power Wheelchairs" },
  { value: "manual-wheelchairs", label: "Manual Wheelchairs" },
  { value: "seating-positioning", label: "Seating & Positioning" },
  { value: "power-scooters", label: "Power Scooters" },
  { value: "walkers-rollators", label: "Walkers & Rollators" },
  { value: "transfer-aids", label: "Transfer Aids" },
];
