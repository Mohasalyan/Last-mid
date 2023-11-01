import React, { useRef, useEffect, useState } from "react";

const ScrollVisibility = ({ children }) => {
  const elementRef = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const checkVisibility = () => {
      if (element) {
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const isVisible =
          elementRect.top >= 0 && elementRect.bottom <= windowHeight;

        if (isVisible && !hasBeenVisible) {
          setHasBeenVisible(true);
        }
      }
    };

    checkVisibility();

    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [hasBeenVisible]);

  return (
    <div
      ref={elementRef}
      className={hasBeenVisible ? "show_all_items" : "hidden_all_items"}
    >
      {children}
    </div>
  );
};

export default ScrollVisibility;
