"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

const LOADER_DURATION_MS = 400;

export default function InitialPageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return isVisible ? <Loader /> : null;
}
