import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
        <h1>Samwel Zimmer</h1>

        <div>
          <Link className='underline hover:opacity-50' href={"https://projects.samwelzimmer.com/"}>Projects</Link>
        </div>

        <div>
          <Link className='underline hover:opacity-50' href={"/playground"}>Playground</Link>
        </div>

        <div>
          <Link className='underline hover:opacity-50' href={"https://masters.samwelzimmer.com/"}>Master's Thesis</Link>
        </div>
    </main>
  )
}
