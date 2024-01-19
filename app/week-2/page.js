/*
 * Lab2
 * Name: Winko Peng
 * Date: Jan 19, 2024
 */

import StudentInfo from "./student-info";

export default function Page(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <h1>Shopping List</h1>
        <StudentInfo />
      </main>
    );
};