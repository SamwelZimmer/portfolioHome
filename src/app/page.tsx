import Image from 'next/image';
import Link from 'next/link';

import StyleSelector from '../../components/StyleSelector';
import RecentProjects from '../../sections/RecentProjects';
import ContactBar from '../../components/ContactBar';
import Hero from '../../sections/Hero';

export default function Home() {
  return (
    <main className="w-screen">

        <Hero />

        <div className='w-full'>
          <ContactBar />
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
