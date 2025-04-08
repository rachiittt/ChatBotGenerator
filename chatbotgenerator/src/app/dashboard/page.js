"use client"
import { AuthContext } from '@/context/auth'
import React,{useContext} from 'react'


const Dashboard = () => {
    const globalData = useContext(AuthContext)
    const isloggin = globalData.isloggin

    if(!isloggin){
        return<>Please Login first </>
    }
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;
