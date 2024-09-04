import { useState } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [animating, setAnimating] = useState(false)

    const toggleMenu = () => {
        if (open) {
            setAnimating(true)
            setTimeout(() => {
                setOpen(false)
                setAnimating(false)
            }, 500)
        } else {
            setOpen(true)
        }
    }

    return (
        <nav className="flex relative py-4 px-6 bg-white items-center justify-between">
            {/* Desktop */}
            <div className="flex items-center">
                <div className="bg-[#65c0b1] mr-2 py-2 px-3 rounded-full">
                    <p className="font-bold text-lg text-white">𐤊P</p>
                </div>
                <p className="font-bold text-lg text-[#65c0b1]">KasPOOL</p>
            </div>
            <div className="text-sm hidden md:block">
                <ul className="flex space-x-8">
                    <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                        <a>Statistics</a>
                    </li>
                    <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                        <a>Our Specs</a>
                    </li>
                    <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                        <a>Nacho</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="flex items-center border border-[#65c0b1] py-2 px-3 rounded-full">
                    <img src="kas.png" alt="kas" className="h-8 w-8 mr-2" />
                    <p>KAS</p>
                </button>
            </div>

            {/* Mobile*/}
            <div className="md:hidden">
                <IoIosMenu className="w-8 h-8" onClick={toggleMenu} />
            </div>
            <div
                className={`${open ? (animating ? 'slide-up' : 'slide-down') : 'hidden'} bg-white absolute top-0 left-0 z-10 h-screen w-[100%] md:hidden`}
            >
                <div className="flex bg-[#65c0b1] py-4 px-6 items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-white mr-2 py-2 px-3 rounded-full">
                            <p className="font-bold text-lg text-[#65c0b1]">
                                𐤊P
                            </p>
                        </div>
                        <p className="font-bold text-lg text-white">KasPOOL</p>
                    </div>
                    <div className="md:hidden">
                        <IoMdClose
                            className="w-8 h-8 text-white"
                            onClick={toggleMenu}
                        />
                    </div>
                </div>
                <div className="px-6 py-10">
                    <ul className="space-y-10">
                        <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                            <a>Statistics</a>
                        </li>
                        <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                            <a>Our Specs</a>
                        </li>
                        <li className="hover:cursor-pointer hover:opacity-90 transition ease-in-out duration-200">
                            <a>Nacho</a>
                        </li>
                        <li>
                            <button className="rounded-lg bg-[#65c0b1] w-full py-2 text-white font-semibold">
                                Search
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
