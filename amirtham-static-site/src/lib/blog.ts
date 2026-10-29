export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  sections: { heading: string; body: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "sale-deed-explained",
    title: "Sale Deed: Why It Is the Most Important Property Document",
    excerpt: "A sale deed transfers ownership from seller to buyer. Here is what it contains and why it must be registered.",
    date: "2026-10-01",
    sections: [
      { heading: "What Is a Sale Deed?", body: ["A sale deed is the legal document that transfers ownership of a property from the seller to the buyer. Once it is registered at the Sub-Registrar office, the buyer becomes the lawful owner."] },
      { heading: "Why It Matters", body: ["Without a registered sale deed, ownership cannot be proved in law. Banks ask for it before giving loans, and it is needed for patta transfer, property tax and any future sale."] },
      { heading: "What It Should Contain", body: ["Full names and addresses of buyer and seller, an exact description of the property with survey number, boundaries and extent, the sale amount and how it was paid, the chain of earlier ownership, and a statement that the property is free of loans and disputes."] },
      { heading: "Before You Sign", body: ["Check the Encumbrance Certificate, verify the parent documents, confirm the patta and the seller's identity. A careful check now saves years of trouble later."] },
    ],
  },
  {
    slug: "exchange-deed-explained",
    title: "Exchange Deed: Swapping Property the Right Way",
    excerpt: "When two owners trade properties instead of money, an exchange deed records the swap legally.",
    date: "2026-10-08",
    sections: [
      { heading: "What Is an Exchange Deed?", body: ["An exchange deed is used when two parties transfer ownership of their properties to each other. Each party acts as both a buyer and a seller."] },
      { heading: "When It Is Used", body: ["It is common between relatives, neighbours combining adjoining plots, or owners who want land in a better location. If the values are unequal, the difference paid in money is also recorded."] },
      { heading: "Key Points", body: ["Both properties must be clearly described, both titles must be checked, and the deed must be registered. Stamp duty is generally calculated on the property of higher value."] },
    ],
  },
  {
    slug: "partition-deed-explained",
    title: "Partition Deed: Dividing Family Property Peacefully",
    excerpt: "A partition deed divides jointly owned property among co-owners so each gets a clear, separate share.",
    date: "2026-10-15",
    sections: [
      { heading: "What Is a Partition Deed?", body: ["A partition deed divides a jointly held property, often ancestral or family property, among its co-owners. After registration, each person becomes the separate owner of their share."] },
      { heading: "Why It Is Important", body: ["A clear partition avoids future disputes, lets each owner sell, mortgage or transfer their share independently, and makes patta and tax records easier to update."] },
      { heading: "What to Include", body: ["Names of all co-owners and their relationship, the full property schedule, the exact share allotted to each person with boundaries, and the signatures of every co-owner. Everyone with a share must agree and sign."] },
    ],
  },
  {
    slug: "critical-aspects-of-drafting-a-deed",
    title: "Critical Aspects to Check When Creating Any Deed",
    excerpt: "Small mistakes in a deed can cause big problems. These are the points we check on every document.",
    date: "2026-10-22",
    sections: [
      { heading: "Correct Party Details", body: ["Names, ages, addresses and ID details must match official records exactly. A single spelling mistake can delay registration or patta transfer."] },
      { heading: "Accurate Property Description", body: ["Survey number, sub-division, extent, boundaries and village must match the revenue records and earlier documents."] },
      { heading: "Clear Title and Encumbrance", body: ["Always verify the parent documents and Encumbrance Certificate so the property is free of loans, court cases and other claims."] },
      { heading: "Proper Stamp Duty and Registration", body: ["Paying the correct stamp duty and registering the deed on time makes it legally valid and admissible as evidence."] },
      { heading: "Witnesses and Signatures", body: ["Every party and witness must sign properly, and all must be present with valid ID at the time of registration."] },
      { heading: "Get Expert Help", body: ["An experienced document writer drafts the deed in the right format and guides you through registration. Call us on 96555 07474 for help with any deed."] },
    ],
  },
];
