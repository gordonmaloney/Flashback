import React, {useState} from 'react'
import { useHistory } from "react-router-dom"

export const AdminLink = () => {
    const history = useHistory()
    const [code, setCode] = useState()

    return (
        <div>
            <button onClick={() => history.push('/admin')}>Log in as admin</button>
        </div>
    )
}
