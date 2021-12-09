import React, {useState} from 'react'
import { AdminHome } from './AdminHome'

export const AdminLogin = () => {
    const [code, setCode] = useState()

    if (code != "admin") {
    return (
        <div>
            <h3>Enter admin password here:</h3>
            <input onChange={(e) => setCode(e.target.value)} />
        </div>
    )
    } else if (code == "admin") {
        return (
            <>
            You're in!

            <AdminHome />
            </>
        )
    }
}
