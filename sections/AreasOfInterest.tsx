"use client";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
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
    btn: HeroStyleDefinition
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
};

export default function AreasOfInterest() {

    const [type, _] = useRecoilState(styleTypeAtom);
    
    return (
        <> 
            <section className={`${styles.section[type]} overflow-hidden w-full mx-auto  flex flex-col px-8 py-32`} >
                <div className={`${styles.backgroundCard[type]} w-full md:w-[700px] flex flex-col gap-20 mx-auto p-8 py-20 md:p-20`}>
                    <div className="flex flex-row relative">
                        <TopRightArea />
                        <AreaOfInterest type={type} right explainText="this is explainer text" buttonText="projects" link="https://projects.samwelzimmer.com/" />
                    </div>

                    <div className="relative flex flex-row">
                        <TopLeftArea />
                        <AreaOfInterest type={type} explainText="this is explainer text" buttonText="playground" link="https://www.samwelzimmer.com/playground" />
                    </div>

                    <div className="relative flex flex-row">
                        <BottomRightArea />
                        <AreaOfInterest type={type} right explainText="this is explainer text" buttonText="resume" link="" />
                    </div>

                    <div className="relative flex flex-row">
                        <BottomLeftArea />
                        <AreaOfInterest type={type} explainText="this is explainer text" buttonText="master's project" link="https://masters.samwelzimmer.com/" />
                    </div>
                </div>
            </section>
        </>
    );
};

const TopRightArea = () => {
    return (
        <>
            <div className={`absolute flex sm:hidden flex-col w-max bottom-20 gap-4 right-0 justify-center`}>
                <span className="text-center w-full bg-white p-2">check out some of <br/>the things i{"'"}ve done</span>
                <div className="mx-auto">
                    <ArrowDownSkewed height={90} colour="#000000" />
                </div>
            </div>

            <div className={`absolute hidden sm:flex flex-row gap-4 w-max bottom-20 right-12 justify-center`}>
                <span className="text-right w-full bg-white p-2 h-max">check out some of <br/>the things i{"'"}ve done</span>
                <div className="-rotate-90">
                    <ArrowDownLeft colour="#000000" />
                </div>
            </div>
        </>

    );
};

const TopLeftArea = () => {
    return (
        <>
            <div className={`absolute flex sm:hidden flex-col w-max -top-56 gap-3 -left-4 justify-center`}>
                <span className="text-left w-full bg-white p-2 z-0">my final <br />university<br /> project</span>

                <div className="">
                    <ArrowDown height={120} width={50} colour="#000000" />
                </div>
            </div>

            <div className={`absolute hidden sm:flex lg:hidden flex-row items-center w-max -top-6 gap-8 left-56 justify-center`}>
                <div className="mx-auto">
                    <ArrowLeft width={120} colour="#000000" />
                </div>
                <span className="text-left w-full bg-white p-2">my final <br />university project</span>
            </div>

            <div className={`absolute lg:flex hidden flex-col items-center w-max bottom-0 gap-2 -left-44 justify-center`}>
                <span className="text-center w-full bg-white p-2">my final <br />university project</span>
                <div className="mx-auto">
                    <ArrowDownRight colour="#000000" />
                </div>
            </div>
        </>

    );
};

const BottomRightArea = () => {
    return (
        <>
            <div className={`absolute flex flex-col w-max -bottom-48 gap-4 -right-12 sm:right-8 9justify-center`}>
                <div className="mx-auto transform scale-x-[-1]">
                    <ArrowUp height={100} colour="#000000" />
                </div>
                <span className="text-right bg-white p-2 sm:text-center w-full">my skills <br />and experience</span>
            </div>
        </>

    );
};

const BottomLeftArea = () => {
    return (
        <>
            <div className={`absolute flex flex-row w-max -bottom-44 gap-0 left-0 sm:left-12 justify-center`}>
                <div className="mx-auto transform scale-x-[-1] -rotate-45 pb-12">
                    <ArrowUpLeft height={100} colour="#000000" />
                </div>
                <span className="text-left w-full flex self-end bg-white p-2 sm:mb-6">a collection of half<br/> backed ideas and <br/>back-of-the-napkin<br className="sm:hidden"/> designs</span>
            </div>
        </>

    );
};

interface AreaOfInterestProps {
    explainText: string;
    buttonText: string;
    link: string;
    type: StyleType;
    right?: boolean;
};

const AreaOfInterest = ({ explainText, buttonText, link, right=false, type }: AreaOfInterestProps) => {
    return (
        <div className={`flex flex-col w-full z-10 ${right ? "items-end": "items-start"}`}>
            {/* <span className="">{explainText}</span> */}
            <motion.button onClick={() => openInNewTab(link)} className={`${styles.btn[type]} border p-4 rounded-md w-44 font-medium`}>
                {buttonText}
            </motion.button>
        </div>
    );
};

