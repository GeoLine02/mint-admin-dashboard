interface IProfileMetrics {
  value: string | number;
  valueChange: number;
  changeType: "increase" | "decrease";
  subTitle: string;
}

export const profileMetrics: IProfileMetrics[] = [
  {
    value: 635,
    valueChange: 21.01,
    changeType: "increase",
    subTitle: "Average Likes",
  },
  {
    value: 123,
    valueChange: 4.39,
    changeType: "increase",
    subTitle: "Comments recived",
  },
  {
    value: "23%",
    valueChange: 7.9,
    changeType: "decrease",
    subTitle: "Av. Engagement rate",
  },
];

interface IActionsData {
  actionName: string;
  actionValue: number;
}

export const actionsData: IActionsData[] = [
  {
    actionName: "Profile visits",
    actionValue: 250,
  },
  {
    actionName: "Website clicks",
    actionValue: 115,
  },
  {
    actionName: "Calls",
    actionValue: 67,
  },
  {
    actionName: "Getvdirections",
    actionValue: 164,
  },
  {
    actionName: "Emails",
    actionValue: 170,
  },
];

interface IUserCourseData {
  title: string;
  proggressValue: number;
}

export const userCoursesData: IUserCourseData[] = [
  { title: "VIP Training Course", proggressValue: 40 },
];

interface IUserTagsData {
  title: string;
  tags: string[];
}

export const userTagsData: IUserTagsData[] = [
  {
    title: "Sport & Health",
    tags: ["sport", "fit", "health"],
  },
  {
    title: "Animals",
    tags: ["animal", "nature", "health"],
  },
  {
    title: "Beauty",
    tags: ["beauty", "makeup", "fashion"],
  },
  {
    title: "Art",
    tags: ["art", "artist", "love"],
  },
];
