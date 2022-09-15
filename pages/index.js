import Stack from '../components/Stack'
import styles from '../styles/Home.module.css'
import Layout from '../layouts/Layout'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import SideBar from '../components/SideBar'
import Graph from '../components/Graph'

function Home() {
  const [side, setSide] = useState(null)
  const [cart, setCart] = useState([])

  return (
    <Layout title='Mlops App'>
      <section className={styles.section}>
        <h1 className={styles.h1}> Build your open-source MLOps stack </h1>
        <p className={styles.para}>Explore tools and components of the MLOps stack. Select any tool to find more about it. Add it to build your own stack.</p>
        <Stack side={side}
          cart={cart}
          setCart={setCart}
          setSide={setSide}
        />
      </section>
      <SideBar
        side={side}
        setSide={setSide}
        cart={cart}
        setCart={setCart}
      />
      <Graph
        cart={cart}
        setCart ={setCart}
      />
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })
