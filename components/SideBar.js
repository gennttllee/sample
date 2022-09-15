import styles from './sidebar.module.css'
import Image from 'next/dist/client/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faBookOpen, faTriangleExclamation, faLeftRight, faTrowelBricks, faPlus, faGear } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faCopy } from '@fortawesome/free-regular-svg-icons'
import { useSnackbar } from 'notistack';
import dynamic from 'next/dynamic';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {  useState } from 'react';




const SideBar = ({ side, setSide, cart, setCart }) => {
    const [anime, setAnime] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const navigation = async (data) => {
        try {
            await navigator.clipboard.writeText(data)
            enqueueSnackbar('copied to clipboard', { variant: 'info' })
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    };

    const addStack = (data) => {
        let temp = [...cart]
        temp.push(data)
        setCart(temp)
        setSide(null)
    }

    const touchBar = () => {
        setAnime(true)
        setTimeout(() => {
            setSide(null)
            setAnime(false)
        }, 700);
    }


    return (
        <>
            {side ? <div className={anime ? styles.mySide : styles.side}>
                <div onClick={touchBar} className={styles.swipe}>
                    <FontAwesomeIcon icon={faLeftRight} />
                    <p className={styles.touch}>Touch to close</p>
                </div>
                <div className={styles.divContainer}>
                    <div className={styles.child}>
                        {side.image && <Image src={side.image} width={20} height={25} alt={side.name} />}
                        <h2 className={styles.h2}>{side.name}</h2>
                    </div>
                    <div className={styles.link}>
                        {side.internet && <a className={styles.link} target='blank' href={side.internet}>
                            <FontAwesomeIcon icon={faGlobe} /> </a>}
                        {side.github && <a className={styles.link} target='blank' href={side.github}>
                            <FontAwesomeIcon icon={faGithub} />  </a>}
                        {side.docs && <a className={styles.link} target='blank' href={side.docs}>
                            <FontAwesomeIcon icon={faBookOpen} /> </a>}
                    </div>
                </div>
                <div className={styles.tags}>
                    {side.tags.map((tag, index) => <button className={styles.btnTag} key={index}> {tag}</button>)}
                </div>
                <button onClick={() => addStack(side)} className={styles.stack}>
                    <FontAwesomeIcon icon={faPlus} />
                    Add to stack</button>
                <p className={styles.note}>{side.note}</p>
                {side.list && <>
                    <h3> <FontAwesomeIcon className={styles.single} icon={faThumbsUp} /> Use it when </h3>
                    <ul className={styles.ul}>
                        {side.list.map((item, index) => <li className={styles.list} key={index}>
                            {item}
                        </li>)}
                    </ul>
                </>}
                {side.watch && <>
                    <h3><FontAwesomeIcon className={styles.triangle} icon={faTriangleExclamation} />Watch out</h3>
                    <ul className={styles.ul}>
                        {side.watch.map((item, index) => <li className={styles.list} key={index}>
                            {item}
                        </li>)}
                    </ul>
                </>}
                {side.integratedIcons && <>
                    <h3><FontAwesomeIcon className={styles.single} icon={faTrowelBricks} />Integrated with</h3>
                    <p className={styles.infoHover}>Touch or hover for more information</p>
                    <div className={styles.btnDiv}>
                        {side.integratedIcons.map((item, index) => <button className={styles.singleBtn} key={index}>
                            {item.image && <Image src={item.image} width={25} height={20} alt={item.name} />}
                            <span>{item.name}</span>
                        </button>)}
                    </div>
                </>}
                {side.install && <div>
                    <h3><FontAwesomeIcon className={styles.single} icon={faGear} />Installation</h3>
                    <div className={styles.d4}>
                        <FontAwesomeIcon onClick={() => navigation(side.install)} className={styles.installIcon} icon={faCopy} />
                        <SyntaxHighlighter language="shell" style={atomDark}>
                            {side.install}
                        </SyntaxHighlighter>
                    </div>
                </div>}
            </div> : <p className={styles.select}>Select any tool to see more</p>}
        </>
    )
}

export default dynamic(() => Promise.resolve(SideBar), { ssr: false })