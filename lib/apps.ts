export type AppLink = {
  label: string;
  url: string;
  type: "playstore" | "appstore" | "website";
};

export type App = {
  id: string;
  name: string;
  description: string;
  icon: string; // Path to icon in /public/icons/
  tags?: string[];
  links: AppLink[];
};

export const apps: App[] = [
  {
    id: "my-first-app",
    name: "My First App",
    description:
      "A short description of what your app does and the problem it solves. Keep it to two or three sentences.",
    icon: "/icons/app-placeholder.svg",
    tags: ["Productivity", "Android"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.yourapp",
        type: "playstore",
      },
    ],
  },
  // Add more apps here as you build them:
  // {
  //   id: "second-app",
  //   name: "Second App",
  //   description: "...",
  //   icon: "/icons/second-app.svg",
  //   links: [{ label: "Google Play", url: "...", type: "playstore" }],
  // },
];
