import React, {useState} from 'react'
import { useHistory } from "react-router-dom"


//MARKED FOR DELETION


export const UserLogin = () => {
    const history = useHistory()
    const [code, setCode] = useState()

    return (
        <div>
            You need to log-in.
            <br />
            <input onChange={(e) => setCode(e.target.value)} />
            <br />
            <button onClick={() => {history.push(`/user/${code}`)}}>Submit</button>

        </div>
    )
}
