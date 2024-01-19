import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className='text-5xl font-bold mb-5'>CPRG 306: Web Development 2 - Assignments</h1>
      </div>
        <p className='hover:text-green-400 underline'><Link href={"/week-2"}>Click here to my week-2 assignemnt</Link></p>

    </main>
  )
}
