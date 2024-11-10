// src/components/Counter.js
import React, { useState, useEffect } from "react";

// Easing function to control the animation pace (ease-out)
const easeOutQuad = (t) => t * (2 - t);

const Counter = ({ targetNumber, duration = 2000, start }) => {
  const [count, setCount] = useState(0); // Initialize the count at 0

  useEffect(() => {
    if (!start) return; // Don't start counting if 'start' is false

    const startTime = performance.now(); // Get the current time for animation start

    const step = (currentTime) => {
      const elapsed = currentTime - startTime; // Calculate how much time has passed
      const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
      const easedProgress = easeOutQuad(progress); // Apply easing to progress
      const currentCount = Math.floor(easedProgress * targetNumber); // Calculate the current count
      setCount(currentCount); // Update the count

      if (progress < 1) {
        requestAnimationFrame(step); // Continue the animation
      }
    };

    requestAnimationFrame(step); // Start the animation
  }, [start, targetNumber, duration]);

  return <h3>{count}+</h3>; // Display the count
};

export default Counter;
