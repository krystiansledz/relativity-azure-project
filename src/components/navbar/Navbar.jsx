import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";
import ErrorButton from "@/components/errors/ErrorButton";

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <ErrorButton/>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar