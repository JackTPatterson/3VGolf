import Image from "next/image";

export default function Footer(){
    return (
        <section className="pt-40 pb-10 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="sm:flex flex-wrap items-center justify-between -m-8">
                    <div className="w-auto p-8">
                        <a className="relative z-10 flex space-x-4 items-center" href="/">
                            <Image height={75} width={75} src="/logo.jpeg" className={"bg-blend-darken"} alt=""/>
                            <h1 className={"mr-12 text-black font-semibold hover:text-opacity-90 tracking-tighter"}>Three
                                Village Youth Golf</h1>
                        </a>
                    </div>

                    <div className="w-auto p-8">
                        <ul className="sm:flex space-y-4 sm:space-y-0 sm:pl-6 md:pl-0 pl-0 flex-wrap items-center sm:-m-5 md:-m-0">
                            <li className="mr-12 text-gray-300 font-medium hover:text-opacity-90 tracking-tighter">
                                <a
                                    href="/#home">Home</a></li>
                            <li className="mr-12 text-gray-300 font-medium hover:text-opacity-90 tracking-tighter">
                                <a
                                    href="/#team">Our Team</a></li>
                            <li className="mr-12 text-gray-300 font-medium hover:text-opacity-90 tracking-tighter">
                                <a
                                    href="/#about">About Us</a></li>

                            <li className="mr-12 text-gray-300 font-medium hover:text-opacity-90 tracking-tighter">
                                <a
                                    href="#">Contact</a></li>
                            <li className="mr-12 text-gray-300 font-medium hover:text-opacity-90 tracking-tighter">
                                <a
                                    href="#">Book a Session</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}
