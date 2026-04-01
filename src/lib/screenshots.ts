import { withBasePath } from "./paths";

export interface ScreenshotItem {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
}

const screenshotsData = [
  {
    file: "screen-01.jpg",
    label: "Capture",
    title: "Create focused tasks",
    description: "Add tags, priority, notes and structure from a single clean task composer."
  },
  {
    file: "screen-02.jpg",
    label: "AI",
    title: "Generate next steps",
    description: "Turn a large task into a more manageable plan with assisted breakdowns."
  },
  {
    file: "screen-03.jpg",
    label: "Calendar",
    title: "Plan by day",
    description: "See the month, today’s tasks and progress in one calm calendar view."
  },
  {
    file: "screen-04.jpg",
    label: "Dark Mode",
    title: "Refined dark appearance",
    description: "A darker visual system that keeps sections readable without visual noise."
  },
  {
    file: "screen-05.jpg",
    label: "Light Mode",
    title: "Clean light theme",
    description: "A bright interface with soft surfaces and clear hierarchy across settings."
  },
  {
    file: "screen-06.jpg",
    label: "Start",
    title: "A clear empty state",
    description: "Open the app to a focused starting point with search and quick entry nearby."
  }
] as const;

export const screenshots: ScreenshotItem[] = screenshotsData.map((item, index) => ({
  src: withBasePath(`/screenshots/optimized/${item.file}`),
  alt: `TaskFlow Smart app screenshot ${index + 1}`,
  label: item.label,
  title: item.title,
  description: item.description
}));
