import { IPlanPricing } from "@/app/types/projects";

export const pricingData: IPlanPricing[] = [
  {
    id: 1,
    isCurrentPlan: true,
    planButtonTitle: "Try for free",
    planDuration: "For a Lifetime",
    planFeatures: [
      {
        id: 1,
        featureTitle: "Unlimited Projects",
        isAvailable: false,
      },
      {
        id: 2,
        featureTitle: "Share with 5 team members",
        isAvailable: true,
      },
      {
        id: 3,
        featureTitle: "Sync across devices",
        isAvailable: false,
      },
      {
        id: 4,
        featureTitle: "API Access",
        isAvailable: true,
      },
      {
        id: 5,
        featureTitle: "Complete Documentation",
        isAvailable: false,
      },
      {
        id: 6,
        featureTitle: "Integration help",
        isAvailable: true,
      },
    ],
    PlanPrice: "Free",
    planTitle: "Personal",
  },

  {
    id: 2,
    isCurrentPlan: false,
    planButtonTitle: "Try for free",
    planDuration: "/year",
    planFeatures: [
      {
        id: 1,
        featureTitle: "Everything in free plan",
        isAvailable: false,
      },
      {
        id: 2,
        featureTitle: "Unlimited projects",
        isAvailable: true,
      },
      {
        id: 3,
        featureTitle: "Share with 5 team members",
        isAvailable: false,
      },
      {
        id: 4,
        featureTitle: "30 day version history",
        isAvailable: true,
      },
      {
        id: 5,
        featureTitle: "Complete Documentation",
        isAvailable: false,
      },
      {
        id: 6,
        featureTitle: "Integration help",
        isAvailable: true,
      },
    ],
    PlanPrice: 89,
    planTitle: "Professional",
  },
  {
    id: 3,
    isCurrentPlan: false,
    planButtonTitle: "Contact Us",
    planDuration: "Reach out for a quote",
    planFeatures: [
      {
        id: 1,
        featureTitle: "Everything in Team plan",
        isAvailable: false,
      },
      {
        id: 2,
        featureTitle: "Advanced security ",
        isAvailable: true,
      },
      {
        id: 3,
        featureTitle: "Custom contract",
        isAvailable: false,
      },
      {
        id: 4,
        featureTitle: "User provisioning ( SCIM)",
        isAvailable: true,
      },
      {
        id: 5,
        featureTitle: "Complete Documentation",
        isAvailable: false,
      },
      {
        id: 6,
        featureTitle: "SAML SSO",
        isAvailable: true,
      },
    ],
    PlanPrice: "Custom",
    planTitle: "Enterprise",
  },
];
