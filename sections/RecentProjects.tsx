import { Card } from "../components/ProjectCards";

import { getRecentProjects } from "../lib/firebase";
import { convertTimestampToDate } from "../lib/helpers";
import { Project } from "../lib/types";


export default async function RecentProjects() {

    let projects: Project[] = await getRecentProjects(5);

    return (
        <section className="flex flex-col">
            <span className="px-4">projects ...</span>
            <div className='scrollable-but-hidden-scrollbar overflow-scroll'>
                <div className="flex flex-row gap-4 overflow-hidden w-max p-4">
                    {
                        Object.keys(projects).map((key, i) => (
                            <Card key={key} id={projects[i].id} title={projects[i].title || ""} summary={projects[i].summary || ""} date={convertTimestampToDate(projects[i].datetime)} link={projects[i].link} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};