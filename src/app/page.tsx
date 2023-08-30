'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function TestLink() {
  const searchParams = useSearchParams()
  const utm_medium = searchParams.get('utm_medium');
  console.log(utm_medium);
  const router = useRouter()

  const [time, setTime] = useState(5);


  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
      if (time === 0) {
        if (utm_medium === null) {
          router.push('https://apps.apple.com')
        }
        else {
          router.push(`${utm_medium}`)
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [router, time, utm_medium]);

  return (
    <>
      <main className="flex justify-center items-center h-screen text-center">
        <div  className="flex flex-col gap-6">

        <h1 className="text-5xl font-bold">Countdown</h1>
        <p className="text-7xl font-extrabold">
          {time}
        </p>
        </div>
      </main>
    </>
  )
}