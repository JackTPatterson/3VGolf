import styles from './components.module.scss'
import Link from "next/link";

export const  PrimaryButton = (props) => {

    return !props.head ?
        <div className={styles.header_bottom_pri}>
            <div className="w-auto transition bg-transparent duration-300 hover:-translate-y-0.5">
                <div className="inline-block">
                    <Link
                        className="inline-block px-8 py-3 text-white tracking-tighter bg-primary hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                        href="booking">{props.title}
                    </Link>
                </div>
            </div>
        </div>
        :
        <div className="w-auto hidden lg:block transition duration-300 hover:-translate-y-0.5">
            <div className="inline-block ">
                <Link
                    className="inline-block px-8 py-3 text-white tracking-tighter bg-primary hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="booking">{props.title}
                </Link>
            </div>
        </div>


}

export const ModifyButton = (props) => {
    return (
                <div className="inline-block">
                    {!props.disabled ?
                    <a
                        className={props.modify ? "cursor-pointer text-black hover:text-white px-8 py-3 items-center tracking-tighter bg-transparent hover:bg-black border-2 border-black focus:border-opacity-40 hover:border-black focus:ring-4 focus:ring-black focus:ring-opacity-40 rounded-full transition duration-300" : "cursor-pointer text-red-500 hover:text-white px-8 py-3 items-center tracking-tighter bg-transparent hover:bg-red-700 border-2 border-red-500 focus:border-opacity-40 hover:border-red-700 focus:ring-4 focus:ring-red-700 focus:ring-opacity-40 rounded-full transition duration-300"}
                        onClick={props.action}>{props.title}
                    </a> : <div
                            className={props.modify ? "text-gray-400 px-8 py-3 items-center tracking-tighter bg-gray-100 border-2 border-gray-100 focus:border-opacity-40 rounded-full transition duration-300" : "cursor-pointer text-red-500 hover:text-white px-8 py-3 items-center tracking-tighter bg-transparent hover:bg-red-700 border-2 border-red-500 focus:border-opacity-40 hover:border-red-700 focus:ring-4 focus:ring-red-700 focus:ring-opacity-40 rounded-full transition duration-300"}
                            >{props.title}
                        </div> }
                </div>
    )
}

export const Button = (props) => {
    return (
        <div className="w-full">
            <div className="inline-block w-full">
                <a
                    className="cursor-pointer w-full text-center inline-block px-8 py-3 text-white tracking-tighter bg-primary hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    onClick={props.action}>{props.title}
                </a>
            </div>
        </div>
    )
}

export const RedirectButton = (props) => {
    return (
        <div className="">
            <div className="">
                <a
                    className={"cursor-pointer text-black hover:text-white px-8 py-3 items-center tracking-tighter bg-transparent hover:bg-black border-2 border-black focus:border-opacity-40 hover:border-black focus:ring-4 focus:ring-black focus:ring-opacity-40 rounded-full transition duration-300"}
                    href={props.action}>{props.title}
                </a>
            </div>
        </div>
    )
}

export const DisabledButton = (props) => {
    return (
        <div className="">
            <div className="inline-block">
                <div
                    className={"text-gray-100 border-2 border-gray-300 px-8 py-3 items-center tracking-tighter bg-gray-300 rounded-full transition duration-300"}
                    >{props.title}
                </div>
            </div>
        </div>
    )
}

export const IconButton = (props) => {
    return (
        <div className="">
            <div className="">



                <a
                    className={props.delete ? "cursor-pointer flex justify-center text-red-500 items-center w-12 h-12 text-center hover:text-white tracking-tighter bg-transparent hover:bg-red-500 border-2 border-red-500 focus:border-opacity-40 focus:ring-4 focus:ring-opacity-40 rounded-full transition duration-300" : "cursor-pointer flex justify-center items-center w-12 h-12 text-center text-black tracking-tighter bg-transparent hover:bg-black hover:text-white  border-2 border-black  focus:border-opacity-40  focus:ring-4 focus:ring-opacity-40 rounded-full transition duration-300"}
                    onClick={props.action}>
                    {props.svg}

                </a>

            </div>
        </div>
    )
}



export const SecondaryButton = (props) => {
    return (
        <div className={styles.header_bottom_sec}>
        <div className="w-auto transition duration-300 hover:-translate-y-0.5">
            <div className="inline-block">
                <a
                    className=" inline-block px-8 py-3 text-primary hover:text-white tracking-tighter bg-transparent hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    href={props.action}>{props.title}
                </a>
            </div>
        </div>
        </div>
    )
}

export const Secondary = (props) => {
    return (


                    <a
                        className="cursor-pointer text-center px-8 py-3 text-primary hover:text-white tracking-tighter bg-transparent hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                        onClick={props.action}>{props.title}
                    </a>
    )
}
