export interface IProfileMetrics {
  userId: number;
  value: string | number;
  valueChange: number;
  changeType: "increase" | "decrease";
  subTitle: string;
}

export const profileMetrics: IProfileMetrics[] = [
  {
    userId: 1,
    value: 635,
    valueChange: 21.01,
    changeType: "increase",
    subTitle: "Average Likes",
  },
  {
    userId: 1,
    value: 123,
    valueChange: 4.39,
    changeType: "increase",
    subTitle: "Comments recived",
  },
  {
    userId: 1,
    value: "23%",
    valueChange: 7.9,
    changeType: "decrease",
    subTitle: "Av. Engagement rate",
  },
];

export interface IActionsData {
  userId: number;
  actionName: string;
  actionValue: number;
}

export const actionsData: IActionsData[] = [
  { userId: 1, actionName: "Profile visits", actionValue: 250 },
  { userId: 1, actionName: "Website clicks", actionValue: 115 },
  { userId: 1, actionName: "Calls", actionValue: 67 },
  { userId: 1, actionName: "Getvdirections", actionValue: 164 },
  { userId: 1, actionName: "Emails", actionValue: 170 },
];

export interface IUserCourseData {
  userId: number;
  title: string;
  proggressValue: number;
}

export const userCoursesData: IUserCourseData[] = [
  { userId: 1, title: "VIP Training Course", proggressValue: 40 },
];

export interface IUserTagsData {
  userId: number;
  title: string;
  tags: string[];
}

export const userTagsData: IUserTagsData[] = [
  { userId: 1, title: "Sport & Health", tags: ["sport", "fit", "health"] },
  { userId: 1, title: "Animals", tags: ["animal", "nature", "health"] },
  { userId: 1, title: "Beauty", tags: ["beauty", "makeup", "fashion"] },
  { userId: 1, title: "Art", tags: ["art", "artist", "love"] },
];
