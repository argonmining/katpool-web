import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io'

interface MobileNavProps {
    toogleSidebar: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({ toogleSidebar }) => {
    return (
        <div className="md:hidden h-[60px] bg-white">
            <div className="flex items-center justify-between py-2 px-4">
                <div
                    className="items-center justify-center rounded-md p-2 bg-[#77c2b6] flex"
                    onClick={toogleSidebar}
                >
                    <IoIosMenu className="w-8 h-8 text-white" />
                </div>
                <form className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search by KAS wallet address"
                        className="border-gray-400 outline-none p-2 bg-gray-200 rounded-s-md"
                    />
                    <button className="bg-[#77c2b6] p-2 rounded-e-md flex items-center justify-center">
                        <AiOutlineSearch className="mr-1 h-6 w-6" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MobileNav
