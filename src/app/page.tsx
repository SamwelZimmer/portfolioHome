import Image from 'next/image';
import Link from 'next/link';

import RecentProjects from '../../components/RecentProjects';
import ContactBar from '../../components/ContactBar';
import Hero from '../../sections/Hero';
import AreasOfInterest from '../../sections/AreasOfInterest';
import AboutSection from '../../sections/AboutSection';
import RecentActivitySection from '../../sections/RecentActivitySection';
import { Project } from '../../lib/types';
import { getRecentProjects } from '../../lib/firebase';

export default async function Home() {

  let projects: Project[] = await getRecentProjects(5);

  return (
    <main className="w-screen">

        <Hero />

        <div className='w-full'>
          <ContactBar />
        </div>

        <div className='w-full'>
          <AreasOfInterest />
        </div>

        <div className='w-full'>
          <AboutSection />
        </div>

        <div className='w-full'>
          <RecentActivitySection projects={projects} />
        </div>
    </main>
  )
}
