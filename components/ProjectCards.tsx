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
}

const cutOfLength = 65;

export const CleanCard = ({ title, summary, date, link, info, height, width }: CardProps) => {

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
        <div style={optionalStyles} className={`relative bg-white w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border rounded-md shadow-md`}>
            <div className="w-full">
                <span className="text-xl">{title}</span> 
                <p className="text-gray-500 font-light">{showInfo ? info : summary}</p>
            </div>

            <span className="font-light text-gray-400">{concatenateStringToLength(monthNumberToString(date.month), 3)} {date.year}</span>

            <div className="absolute flex right-2 bottom-2">
                { link && <ExternalLinkButton link={link} type="brutal" /> }
                { info && <InfoButton visible={showInfo} setVisible={setShowInfo} type="brutal" /> }
            </div>            
        </div>
    );
};

export const NightCard = ({ title, summary, date, link, info, height, width }: CardProps) => {

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
        <div style={optionalStyles} className={`relative bg-slate-800 w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border border-black rounded-md`}>
            <div className="w-full">
                <span className="text-xl text-gray-300">{title}</span> 
                <p className="text-gray-400 font-light">{showInfo ? info : summary}</p>
            </div>

            <span className="font-light text-gray-400">{concatenateStringToLength(monthNumberToString(date.month), 3)} {date.year}</span>

            <div className="absolute flex right-2 bottom-2">
                { link && <ExternalLinkButton link={link} type="brutal" /> }
                { info && <InfoButton visible={showInfo} setVisible={setShowInfo} type="brutal" /> }
            </div>            
        </div>
    );
};

export const PastelCard = ({ title, summary, date, link, info, height, width }: CardProps) => {

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
        <div style={optionalStyles} className={`relative bg-[#BDD1C3] w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 shadow-md rounded-md`}>
            <div className="w-full">
                <span className="text-xl">{title}</span> 
                <p className="text-gray-700 font-light">{showInfo ? info : summary}</p>
            </div>

            <span className="font-light text-gray-600">{concatenateStringToLength(monthNumberToString(date.month), 3)} {date.year}</span>

            <div className="absolute flex right-2 bottom-2">
                { link && <ExternalLinkButton link={link} type="brutal" /> }
                { info && <InfoButton visible={showInfo} setVisible={setShowInfo} type="brutal" /> }
            </div>            
        </div>
    );
};

export const BrutalCard = ({ title, id, summary, date, link, info, height, width }: CardProps) => {

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
        <div onClick={() => openInNewTab(`https://projects.samwelzimmer.com/${id}`)} style={optionalStyles} className={`brutal-shadow relative bg-yellow-400 w-full sm:w-[400px] h-36 flex flex-col justify-between p-4 border-4 border-black rounded-lg`}>
            <div className="w-full">
                <span className="text-xl font-medium">{title}</span> 
                <p className="text-black font-light">{showInfo ? info : summary}</p>
            </div>

            <span className="">{concatenateStringToLength(monthNumberToString(date.month), 3)} {date.year}</span>

            <div className="absolute flex right-2 bottom-2">
                { link && <ExternalLinkButton link={link} type="brutal" /> }
                { info && <InfoButton visible={showInfo} setVisible={setShowInfo} type="brutal" /> }
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