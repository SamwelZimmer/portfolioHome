import Image from 'next/image';
import Link from 'next/link';

import RecentProjects from '../../sections/RecentProjects';
import ContactBar from '../../components/ContactBar';

export default function Home() {
  return (
    <main className="w-screen">
        <h1>Samwel Zimmer</h1>

        <div>
          <Link className='underline hover:opacity-50' href={"https://projects.samwelzimmer.com/"}>Projects</Link>
        </div>

        <div>
          <Link className='underline hover:opacity-50' href={"/playground"}>Playground</Link>
        </div>

        <div>
          <Link className='underline hover:opacity-50' href={"https://masters.samwelzimmer.com/"}>Master{"'"}s Thesis</Link>
        </div>

        <div className='w-full py-48'>
          <ContactBar type='brutal' />
        </div>

        <div className='flex flex-col gap-4'>
          <hr className='w-1/3 sm:w-40 mx-auto py-8' />
          <span className='font-semibold text-xl px-4'>Recent Activity</span>
          <RecentProjects />
          <span className='px-4 opacity-50'>other recent stuff coming soon</span>
        </div>

    </main>
  )
}
