import { withBasePath } from "./paths";

export interface ScreenshotItem {
  src: string;
  alt: string;
  label: string;
}

const files = [
  "screen-01.jpg",
  "screen-02.jpg",
  "screen-03.jpg",
  "screen-04.jpg",
  "screen-05.jpg",
  "screen-06.jpg"
];

export const screenshots: ScreenshotItem[] = files.map((file, index) => ({
  src: withBasePath(`/screenshots/optimized/${file}`),
  alt: `TaskFlow Smart app screenshot ${index + 1}`,
  label: `Screen 0${index + 1}`
}));
