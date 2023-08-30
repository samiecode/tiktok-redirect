'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function TestLink() {
    const searchParams = useSearchParams()
    const utm_medium = searchParams.get('utm_medium');
    const router = useRouter()

    const [time, setTime] = useState(3);

    
    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {       
                setTime(time - 1);
            }
            if (time === 0) {
                router.push(`${utm_medium}`)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [router, time, utm_medium]);

    return (
        <>
            <div>
                <h1>Countdown</h1>
                <p>
                    Time remaining: {time} seconds
                </p>
            </div>
        </>
    )
}