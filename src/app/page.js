'use client'

import Image from 'next/image'
import {PrimaryButton, SecondaryButton} from "@/app/components/Buttons";
import {TeamPicture} from "@/app/components/TeamPicture";
import {gsap} from "gsap/dist/gsap";
import {useLayoutEffect, useRef, useState} from "react";
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import styles from './page.module.scss'
import {MaskSubtitle, MaskTextHeader, MaskTextHeaderTwo, MaskTextTitle} from "@/app/helpers/framer";
import {Header} from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {

    return (
        <main>
            <Header/>
            <section className={""}>
                <div className="container px-4 mx-auto">
                    <div className={styles.subtitle_text}>
                        <div className={"lg:hidden"}>
                            <MaskTextHeaderTwo/>
                        </div>
                        <div className={"hidden lg:block"}>
                            <MaskTextHeader/>
                        </div>
                    </div>

                    <div className={"relative lg:h-[500px]"}>
                        <div className={styles.backgroundImage}>
                            <Image className={"relative object-cover hidden md:block rounded-2xl"} layout='fill' src={"/group.png"}
                                   alt={"bg"}/>
                            <Image className={"relative object-cover lg:hidden sm:object-center object-[-400px]"} layout='fill' src={"/bg2.png"}
                                   alt={"bg"}/>
                            <div className={"lg:absolute hidden lg:block xl:-bottom-14 lg:-bottom-10 max-w-3xl"}>
                                <MaskTextTitle big/>
                            </div>
                        </div>

                    </div>
                    <div className={"lg:hidden mt-4"}>
                        <MaskTextTitle/>
                    </div>
                    <div className={"mt-4 flex-col md:justify-end lg:text-right text-left"}>
                        <div className={"hidden sm:block"}>
                            <MaskSubtitle big/>
                        </div>
                        <div className={"sm:hidden"}>
                            <MaskSubtitle/>
                        </div>

                        <div className={"mt-4 flex lg:justify-between lg:items-center -ml-[10px] lg:-ml-[0px] "}>
                            <div className={styles.header_bottom}>
                                <h1 className={"font-medium text-lg hidden lg:block"}>Scroll Down</h1>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                     stroke="currentColor" className="transform rotate-90 w-6 h-6 hidden lg:block">
                                    <path strokeLinecap="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                                </svg>
                            </div>
                            <div className={"flex space-x-4 lg:justify-end justify-start"}>
                                <PrimaryButton title={"Book a Session"}/>
                                <SecondaryButton action={"#about"} title={"Learn More"}/>
                            </div>

                        </div>
                    </div>


                </div>
            </section>
            <section id={"about"} className="pt-40 overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="relative text-center md:max-w-4xl mx-auto">
                        <h2 className="mb-8 text-xl sm:text-3xl text-black tracking-tight leading-normal"> If you&apos;re
                            passionate about improving your golf game and are seeking expert guidance, you&apos;ve come
                            to the right place
                            We understand that every golfer is unique, with individual strengths and areas for
                            improvement. Our instructors tailor lesson plans to meet your specific goals,
                            ensuring that you get the personalized guidance you need to succeed.

                        </h2>

                        <img className="absolute top-8 -left-20" src="/star.png" alt=""/>
                        <img className="absolute top-48 -right-20"
                             src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/images/abouts/star-light.svg"
                             alt=""/>
                    </div>
                </div>
            </section>
            <section id={"team"} className={"relative pt-40 overflow-hidden"}>
                <div className="container px-4 mx-auto">
                    <div className="mb-20 text-center">
                        <h1 className={"text-7xl font-bold "}>OUR TEAM</h1>
                    </div>
                </div>
                <div className="relative">
                    <div className="container px-4 mx-auto">
                        <div className="lg:flex justify-center space-x-10 flex-nowrap -m-14">
                            <TeamPicture name={"Zach Herrmann"} pos={"Founder"} src={"/zach.png"}/>
                            <TeamPicture name={"Nicole Connelly"} pos={"Varsity Girls Golf Coach"} src={"/member.jpeg"}/>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

