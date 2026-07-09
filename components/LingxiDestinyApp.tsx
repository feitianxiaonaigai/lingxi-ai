"use client";

import { useEffect } from "react";
import { appMarkup } from "@/lib/appMarkup";

const APP_RUNTIME_SCRIPT_ID = "lingxi-app-runtime";

export default function LingxiDestinyApp() {
  useEffect(() => {
    document.body.classList.add("pre-chart");

    const existing = document.getElementById(APP_RUNTIME_SCRIPT_ID);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = APP_RUNTIME_SCRIPT_ID;
    script.src = "/runtime/app.js";
    script.async = false;
    document.body.appendChild(script);

    return () => {
      script.remove();
      document.body.classList.remove("pre-chart", "chart-entered", "guardian-active");
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: appMarkup }} />;
}
