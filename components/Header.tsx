import Link from "next/link"

const Header = () => {
  return (
    <header className="container header">
        <Link href="/" style={{fontSize: "30px"}}>Home</Link>
        <Link href="/about" style={{fontSize: "30px"}}>About</Link>
        <Link href="/blog" style={{fontSize: "30px"}}>blog</Link>
    </header>
  )
}

export default Header