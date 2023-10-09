"use client";

import { motion, Variants } from "framer-motion";
import { useRecoilState } from "recoil";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { openInNewTab } from "../lib/helpers";

import { StyleType, Directions } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import { ArrowDownRight, ArrowDownSkewed, ArrowRight, ArrowDown, ArrowLeft, ArrowUp, ArrowUpLeft, ArrowDownLeft } from "../components/Arrows";
import './styles.css';

type HeroStyleDefinition = {
    [key in StyleType]: string;
};
  
const styles: {
    section: HeroStyleDefinition;
    backgroundCard: HeroStyleDefinition;
    btn: HeroStyleDefinition;
    arrowColour: HeroStyleDefinition;
    detailsCard: HeroStyleDefinition;
} = {

    "section": {
        "clean": "bg-white",
        "night": "bg-background-night",
        "glass": "shifting-background",
        "brutal": `bg-pink-100`,
    },

    "backgroundCard": {
        "clean": "",
        "night": "",
        "glass": "backdrop-blur-xl bg-white/10 text-white/80 border border-white/10 rounded-2xl",
        "brutal": "bg-blue-200 border-black border-2 text-black",
    },

    "btn": {
        "clean": "shadow-md border-black hover:bg-black hover:text-white",
        "night": "bg-accent-night hover:bg-secondary-night hover:text-text-night border-primary-night shadow-lg shadow-cyan-500/40",
        "glass": "backdrop-blur-xl glass-btn border border-white/10 rounded-lg",
        "brutal": "brutal-shadow bg-orange-300 hover:bg-purple-300 rounded-none border-2 border-black font-semibold",
    },

    "arrowColour": {
        "clean": "#00000080",
        "night": "#FFFFFF60",
        "glass": "#00000040",
        "brutal": `#000000`,
    },

    "detailsCard": {
        "clean": "text-black/60",
        "night": "text-text-night/80",
        "glass": "backdrop-blur-xl bg-white/5 text-white/60 border border-white/5 rounded-2xl",
        "brutal": `bg-pink-200 border-2 border-black`,
    }
};

export default function AreasOfInterest() {

    const [type, _] = useRecoilState(styleTypeAtom);

    const [arrowsVisible, setArrowsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (entry.isIntersecting) {  // If section is in view
                const timer = setTimeout(() => {
                    setArrowsVisible(true);
                }, 2000);
                
                return () => {
                    clearTimeout(timer);
                };
            }
        }

        // Create the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1  // At least 10% of the target element is visible
        });

        // Observe the section element
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Clean up on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);  // Empty dependency array to ensure this effect runs once on mount
    
    return (
        <> 
            <section ref={sectionRef} className={`${styles.section[type]} overflow-hidden w-full mx-auto  flex flex-col px-8 py-32`} >
                <motion.div className={`${styles.backgroundCard[type]} w-full md:w-[700px] flex flex-col gap-20 mx-auto p-8 py-20 md:p-20`}>
                    <div className="flex flex-row relative">
                        <TopRightArea cardStyles={styles.detailsCard[type]} colour={styles.arrowColour[type]} visible={arrowsVisible} />
                        <AreaOfInterest type={type} right buttonText="projects" link="https://projects.samwelzimmer.com/" />
                    </div>

                    <div className="relative flex flex-row">
                        <TopLeftArea cardStyles={styles.detailsCard[type]} colour={styles.arrowColour[type]}  visible={arrowsVisible} />
                        <AreaOfInterest type={type} buttonText="playground" link="https://www.samwelzimmer.com/playground" />
                    </div>

                    <div className="relative flex flex-row">
                        <BottomRightArea cardStyles={styles.detailsCard[type]} colour={styles.arrowColour[type]} visible={arrowsVisible} />
                        <AreaOfInterest type={type} right buttonText="resume" link="" />
                    </div>

                    <div className="relative flex flex-row">
                        <BottomLeftArea cardStyles={styles.detailsCard[type]} colour={styles.arrowColour[type]} visible={arrowsVisible} />
                        <AreaOfInterest type={type} buttonText="master's project" link="https://masters.samwelzimmer.com/" />
                    </div>
                </motion.div>
            </section>
        </>
    );
};

