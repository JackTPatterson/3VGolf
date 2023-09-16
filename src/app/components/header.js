import Image from "next/image";
import {Button, PrimaryButton} from "@/app/components/Buttons";
import {useState} from "react";
import {useRouter} from "next/navigation";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    return (
        <section>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-5">
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center space-x-4">
                            <div className="w-auto">
                                <a className="relative z-10 flex space-x-4 items-center" href="/">
                                    <Image height={75} width={75} src="/logo.jpeg" className={"bg-blend-darken"} alt=""/>
                                    <h1 className={"mr-12 text-black font-semibold hover:text-opacity-90 tracking-tighter"}>Three Village Youth Golf</h1>
                                </a>
                            </div>


                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto hidden lg:block p-2">
                                <ul className="flex items-center">
                                    <li className="mr-12 text-black font-medium hover:text-opacity-90 tracking-tighter"><a
                                        href="/#home">Home</a></li>
                                    <li className="mr-12 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="/#about">About
                                        us</a></li>
                                    <li className="mr-12 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="/#team">Our Team</a></li>
                                    <li className="mr-12 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <PrimaryButton head title={"Book a Session"}/>
                            <div className="w-auto lg:hidden p-2">
                                <a className="relative z-10 inline-block" onClick={()=>setIsOpen(true)}>
                                    <svg className="navbar-burger text-primary" width="51" height="51" viewBox="0 0 56 56" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                        <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={!isOpen ? "hidden navbar-menu fixed top-0 right-0 bottom-0 w-4/6 sm:max-w-xs z-50" : "navbar-menu fixed top-0 right-0 bottom-0 w-4/6 sm:max-w-xs z-50" }>
                <div className="navbar-backdrop fixed inset-0 bg-white opacity-80"></div>
                <nav className="relative z-10 px-9 pt-8 h-full bg-white overflow-y-auto">
                    <div className="justify-between h-full">
                        <div className="w-full">
                            <div className="flex items-center justify-between -m-2">

                                <div className="w-auto p-2 mb-10">
                                    <a className="inline-block" href="#">
                                        <Image height={75} width={75} src="/logo.jpeg" className={"bg-blend-darken"} alt=""/>
                                    </a>
                                </div>
                                <div className="w-auto p-2">
                                    <a onClick={()=>setIsOpen(false)} className="navbar-burger inline-block text-black" href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start pt-4 w-full">
                            <ul>
                                <li className="mb-8 text-black font-medium hover:text-opacity-90 tracking-tighter"><a
                                    href="/#home">Home</a></li>
                                <li className="mb-8 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="/#about">About
                                    us</a></li>
                                <li className="mb-8 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="/#team">Our Team</a></li>
                                <li className="mb-8 text-black font-medium hover:text-opacity-90 tracking-tighter"><a href="#">Contact Us</a></li>

                            </ul>
                        </div>
                        <Button action={()=>{
                            router.push("/booking")
                        }} title={"Book a Session"}/>
                    </div>
                </nav>
            </div>
        </section>
    )
}
