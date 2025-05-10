export interface INewProjectValues {
  projectName: string;
  projectTags: string;
  startDate: string;
  projectTitle: string;
  repositoryLink: string;
  endDate: string;
  image: File | null;
}

export interface IPlanPricing {
  id: number;
  planTitle: string;
  PlanPrice: number | string;
  planDuration: string;
  isCurrentPlan: boolean;
  planFeatures: IPlanFeature[];
  planButtonTitle: string;
}

export interface IPlanFeature {
  id: number;
  isAvailable: boolean;
  featureTitle: string;
}
