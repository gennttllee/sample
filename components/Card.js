import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons"
import Image from "next/dist/client/image"
import styles from './card.module.css'
import { useRef, useCallback } from "react"
import dynamic from 'next/dynamic'

const Card = ({ back, h1, data, setBack, note, setSide, cart, setCart }) => {
    const divRef = useRef()

    const backGround = (e, h1) => {
        if (back.div.includes(h1)) {
            let items = back.div.filter(item => item !== h1)
            setBack({ ...back, element: h1, div: items })
        } else {
            let items = [...back.div]
            items.push(h1)
            setBack({ ...back, element: h1, div: items })
        }
    }


    const loadFile = (element, h1) => {
        setSide({ ...element, title: h1 })
    }

    const remove = (item, h1) => {
        let temp = [];
        for (const tags of cart) {
            if (tags.name === item.name && tags.title === h1) {
                console.log(tags.name)
            } else {
                temp.push(tags)
            }
        }
        setCart(temp)
    }

    const finder = useCallback((element, h1) => {
        const demo = cart.find(item => item.name === element.name && item.title === h1)
        if (demo) return true;
        else return false
    }, [cart])


    return (
        <div className={back.element === h1 ? styles.container : styles.container1} >
            <div className={styles.h2}>
                <h3 onClick={(e) => backGround(e, h1)} className={styles.pain}><FontAwesomeIcon className={styles.iconic} icon={back.div.includes(h1) ? faAngleDown : faAngleRight} /> <span className={styles.spanH}>{h1}</span></h3>
                <div ref={divRef}  className={styles.closed}>
                    {cart.map((item, index) => item.title === h1 && <button className={styles.btn} onClick={() => remove(item, h1)} key={index}>
                        {item.image && <Image src={item.image} width={25} height={20} alt={item.name}
                        />}
                        <span>{item.name}</span>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>)}
                </div>
            </div>
            {back.div.includes(h1) && <div className={styles.backDiv}>
                <p className={styles.note}>{note}</p>
                <p className={styles.int}>Integrations available for your stack</p>
                <div className={styles.buttonDiv}>
                    {data.map((element, input) => <button onClick={() => loadFile(element, h1)} className={finder(element, h1) ? styles.man : styles.btn} key={input}>
                        {element.image && <Image src={element.image} width={25} height={20} alt={element.name}
                        />}
                        <span>{element.name}</span>
                    </button>)}
                </div>
            </div>}
        </div>
    )
}

export default dynamic(() => Promise.resolve(Card), { ssr: false })