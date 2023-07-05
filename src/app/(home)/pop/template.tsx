import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
    return <div><ul>
    <li><Link href={'/pop'}> home </Link>
 
  </li>
    <li> <Link href={'/pop/page1'}> page1 </Link></li>
    <li><Link href={'/pop/page2'}> page2 </Link> </li>
  </ul>我是pop页面控制的内容：{children}</div>
  }