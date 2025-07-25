"use client";

import { motion, Variants } from "framer-motion";
import { useState, useRef, useEffect, useCallback, MouseEvent } from "react";
import type { TimelineEntry } from "@/types";

interface TimelineCardProps {
    entry: TimelineEntry;
    isEven: boolean;
    index: number;
}

const TimelineCard = ({ entry, isEven, index }: TimelineCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const timer = setTimeout(
                () => {
                    setIsHovered(true);
                },
                300 + index * 200,
            );

            return () => clearTimeout(timer);
        }
    }, [isMobile, index]);

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            x: isEven ? -50 : 50,
            y: 30,
            rotateY: isEven ? -5 : 5,
            rotateX: 5,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
                delay: index * 0.1,
            },
        },
        hover: {
            y: isMobile ? -4 : -8,
            scale: isMobile ? 1.01 : 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
            },
        },
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2 + custom * 0.1 + index * 0.05,
            },
        }),
    };
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!cardRef.current || isMobile) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = x / rect.width - 0.5;
        const yPercent = y / rect.height - 0.5;

        const elements = cardRef.current.querySelectorAll(".parallax-element");
        elements.forEach((el) => {
            const intensity = Number.parseFloat(el.getAttribute("data-intensity") || "1")
                ; (el as HTMLElement).style.transform = `translate(${xPercent * 10 * intensity}px, ${yPercent * 10 * intensity}px)`;
        });
    }, [isMobile]);

    const handleMouseLeave = useCallback(() => {
        if (isMobile) return;
        setIsHovered(false);
        if (!cardRef.current) return;

        const elements = cardRef.current.querySelectorAll(".parallax-element");
        elements.forEach((el) => {
            ; (el as HTMLElement).style.transform = "translate(0px, 0px)";
        });
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile || !cardRef.current || !isHovered) return;

        const elements = cardRef.current.querySelectorAll(".parallax-element");
        elements.forEach((el, i) => {
            const intensity = Number.parseFloat(el.getAttribute("data-intensity") || "1");
            const delay = i * 0.1
                ; (el as HTMLElement).style.transition = `transform 0.8s ease ${delay}s`
                ; (el as HTMLElement).style.transform =
                    `translate(${(Math.random() * 2 - 1) * 3 * intensity}px, ${(Math.random() * 2 - 1) * 3 * intensity}px)`;
        });

        return () => {
            elements.forEach((el) => {
                ; (el as HTMLElement).style.transform = "translate(0px, 0px)";
            });
        };
    }, [isMobile, isHovered]);

    return (
        <div
            className={`flex justify-start pt-16 sm:pt-24 md:pt-32 md:gap-6 lg:gap-10 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            <motion.div
                className="sticky flex flex-col md:flex-row z-40 items-center top-24 sm:top-32 md:top-40 self-start"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                }}
            >
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 absolute left-0 rounded-full bg-zinc-800/80 backdrop-blur-sm flex items-center justify-center border-2 border-green-500/40 shadow-lg shadow-green-500/20">
                    <motion.div
                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-green-600/50 to-emerald-600/50 flex items-center justify-center text-sm sm:text-lg md:text-xl font-bold text-green-100"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{
                            scale: [1, 1.08, 1],
                            rotate: [-5, 5, -5],
                            boxShadow: [
                                "0 0 0 rgba(16, 185, 129, 0)",
                                "0 0 15px rgba(16, 185, 129, 0.4)",
                                "0 0 0 rgba(16, 185, 129, 0)",
                            ],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        {index + 1}
                    </motion.div>
                </div>
                <motion.h3
                    className="hidden md:block text-lg lg:text-2xl md:pl-20 lg:pl-24 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-300"
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 100,
                    }}
                >
                    {entry.company}
                </motion.h3>
            </motion.div>

            {/* Enhanced card content with parallax effect */}
            <motion.div
                ref={cardRef}
                className={`relative pl-16 sm:pl-20 pr-4 md:pl-4 w-full max-w-xl sm:max-w-2xl ${isEven ? "md:mr-4 lg:mr-8" : "md:ml-4 lg:ml-8"}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={isMobile ? undefined : "hover"}
                animate={isMobile && isHovered ? "hover" : undefined}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => !isMobile && setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                aria-label={`${entry.title} at ${entry.company}`}
            >
                <motion.div
                    className="bg-zinc-800/40 rounded-lg sm:rounded-xl border border-zinc-700 p-5 sm:p-7 md:p-8 backdrop-blur-sm transition-all duration-500 relative overflow-hidden"
                    animate={{
                        borderColor: isHovered ? "rgba(16, 185, 129, 0.6)" : "rgba(63, 63, 70, 1)",
                        boxShadow: isHovered
                            ? "0 20px 40px -20px rgba(16, 185, 129, 0.3), 0 0 20px -5px rgba(16, 185, 129, 0.2)"
                            : "0 10px 30px -15px rgba(2, 12, 27, 0.5)",
                    }}
                >
                    {/* Premium background effects */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-green-600/15 via-emerald-600/10 to-transparent rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                    />

                    {/* Animated particles effect on hover - more visible on mobile */}
                    {isHovered && (
                        <>
                            {[...Array(isMobile ? 8 : 6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400/60"
                                    initial={{
                                        x: Math.random() * 100 - 50,
                                        y: Math.random() * 100 - 50,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: Math.random() * 200 - 100,
                                        y: Math.random() * 200 - 100,
                                        opacity: [0, isMobile ? 1 : 0.8, 0],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 2,
                                        repeat: Number.POSITIVE_INFINITY,
                                        delay: Math.random() * 0.5,
                                    }}
                                />
                            ))}
                        </>
                    )}

                    {/* Animated corner accent - more visible on mobile */}
                    <motion.div
                        className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? (isMobile ? 1 : 1) : isMobile ? 0.5 : 0.3 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500/30 rotate-45 transform origin-bottom-left"></div>
                    </motion.div>

                    {/* Mobile company title */}
                    <motion.h3
                        className="md:hidden text-xl sm:text-2xl mb-3 sm:mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-300"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={0}
                        viewport={{ once: true }}
                    >
                        {entry.company}
                    </motion.h3>

                    <div className="mb-4 sm:mb-5 md:mb-6">
                        <motion.div
                            className="flex items-center gap-2 parallax-element"
                            data-intensity="0.5"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-xl sm:text-2xl font-bold text-zinc-100">{entry.title}</h4>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap items-center gap-2 sm:gap-3 text-zinc-400 mt-2 sm:mt-3 parallax-element"
                            data-intensity="0.8"
                            variants={textVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                            viewport={{ once: true }}
                        >
                            <span className="text-sm sm:text-base text-green-300 font-medium">
                                {entry.duration.start} - {entry.duration.end}
                            </span>
                            <span className="hidden sm:inline text-zinc-500">•</span>
                            <span className="capitalize text-xs sm:text-sm px-2.5 sm:px-3.5 py-1 rounded-full bg-green-500/15 text-green-300 border border-green-500/30 shadow-sm shadow-green-500/10">
                                {entry.type}
                            </span>
                        </motion.div>
                    </div>

                    <motion.p
                        className="text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg parallax-element"
                        data-intensity="1.2"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={3}
                        viewport={{ once: true }}
                    >
                        {entry.description}
                    </motion.p>

                    {/* Enhanced animated accent line - more visible on mobile */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-green-600 via-emerald-500 to-transparent"
                        initial={{ width: isMobile ? "30%" : "0%" }}
                        animate={{
                            width: isHovered ? "100%" : isMobile ? "50%" : "30%",
                            boxShadow: isHovered ? "0 0 10px rgba(16, 185, 129, 0.5)" : "none",
                        }}
                        transition={{ duration: 0.8 }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TimelineCard;
