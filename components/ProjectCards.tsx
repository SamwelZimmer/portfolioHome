"use client";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

import { StyleType, DateObject } from "../lib/types";
import { monthNumberToString, concatenateStringToLength, openInNewTab } from "../lib/helpers";

interface CardProps {
    title: string;
    id: string;
    summary?: string;
    date: DateObject;
    link?: string;
    info?: string;
    height?: number;
    width?: number;
    type: StyleType;
}

const cutOfLength = 65;

type CardStyleDefinition = {
    [key in StyleType]: string;
  };

const cardStyles: {
    card: CardStyleDefinition;
    title: CardStyleDefinition;
    summary: CardStyleDefinition;
    date: CardStyleDefinition;
    } = {
    "card": {
        "clean": `relative cursor-pointer bg-white w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border rounded-md shadow-md`,
        "night": `relative cursor-pointer bg-slate-800 w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border border-black rounded-md`,
        "pastel": "relative cursor-pointer bg-[#BDD1C3] w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 shadow-md rounded-md",
        "brutal": "brutal-shadow cursor-pointer relative bg-yellow-400 w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border-4 border-black rounded-lg",
    },
    "title": {
        "clean": "text-xl",
        "night": "text-xl text-gray-300",
        "pastel": "text-xl",
        "brutal": "text-xl font-medium",
    },
    "summary": {
        "clean": "text-gray-500 font-light",
        "night": "text-gray-400 font-light",
        "pastel": "text-gray-700 font-light",
        "brutal": "text-black font-light",
    },
    "date": {
        "clean": "font-light text-gray-400",
        "night": "font-light text-gray-400",
        "pastel": "font-light text-gray-600",
        "brutal": "",
    },

}

export const Card = ({ title, id, summary, date, link, info, height, width, type }: CardProps) => {

    const [showInfo, setShowInfo] = useState(false);

    const optionalStyles = {
        ...width && { width },
        ...height && { height }
    };

    if (info && info.length > cutOfLength) {
        info = concatenateStringToLength(info, cutOfLength) + "...";
    };

    if (summary && summary.length > cutOfLength) {
        summary = concatenateStringToLength(summary, cutOfLength) + "...";
    };

    return (
        <div onClick={() => openInNewTab(`https://projects.samwelzimmer.com/${id}`)} style={optionalStyles} className={cardStyles.card[type]}>
            <div className="w-full">
                <span className={cardStyles.title[type]}>{title}</span> 
                <p className={cardStyles.summary[type]}>{showInfo ? info : summary}</p>
            </div>

            <span className={cardStyles.date[type]}>{concatenateStringToLength(monthNumberToString(date.month), 3)} {date.year}</span>

            <div className="absolute flex right-2 bottom-2">
                { link && <ExternalLinkButton link={link} type={type} /> }
                { info && <InfoButton visible={showInfo} setVisible={setShowInfo} type={type} /> }
            </div>            
        </div>
    );
};

interface InfoButtonProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
    type: StyleType;
};

const InfoButton = ({ visible, setVisible, type }: InfoButtonProps) => {
    return (
        <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className={`p-2 hover:opacity-30 ${type === "night" && "text-gray-400"} ${type === "clean" && "opacity-60"}`}
            onClick={() => setVisible(!visible)}
        >
            <AiOutlineInfoCircle size={20} />
        </motion.button>
    );
};

interface ExternalLinkButton {
    link: string;
    type: StyleType;
};

const ExternalLinkButton = ({ link, type }: ExternalLinkButton) => {

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }} 
            className={`p-2 hover:opacity-30 ${type === "night" && "text-gray-400"} ${type === "clean" && "opacity-60"}`}
            onClick={handleClick}
        >
            <FiExternalLink size={20} />
        </motion.button>
    );
};