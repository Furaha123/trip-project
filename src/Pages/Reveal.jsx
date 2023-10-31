import React, { useEffect } from "react";

const revealOnScroll = () => {
  const options = {
    threshold: 0.2, // Adjust this value to control when the animation triggers
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a CSS class or apply animations when the element is in view
        entry.target.classList.add("reveal"); // You need to define the 'reveal' class in your CSS with the desired animation properties
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    // Select the elements you want to reveal (e.g., by their class)
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe each selected element
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything in the DOM
};

export default revealOnScroll;
