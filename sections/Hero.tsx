"use client";
import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { ReactElement, useRef, RefObject, useState, useEffect } from "react";

import StyleSelector from "../components/StyleSelector";
import { StyleType, Directions } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import './styles.css';

type HeroStyleDefinition = {
    [key in StyleType]: string;
};
  
const styles: {
    section: HeroStyleDefinition;
    h1: HeroStyleDefinition;
    h2: HeroStyleDefinition;
} = {

    "section": {
        "clean": "bg-white",
        "night": "bg-slate-900",
        "glass": "bg-blue-200/50",
        "brutal": `bg-violet-300`,
    },

    "h1": {
        "clean": "",
        "night": "text-white",
        "glass": "text-white/70",
        "brutal": ``,
    },

    "h2": {
        "clean": "",
        "night": "text-gray-400",
        "glass": "text-white/60",
        "brutal": ``,
    },
};

export default function Hero() {

    const [type, _] = useRecoilState(styleTypeAtom);

    const constraintsRef = useRef<HTMLDivElement | null>(null)

    return (
        <motion.div ref={constraintsRef} className={`${styles.section[type]} relative z-0 overflow-hidden w-screen h-screen flex flex-col justify-center`}>
        
        { type === "glass" &&
          <>
           <div className="absolute blob-animation -top-32 left-[10%] aspect-square w-1/2 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 " />
            <div className="absolute blob-animation animation-delay-2000 -top-12 -right-20 w-[50%] aspect-square bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 " />
            <div className="absolute bottom-1/2 translate-y-1/2 -right-1/3 h-[70%] aspect-square bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 " />
            <div className="absolute top-1/2 -translate-y-1/2 right-1/2 h-[80%] aspect-square bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 " />
            <div className="absolute blob-animation animation-delay-2000 top-1/2 right-1/3 h-[80%] aspect-square bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 " />
            <div className="absolute blob-animation animation-delay-4000 top-1/2 left-1/2 h-[80%] aspect-square bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 " />
          </>
        }
       



          {/* <div className="absolute h-1/2 w-1/2 bg-gradient-to-t from-blue-400 to-green-300 rounded-full blur opacity-25"></div> */}

          <div className='relative flex flex-col px-4 gap-8 w-full md:px-0 md:w-[650px] mx-auto text-center md:text-left'>

            { type === "brutal" && <BackgroundAsset classes="absolute -top-64 z-0 -right-20 md:-right-10" constraintsRef={constraintsRef} direction="left" asset={<Image draggable="false" src="/brutal_graphics/brutal-quad-1.svg" alt="brutal circle asset" width={200} height={300} />} /> }

            <h1 className={`${styles.h1[type]} z-10 text-3xl sm:text-5xl font-semibold`}>I wasn{"'"}t sure<br/> what style to use. <br /> So, I{"'"}ll let you choose.</h1>
            <h2 className={`${styles.h2[type]} z-10 font-medium`}>Anyway... I{"'"}m Samwel</h2>
          </div>

          <div className='relative py-12 z-10'>
            <div className="z-20 absolute w-full ">
              <StyleSelector />
            </div>

            { type === "brutal" && <BackgroundAsset classes="absolute z-0 -top-32 -right-20 md:-right-10" constraintsRef={constraintsRef} direction="left" asset={<Image draggable="false" src="/brutal_graphics/brutal-semi-circle.svg" alt="brutal circle asset" width={150} height={300} />} /> }
          </div>

          { type === "brutal" && <BackgroundAsset classes="absolute -top-48 -left-32" constraintsRef={constraintsRef} direction="down" asset={<Image draggable="false" src="/brutal_graphics/brutal-circle.svg" alt="brutal circle asset" width={300} height={300} />} /> }
          { type === "brutal" && <BackgroundAsset classes="absolute z-0 top-[70%] left-[10%]" constraintsRef={constraintsRef} direction="right" asset={<Image draggable="false" src="/brutal_graphics/brutal-triangle.svg" alt="brutal triangle asset" width={150} height={150} />} /> }
        </motion.div>
    );
};

interface BackgroundAssetProps {
  asset: ReactElement;
  constraintsRef: RefObject<HTMLDivElement>;
  classes: string;
  direction: Directions;
}

const BackgroundAsset = ({ asset, constraintsRef, classes, direction }: BackgroundAssetProps) => {

  const [visible, setVisible] = useState(false);

  const variants = {
    "right": {
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "-100%" },
    },
    "left": {
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: "100%" },
    },
    "down": {
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "-100%" },
    },
    "up": {
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "100%" },
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => {
        clearTimeout(timer);
    };
      
  }, []); 

  return (
    <motion.div
      animate={visible ? "enter" : "exit"} 
      variants={variants[direction]}
      drag
      dragConstraints={constraintsRef}
      className={`${!visible && "hidden"} ${classes}`}
    >
      {asset}
    </motion.div>
  );
}
