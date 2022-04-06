import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <>
            <nav className='bg-purple-800 text-white h-16'>


                <ul className="flex h-12 ">
                    <li className='mx-6 py-4 italic text-2xl text-red-300' >
                        <Link href="/">
                            <a>Random Images</a>
                        </Link>
                    </li>
                    <li className='mx-6 py-5' >
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className='mx-6 py-5' >
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li className='mx-6 py-5' >
                        <Link href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}
export default Navbar;
