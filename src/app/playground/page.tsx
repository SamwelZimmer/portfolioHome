import Link from 'next/link';

import './styles.css';
import { getAllPlaygroundItems } from "../../../lib/firebase";

function randomBoxShape() {
  const weights = [1, 1, 1, 1, 2, 2, 2];
  const height = weights[Math.floor(Math.random() * weights.length)];
  const width = weights[Math.floor(Math.random() * weights.length)];
  const types = [`col-span-1 row-span-1 aspect-square justify-end`, `col-span-1 row-span-2 aspect-[2/1] justify-start`, `col-span-2 row-span-1 aspect-[2/1] justify-start`]
  return types[Math.floor(Math.random() * types.length)];
};

export interface PlaygroundItem {
    id: string;
    title?: string;
    summary?: string;
    link?: string;
};

export default async function Playground() {

    let allItems: PlaygroundItem[] = await getAllPlaygroundItems();

    return (
      <main>
        <div className='py-32 flex flex-col gap-1'>
          <h1 className="text-3xl md:text-6xl w-full text-right px-4 dark:text-white opacity-60 dark:opacity-70">Samwel{"'"}s Playground</h1>
          <h1 className="text-xl md:text-xl font-thin w-full text-right px-4 dark:text-white opacity-70">a collage of loose ends</h1>
        </div>

        <section className='px-4 sm:px-8 py-12'>
          <div className='grid w-full h-full grid-cols-2 md:grid-cols-3 lg:grid-col-4 xl:grid-col-6 gap-8 sm:gap-12'>             

            {
                allItems.map((item, i) => (
                    <Link key={i} href={item?.link || ""} className={`w-full h-full text-xl md:text-2xl p-4 flex flex-col rounded-xl display-container ${randomBoxShape()}`}>
                        <h4 className='dark:text-white opacity-90'>{item.title}</h4>
                        <p className='dark:text-white md:text-lg opacity-50 font-light'>{item.summary}</p>
                    </Link>
                ))
            }

          </div>
        </section>
      </main>
    );
};