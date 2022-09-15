import Head from 'next/head'
import styles from './layout.module.css'
import Image from 'next/dist/client/image'

const Layout = ({ children, title }) => {
    return (
        <div >
            <Head>
                <title>{title ? title : 'Mlops App'}</title>
                <meta name="description" content="Build your open-source MLOps stack" />
            </Head>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.btnDiv}>
                        <Image src='/images/log.jpeg' width={50} height={35} alt='icon' />
                        <button className={styles.head1}>MyMLOps</button></li>
                </ul>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout