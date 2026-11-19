"use client";

import { useCallback, useEffect, useState } from "react";

interface Options {
  duration?: number; 
  autoStart?: boolean; 
}

export default function useResendTimer(
  storageKey: string,
  { duration = 60, autoStart = true }: Options = {},
) {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const getRemaining = useCallback(() => {
    try {
      const expiresAt = Number(localStorage.getItem(storageKey));
      if (!expiresAt) return 0;
      return Math.max(0, Math.ceil((expiresAt - Date.now()) / 1000));
    } catch {
      return 0;
    }
  }, [storageKey]);

  const start = useCallback(() => {
    try {
      localStorage.setItem(storageKey, String(Date.now() + duration * 1000));
    } catch {}
    setSecondsLeft(duration);
  }, [storageKey, duration]);

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setSecondsLeft(0);
  }, [storageKey]);

  useEffect(() => {
    let hasStored = false;
    try {
      hasStored = localStorage.getItem(storageKey) !== null;
    } catch {}

    if (!hasStored && autoStart) {
      start();
    } else {
      setSecondsLeft(getRemaining());
    }
    setIsReady(true);
  }, [storageKey, autoStart, start, getRemaining]);

  const isRunning = secondsLeft > 0;

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setSecondsLeft(getRemaining());
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning, getRemaining]);

  return {
    secondsLeft,
    canResend: isReady && secondsLeft === 0,
    isReady,
    start,
    reset,
  };
}