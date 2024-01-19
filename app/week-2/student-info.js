/*
 * Lab2
 * Name: Winko Peng
 * Date: Jan 19, 2024
 */

import Link from "next/link"

export default function StudentInfo(){
    return(<div className="flex min-h-screen flex-col items-center">
        <p>Winko Peng</p>
        <p><Link href={"https://github.com/WinkoPeng"} className="hover:text-green-400 underline">https://github.com/WinkoPeng</Link></p>
    </div>)
}