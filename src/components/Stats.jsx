import { useEffect, useRef, useState } from "react";
import { Building, Users, Star, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AnimatedNumber = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState("0");
  const [start, setStart] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!start) return;

    const parts = value.split("/");
    const cleanNumberString = parts[0].replace(/[^0-9.]/g, "");
    const target = parseFloat(cleanNumberString);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * target;

      if (parts[0].includes(".")) {
        setCount(current.toFixed(1));
      } else {
        setCount(Math.floor(current).toString());
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, value, duration]);

  // Format output to match original text structure
  let displayText = count;
  if (start && !isNaN(parseFloat(count))) {
    let numVal = parseFloat(count);
    const parts = value.split("/");

    if (value.includes(",")) {
      displayText = Math.floor(numVal).toLocaleString("en-IN");
    } else {
      displayText = count;
    }

    if (value.includes("+")) {
      displayText = displayText + "+";
    }
    if (parts[1]) {
      displayText = displayText + "/" + parts[1];
    }
  } else if (!start) {
    // Show empty placeholder or starting numbers
    displayText = value.includes(".") ? "0.0" : "0";
    if (value.includes("+")) displayText += "+";
    const parts = value.split("/");
    if (parts[1]) displayText += "/" + parts[1];
  }

  return <span ref={elementRef}>{displayText}</span>;
};

const Stats = () => {
  const stats = [
    { icon: Clock, value: "100+", label: "Years of Seva" },
    { icon: Building, value: "15", label: "Clean Rooms" },
    { icon: Users, value: "24,748+", label: "Pilgrims Hosted" },
    { icon: Star, value: "4.7/5", label: "Guest Rating" },
  ];

  return (
    <section className="relative z-20 -mt-8 px-4 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="bg-white rounded-2xl shadow-xl border border-brand-gold-500/10 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-brand-gold-500/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-3 md:first:pl-0 md:last:pr-0">
                <div className="bg-brand-cream-100 p-3 rounded-full mb-3 border border-brand-gold-500/10">
                  <stat.icon className="text-brand-gold-500" size={24} />
                </div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="text-xs text-brand-dark-light uppercase font-semibold tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-full border border-brand-gold-500/10 bg-brand-cream-100/80 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-burgundy-900 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span>🕉 Bhasm Aarti Darshan Available</span>
            <span>⏰ 4:00 AM – 7:00 AM</span>
            <span>💰 ₹250 Per Person</span>
            <span>📶 Free Wi-Fi Available</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Stats;