'use client'

import {useInView} from "react-intersection-observer";
import styles from "@/app/page.module.scss";
import {motion} from "framer-motion";

export function MaskTextHeader() {



       const phrases = [
            "DEVELOP", "YOUR", "PERFECT", "GAME"
        ]


    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 1.5, ease: [0.22, 1, 0.36, 1],  delay: 0.125 * i + .3}})
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true,
    });

    return(
        <div className={"flex lg:space-x-4 space-x-2"} ref={ref}>
            {
                phrases.map( (phrase, index) => {
                    return <div key={index} className={styles.lineMask}>
                        <motion.p className={"2xl:text-[101px] xl:text-[83.3px] lg:text-[65.5px] md:text-[48px] sm:text-[39px] text-[25px] -z-40 font-bold"} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
                    </div>
                })
            }
        </div>
    )
}

export function MaskTextHeaderTwo() {

    const phrases = [
        "DEVELOP YOUR", "PERFECT GAME"
    ]


    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 1.5, ease: [0.22, 1, 0.36, 1],  delay: 0.075 * i}})
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return(
        <div ref={ref}>
            {
                phrases.map( (phrase, index) => {
                    return <div key={index} className={styles.lineMask}>
                        <motion.p className={"xl:text-7xl lg:text-[55px] text-4xl font-bold leading-tight"} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
                    </div>
                })
            }
        </div>
    )
}


export function MaskSubtitle(props) {

    let phrases = [];

    if(props.big){
        phrases = [
            "In nulla id fugiat anim culpa incididunt elit anim nisi amet",
            "commodo deserunt In nulla id fugiat anim culpa"
        ]
    }
    else{
        phrases = [
            "In nulla id fugiat anim culpa incididunt elit anim nisi amet commodo deserunt In nulla id fugiat anim culpa"
        ]
    }



    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 1.5, ease: [0.22, 1, 0.36, 1],  delay: 0.075 * i}})
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true,
    });

    return(
        <div ref={ref}>
            {
                phrases.map( (phrase, index) => {
                    return <div key={index} className={styles.lineMask}>
                        <motion.p className={"font-medium"} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
                    </div>
                })
            }
        </div>
    )
}

export function MaskTextTitle(props) {

    let phrases = [];

    if(props.big){
        phrases = [
            "THREE VILLAGE", "YOUTH GOLF"
        ]
    }
    else{
        phrases = [
            "THREE VILLAGE YOUTH GOLF"
        ]
    }




    const animation = {
        initial: {y: "100%"},
        enter: i => ({y: "0", transition: {duration: 1.5, ease: [0.22, 1, 0.36, 1],  delay: 0.075 * i}})
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return(
        <div ref={ref}>
            {
                phrases.map( (phrase, index) => {
                    return <div key={index} className={styles.lineMask}>
                        <motion.p className={"xl:text-7xl lg:text-[55px] text-4xl font-bold leading-tight"} custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
                    </div>
                })
            }
        </div>
    )
}


