export type StyleType = "clean" | "brutal" | "night" | "plain" | "pastel";

export type ProjectStatusType = "completed" | "abandoned" | "postponed" | "ongoing";

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