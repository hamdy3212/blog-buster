// Background circle decoration configuration
export interface BackgroundCircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  color: string;
  opacity: number;
  centered?: boolean;
}

export const BACKGROUND_CIRCLES: BackgroundCircleProps[] = [
  { top: "5%", left: "5%", size: 500, color: "139, 99, 233", opacity: 0.25 },
  { top: "50%", left: "50%", size: 450, color: "80, 72, 229", opacity: 0.2, centered: true },
  { bottom: "5%", right: "5%", size: 400, color: "139, 99, 233", opacity: 0.18 },
  { top: "5%", right: "5%", size: 450, color: "100, 149, 237", opacity: 0.35 },
  { bottom: "5%", left: "5%", size: 420, color: "100, 149, 237", opacity: 0.3 },
  { top: "30%", right: "20%", size: 380, color: "100, 149, 237", opacity: 0.25 },
];
