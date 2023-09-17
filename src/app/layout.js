import './globals.css'
import {Inter, Poppins} from 'next/font/google'
import {AuthContextProvider} from "@/app/context/auth_context";


const inter = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
    icons: {
        icon: '../favicon.ico'
    },
    title: '3VGolf',
    description: '',

}

export default async function RootLayout({ children }) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
        </body>
        </html>
    )
}
