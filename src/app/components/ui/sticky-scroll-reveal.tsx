"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    backgroundGradient?: string;
    backgroundColor?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const cardLength = content.length;

  useEffect(() => {
    const container = ref.current;
    if (!container || cardLength <= 1) {
      return;
    }

    const updateActiveCard = () => {
      const maxScroll = container.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) {
        setActiveCard(0);
        return;
      }

      const progress = container.scrollTop / maxScroll;
      const nextCard = Math.min(
        cardLength - 1,
        Math.round(progress * (cardLength - 1)),
      );
      setActiveCard(nextCard);
    };

    updateActiveCard();
    container.addEventListener("scroll", updateActiveCard, { passive: true });

    return () => {
      container.removeEventListener("scroll", updateActiveCard);
    };
  }, [cardLength]);

  const backgroundColors = ["#90D26D", "#6DC5D1", "#FDAF7B"];
  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ],
    [],
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );
  const activeBackgroundColor =
    content[activeCard]?.backgroundColor ??
    backgroundColors[activeCard % backgroundColors.length];

  useEffect(() => {
    setBackgroundGradient(
      content[activeCard]?.backgroundGradient ??
        linearGradients[activeCard % linearGradients.length],
    );
  }, [activeCard, content, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: activeBackgroundColor,
        opacity: "95%",
      }}
      className="h-[38.5rem] overflow-y-auto flex justify-center relative space-x-4 rounded-md py-6 px-4"
      ref={ref}
    >
      <div className="div relative flex items-start">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm text-spotify-white max-w-sm mt-4"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-fit rounded-xl bg-white sticky top-14",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
