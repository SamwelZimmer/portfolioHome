export type StyleType = "clean" | "brutal" | "night" | "glass";

export type ProjectStatusType = "completed" | "abandoned" | "postponed" | "ongoing";

export type Directions = "up" | "down" | "left" | "right";

export interface Project {
    id: string;
    datetime: string;
    title?: string;
    body?: string;
    status?: ProjectStatusType;
    summary?: string;
    coverPhoto?: string;
    tags?: string;
    link?: string;
    categories?: Array<string>;
};

export type DateObject = {
    day: number;
    month: number;
    year: number;
};