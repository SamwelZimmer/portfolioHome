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
            <section className={`${styles.section[type]} w-full mx-auto  flex flex-col px-8 py-32`} >
                <div className={`${styles.backgroundCard[type]} w-full md:w-[700px] flex flex-col gap-20 mx-auto p-8 py-20 md:p-20`}>
                    <div className="flex flex-row relative">

                        {/* <div className="absolute top-0 left-0">
                            <ArrowDownLeft colour="#00FF00" />
                        </div> */}

                        <AreaOfInterest type={type} right explainText="this is explainer text" buttonText="projects" link="https://projects.samwelzimmer.com/" />
                    </div>

                    <div className="flex flex-row">
                        <AreaOfInterest type={type} explainText="this is explainer text" buttonText="playground" link="https://www.samwelzimmer.com/playground" />
                    </div>

                    <div className="flex flex-row ">
                        <AreaOfInterest type={type} right explainText="this is explainer text" buttonText="resume" link="" />
                    </div>

                    <div className="flex flex-row ">
                        <AreaOfInterest type={type} explainText="this is explainer text" buttonText="master's project" link="https://masters.samwelzimmer.com/" />
                    </div>
                </div>
            </section>
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
        <div className={`flex flex-col w-full ${right ? "items-end": "items-start"}`}>
            {/* <span className="">{explainText}</span> */}
            <motion.button onClick={() => openInNewTab(link)} className={`${styles.btn[type]} border p-4 rounded-md w-44 font-medium`}>
                {buttonText}
            </motion.button>
        </div>
    );
};

