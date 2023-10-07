import { Card } from "./ProjectCards";

import { convertTimestampToDate } from "../lib/helpers";
import { Project } from "../lib/types";

interface RecentProjectsProps {
    projects: Project[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {

    return (

        <div className='scrollable-but-hidden-scrollbar overflow-scroll'>
            <div className="flex flex-row gap-4 overflow-hidden w-max p-4 px-8">
                {
                    Object.keys(projects).map((key, i) => (
                        <Card key={key} id={projects[i].id} title={projects[i].title || ""} summary={projects[i].summary || ""} date={convertTimestampToDate(projects[i].datetime)} link={projects[i].link} />
                    ))
                }
            </div>
        </div>
    );
};