import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const CohortBenifitsCard = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <a
        key={item.id}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative group block p-2 h-full w-full",
          idx === items.length - 1 && "md:col-span-2 lg:col-span-3"
        )}
        onMouseEnter={() => setHoveredIndex(idx)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-primary-1000/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
                {idx === items.length - 1 ? (
                  <div className="flex flex-col lg:flex-row w-full h-full">
                    <div className="w-full lg:w-1/2">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-13 h-10 rounded-2xl mt-2 shadow-md "
                      />
                      <CardTitle>{item.link}</CardTitle>
                      <CardDescription>{item.details}</CardDescription>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="h-full w-full bg-white/20 rounded-xl p-4 text-white">
                        <AlumniContent>
                        
                        </AlumniContent>
                        
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                <div className="flex gap-1 items-center">
                  <span className="w-12 h-12 rounded-2xl mt-2 shadow-md flex items-center justify-center">
                  <img
                src={item.img}
                alt={item.title}
                className="w-13 h-10 rounded-2xl mt-2 shadow-md "
                />
                  </span>
                  <CardTitle>{item.link}</CardTitle>
                </div>
                <CardDescription>{item.details}</CardDescription>
              </>
            )}
          </Card>

        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full min-h-[300px] transition-all duration-300 w-full p-4 overflow-hidden bg-[rgba(7,23,23,0.7)] border border-transparent dark:border-white/[0.2] group-hover:border-orange-500 relative z-20 text-opacity-100",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col justify-start text-left">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-base sm:text-lg md:text-xl", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed font-medium",
        className
      )}
    >
      {children}
    </p>
  );
};
export const AlumniContent = ({ className}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-base sm:text-lg md:text-xl", className)}>
  <img 
    src="https://hiteshchoudhary.b-cdn.net/coding-hero-v2/goals/goal-01.png"
    alt="image"
    className="w-[58rem] h-[18rem] object-cover object-top rounded-b-2xl transition-all duration-300 hover:scale-102"
  />
</h4>
  );
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
