"use client";

import { RootLayoutProps } from "@/types";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useSpring
} from "framer-motion";
import { memo, useRef, useEffect, useCallback } from "react";

const HighlightBackground = ({ children }: RootLayoutProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 15, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 15, stiffness: 150 });

  const ref = useRef<HTMLDivElement>(null);

  // Circuit board inspired pattern
  const circuitPattern = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80' width='60' height='60' fill='none'%3E%3C!-- Circuit lines --%3E%3Cpath d='M10 10h20v10h10v20h-10v10h20' stroke='%23047857' stroke-width='0.5' opacity='0.3'/%3E%3Cpath d='M50 20v15h15v10h-20v15' stroke='%23059669' stroke-width='0.5' opacity='0.25'/%3E%3Cpath d='M25 50h15v-15h10v-10h15' stroke='%23065F46' stroke-width='0.5' opacity='0.2'/%3E%3C!-- Connection nodes --%3E%3Ccircle cx='10' cy='10' r='1.5' fill='%2310B981' opacity='0.4'/%3E%3Ccircle cx='30' cy='10' r='1.5' fill='%2310B981' opacity='0.4'/%3E%3Ccircle cx='40' cy='20' r='1.5' fill='%2334D399' opacity='0.3'/%3E%3Ccircle cx='50' cy='40' r='1.5' fill='%2334D399' opacity='0.3'/%3E%3Ccircle cx='65' cy='30' r='1.5' fill='%236EE7B7' opacity='0.25'/%3E%3Ccircle cx='70' cy='70' r='1.5' fill='%236EE7B7' opacity='0.25'/%3E%3Ccircle cx='25' cy='50' r='1.5' fill='%2310B981' opacity='0.4'/%3E%3Ccircle cx='40' cy='50' r='1.5' fill='%2310B981' opacity='0.4'/%3E%3Ccircle cx='50' cy='35' r='1.5' fill='%2334D399' opacity='0.3'/%3E%3C!-- Additional circuit paths --%3E%3Cpath d='M5 70h25v-15h15' stroke='%23047857' stroke-width='0.5' opacity='0.15'/%3E%3Cpath d='M60 10h15v25h-10' stroke='%23059669' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E")`;

  const handleContainerMouseMove = useCallback(({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  }, [mouseX, mouseY]);


  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseMove={handleContainerMouseMove}
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] bg-green-500/8 rounded-full filter blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-emerald-400/6 rounded-full filter blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 w-[20rem] h-[20rem] bg-teal-500/5 rounded-full filter blur-[80px]" />

        {/* Circuit board pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 block opacity-50"
          style={{
            backgroundImage: circuitPattern,
          }}
        />

        {/* Animated flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Main circuit pathways */}
            <path 
              d="M0,150 L200,150 L200,100 L400,100 L400,200 L600,200 L600,150 L800,150" 
              stroke="url(#gradient1)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.4"
              className="animate-pulse"
            />
            <path 
              d="M0,350 L150,350 L150,250 L350,250 L350,400 L550,400 L550,350 L750,350" 
              stroke="url(#gradient2)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.35"
              style={{animationDelay: '1.5s'}}
              className="animate-pulse"
            />
            <path 
              d="M100,0 L100,120 L250,120 L250,300 L150,300 L150,450 L400,450 L400,350" 
              stroke="url(#gradient3)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.3"
              style={{animationDelay: '3s'}}
              className="animate-pulse"
            />
            
            {/* Circuit connection nodes */}
            <circle cx="200" cy="150" r="3" fill="#10B981" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <circle cx="400" cy="100" r="3" fill="#34D399" opacity="0.5" className="animate-pulse" style={{animationDelay: '1s'}} />
            <circle cx="600" cy="200" r="3" fill="#6EE7B7" opacity="0.4" className="animate-pulse" style={{animationDelay: '1.5s'}} />
            <circle cx="150" cy="350" r="3" fill="#10B981" opacity="0.6" className="animate-pulse" style={{animationDelay: '2s'}} />
            <circle cx="350" cy="250" r="3" fill="#34D399" opacity="0.5" className="animate-pulse" style={{animationDelay: '2.5s'}} />
            <circle cx="550" cy="400" r="3" fill="#6EE7B7" opacity="0.4" className="animate-pulse" style={{animationDelay: '3s'}} />
            
            {/* Additional micro-circuits */}
            <rect x="180" y="130" width="40" height="20" fill="none" stroke="#059669" strokeWidth="0.5" opacity="0.3" />
            <rect x="370" y="80" width="30" height="15" fill="none" stroke="#047857" strokeWidth="0.5" opacity="0.25" />
            <rect x="520" y="380" width="35" height="25" fill="none" stroke="#065F46" strokeWidth="0.5" opacity="0.2" />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                <stop offset="30%" stopColor="#059669" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#047857" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#065F46" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0" />
                <stop offset="40%" stopColor="#10B981" stopOpacity="0.5" />
                <stop offset="60%" stopColor="#059669" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0" />
                <stop offset="50%" stopColor="#34D399" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Circuit board grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(5, 150, 105, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(5, 150, 105, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 120px 120px, 120px 120px'
          }} />
        </div>

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/3 via-transparent to-emerald-900/2" />
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${smoothX}px ${smoothY}px,
              rgba(16, 185, 129, 0.10) 0%,
              rgba(5, 150, 105, 0.05) 30%,
              transparent 60%
            )
          `
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default memo(HighlightBackground);