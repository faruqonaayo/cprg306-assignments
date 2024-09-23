import RootLayout from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week 2 Assignment</Link>
      <Link href="/week-3">Week 3 Assignment</Link>
    </div>
  );
}
