import { useState, useEffect } from "react";

export const FORWARD = "forward";
export const BACKWARD = "backward";

interface TimerOptions {
  direction ?: string,
  durationStep ?: number,
  durationInterval ?: number,
}

const useTimer = (duration: number , timerOptions: TimerOptions = {}) => {
  const {
    direction = BACKWARD,
    durationStep = 1,
    durationInterval = 1000
  } = timerOptions;

  const startTime = direction === BACKWARD ? duration : 0;
  const endTime = direction === BACKWARD ? 0 : duration;

  const [leftTime, setLeftTIme] = useState(startTime);

  const isTimeUp =
    direction === BACKWARD ? leftTime <= endTime : leftTime >= endTime;

  useEffect(() => {
    const step = durationStep * (direction === BACKWARD ? -1 : 1);
    if (isTimeUp) return () => {};
    const timer = setTimeout(() => {
      setLeftTIme(leftTime + durationStep * step);
    }, durationInterval);
    return () => clearTimeout(timer);
  }, [leftTime, durationStep, durationInterval, direction, endTime, isTimeUp]);

  const weeks = Math.floor(leftTime / (3600 * 24 * 7));

  const days = Math.floor((leftTime / (3600 * 24)) % 7);

  const hours = Math.floor((leftTime / 3600) % 24);

  const minutes = Math.floor((leftTime % 3600) / 60);

  const seconds = Math.floor((leftTime % 3600) % 60);

  return {
    weeks,
    days,
    hours,
    minutes,
    seconds,
    isDone: isTimeUp
  };
};

export default useTimer;