import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numMatch = value.match(/(\d+)/);
          if (numMatch) {
            const target = parseInt(numMatch[1]);
            const suffix = value.replace(/\d+/, "");
            const duration = 1500;
            const steps = 40;
            const stepTime = duration / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += target / steps;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setDisplayValue(Math.round(current) + suffix);
            }, stepTime);
          } else {
            setDisplayValue(value);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
