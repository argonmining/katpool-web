import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import Miner from './layouts/Miner'
import Dashboard from './pages/Dashboard'
import Earnings from './pages/Earnings'
import Rewards from './pages/Rewards'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/miner/:address" element={<Miner />}>
                    <Route
                        path="/miner/:address/dashboard"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/miner/:address/earnings"
                        element={<Earnings />}
                    />
                    <Route
                        path="/miner/:address/rewards"
                        element={<Rewards />}
                    />
                </Route>
            </Routes>
        </div>
    )
}

export default App
