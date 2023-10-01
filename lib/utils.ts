import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// class merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
