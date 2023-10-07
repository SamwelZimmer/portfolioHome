"use client";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";

import { openInNewTab } from "../lib/helpers";

import { StyleType, Directions, Project } from "../lib/types";
import { styleTypeAtom } from "../atoms/styleTypeAtom";
import RecentProjects from "../components/RecentProjects";
import './styles.css';

type HeroStyleDefinition = {
    [key in StyleType]: string;
};
  
const styles: {
    section: HeroStyleDefinition;
    heading: HeroStyleDefinition;
    subHeading: HeroStyleDefinition;
    text: HeroStyleDefinition;
} = {

    "section": {
        "clean": "bg-white",
        "night": "bg-background-night",
        "glass": "bg-blue-300",
        "brutal": `bg-pink-100`,
    },

    "heading": {
        "clean": "",
        "night": "text-white",
        "glass": "opacity-60",
        "brutal": "",
    },

    "subHeading": {
        "clean": "",
        "night": "text-white/70",
        "glass": "opacity-50",
        "brutal": "",
    },

    "text": {
        "clean": "",
        "night": "text-white/50",
        "glass": "opacity-40",
        "brutal": "",
    },
};

interface AboutSectionProps {
    projects: Project[];
};

export default function RecentActivitySection({ projects }: AboutSectionProps ) {

    const [type, _] = useRecoilState(styleTypeAtom);

    return (
        <section className={`${styles.section[type]} w-full mx-auto flex flex-col gap-4 py-32`} >
            <span className={`${styles.heading[type]} font-semibold text-xl px-8`}>Recent Activity</span>

            <div className="flex flex-col">
                <span  className={`${styles.subHeading[type]} px-8`}>projects ...</span>
                <RecentProjects projects={projects} />
            </div>

            <span className={`${styles.text[type]} px-8`}>other recent stuff coming soon</span>
        </section>
    );
};