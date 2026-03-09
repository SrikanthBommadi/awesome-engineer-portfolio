import bgScroll1 from "@/assets/bg-scroll-1.jpg";
import bgScroll2 from "@/assets/bg-scroll-2.jpg";

const ScrollingBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* First image - rotating slowly */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgScroll1}
          alt=""
          className="w-[140vmax] h-[140vmax] object-cover opacity-25 animate-spin-slow"
        />
      </div>
      {/* Second image - rotating in reverse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={bgScroll2}
          alt=""
          className="w-[120vmax] h-[120vmax] object-cover opacity-20 animate-spin-reverse"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/65 to-background/50" />
    </div>
  );
};

export default ScrollingBackground;
