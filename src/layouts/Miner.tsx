import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Miner = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Miner
