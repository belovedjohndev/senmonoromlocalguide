export type BusinessCategory =
  | "cafe"
  | "restaurant"
  | "guesthouse"
  | "tour"
  | "motorbike-rental"
  | "local-product";

export type VerificationStatus = "verified" | "needs-verification";

export type BusinessListing = {
  id: string;
  name: string;
  category: BusinessCategory[];
  description: string;
  locationLabel: string;
  googleMapsUrl: string;
  phone?: string;
  facebookUrl?: string;
  openingHours?: string;
  photoUrl?: string;
  photoAlt?: string;
  logoUrl?: string;
  verifiedAt: string;
  verificationStatus: VerificationStatus;
  source: "direct-owner-message" | "public-web";
  tags: string[];
};

export const businessListings: BusinessListing[] = [
  {
    id: "cinnamon-cafe-and-bakery",
    name: "Cinnamon Café and Bakery",
    category: ["cafe", "restaurant"],
    description:
      "Owner-confirmed café, bakery, and restaurant in Sen Monorom. Open daily from 7:00 AM to 8:00 PM, suitable for coffee, meals, and a relaxed stop while visiting Mondulkiri.",
    locationLabel: "Sen Monorom, Mondulkiri",
    googleMapsUrl: "https://maps.app.goo.gl/r8QjbfNchzqCL3ZAA?g_st=ic",
    phone: "088 247 2112",
    // TODO: Replace with the exact Facebook page URL once confirmed.
    facebookUrl: "#",
    photoUrl: "/images/businesses/cinnamon-cover.jpg",
    photoAlt: "Coffee and pastry served on an outdoor table at Cinnamon Café and Bakery",
    logoUrl: "/images/businesses/cinnamon-logo.jpg",
    openingHours: "7:00 AM - 8:00 PM",
    verifiedAt: "2026-05-08",
    verificationStatus: "verified",
    source: "direct-owner-message",
    tags: ["cafe", "bakery", "restaurant", "coffee", "food"]
  }
];

export const categoryLabels: Record<BusinessCategory, string> = {
  cafe: "Cafe",
  restaurant: "Restaurant",
  guesthouse: "Guesthouse",
  tour: "Tour",
  "motorbike-rental": "Motorbike Rental",
  "local-product": "Local Product"
};

export function getListingsByCategory(category: BusinessCategory): BusinessListing[] {
  return businessListings.filter((listing) => listing.category.includes(category));
}

export function getVerifiedListings(): BusinessListing[] {
  return businessListings.filter((listing) => listing.verificationStatus === "verified");
}

export function hasExternalFacebookUrl(url?: string): url is string {
  return typeof url === "string" && url.startsWith("http");
}