interface AreaProps {
    visible: boolean;
    colour: string;
    cardStyles: string;
}

const TopRightArea = ({ visible, colour, cardStyles }: AreaProps) => {

    const variants = {
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "-100%" },
    };

    return (
        <>
            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute flex sm:hidden flex-col w-max bottom-20 gap-4 right-0 justify-center`}>
                <span className={`${cardStyles} text-center w-full p-2`}>check out some of <br/>the things i{"'"}ve done</span>
                <div className="mx-auto">
                    <ArrowDownSkewed height={90} colour={colour} />
                </div>
            </motion.div>

            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute hidden sm:flex flex-row gap-4 w-max bottom-20 right-12 justify-center`}>
                <span className={`${cardStyles} text-right w-full p-2 h-max`}>check out some of <br/>the things i{"'"}ve done</span>
                <div className="-rotate-90">
                    <ArrowDownLeft colour={colour} />
                </div>
            </motion.div>
        </>

    );
};

const TopLeftArea = ({ visible, colour, cardStyles }: AreaProps) => {

    const variants = {
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "-100%" },
    };

    return (
        <>
            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute flex sm:hidden flex-col w-max -top-56 gap-3 -left-4 justify-center`}>
                <span className={`${cardStyles} text-left w-full p-2 z-0`}>my final <br />university<br /> project</span>

                <div className="">
                    <ArrowDown height={120} width={50} colour={colour} />
                </div>
            </motion.div>

            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute hidden sm:flex lg:hidden flex-row items-center w-max -top-6 gap-8 left-56 justify-center`}>
                <div className="mx-auto">
                    <ArrowLeft width={120} colour={colour} />
                </div>
                <span className={`${cardStyles} text-left w-full p-2`}>my final <br />university project</span>
            </motion.div>

            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute lg:flex hidden flex-col items-center w-max bottom-0 gap-2 -left-44 justify-center`}>
                <span className={`${cardStyles} text-center w-full p-2`}>my final <br />university project</span>
                <div className="mx-auto">
                    <ArrowDownRight colour={colour} />
                </div>
            </motion.div>
        </>

    );
};

const BottomRightArea = ({ visible, colour, cardStyles }: AreaProps) => {

    const variants = {
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: "100%" },
    };

    return (
        <>
            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute flex flex-col w-max -bottom-48 gap-4 -right-12 sm:right-8 9justify-center`}>
                <div className={`mx-auto transform scale-x-[-1]`}>
                    <ArrowUp height={100} colour={colour} />
                </div>
                <span className={`${cardStyles} text-right p-2 sm:text-center w-full`}>my skills <br />and experience</span>
            </motion.div>
        </>

    );
};

const BottomLeftArea = ({ visible, colour, cardStyles }: AreaProps) => {

    const variants = {
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "100%" },
    };

    return (
        <>
            <motion.div animate={visible ? "enter" : "exit"} variants={variants} className={`${!visible && "hidden"} absolute flex flex-row w-max -bottom-44 gap-0 left-0 sm:left-12 justify-center`}>
                <div className={` mx-auto transform scale-x-[-1] -rotate-45 pb-12`}>
                    <ArrowUpLeft height={100} colour={colour} />
                </div>
                <span className={`${cardStyles} text-left w-full flex self-end p-2 sm:mb-6`}>a collection of half<br/> backed ideas and <br/>back-of-the-napkin<br className="sm:hidden"/> designs</span>
            </motion.div>
        </>

    );
};

interface AreaOfInterestProps {
    buttonText: string;
    link: string;
    type: StyleType;
    right?: boolean;
};

const AreaOfInterest = ({ buttonText, link, right=false, type }: AreaOfInterestProps) => {

    const cardVariants: Variants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
    };

    return (
        <motion.div 
            className={`flex flex-col w-full z-10 ${right ? "items-end": "items-start"}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            {/* <span className="">{explainText}</span> */}
            <motion.button variants={cardVariants} onClick={() => openInNewTab(link)} className={`${styles.btn[type]} border p-4 rounded-md w-44 font-medium`}>
                {buttonText}
            </motion.button>
        </motion.div>
    );
};

