// styles
import Image from 'next/image'
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {


  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Image src='/images/logo.svg' alt="logo" width={120}
          height={50} /> */}
        {/* <Image src="/images/logo.svg" width="110" height="31" alt="logo" /> */}
        <h1>Dota News</h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}