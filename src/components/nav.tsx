import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <div>
      <Link href="/">home</Link>-<Link href="/page1">page1</Link>-
      <Link href="/page2">page2</Link>
    </div>
  );
}
