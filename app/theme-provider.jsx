"use client";
import { useEffect } from "react";
import { siteConfig } from "./config/site";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--primary", siteConfig.theme.primary);
    root.style.setProperty("--primary-hover", siteConfig.theme.primaryHover);
  }, []);

  return children;
}