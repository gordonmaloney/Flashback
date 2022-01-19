import React, {useState} from 'react'

const WORDS = [
    {
        l1: "tired",
        l2: "sgìth"
    },
    {
        l1: "big",
        l2: "mòr"
    },
    {
        l1: "small",
        l2: "beag"
    },
    {
        l1: "dog",
        l2: "cù"
    },
    {
        l1: "horse",
        l2: "each"
    },
    {
        l1: "house",
        l2: "taigh"
    },
]



export const Kangaroo = () => {

    const [enemyKang, setEnemyKang] = useState(0)
    const [playerKang, setPlayerKang] = useState(0)

    const [input, setInput] = useState()

    const [index, setIndex] = useState(0)




    const handleEnter = (e) => {
        if (e.key === "Enter") {
            
            if (input == WORDS[index].l2) {
                var newPos = playerKang + 50
                setPlayerKang(newPos)
                if (playerKang == 450) alert("You've won!")
            } else {
                var newPos = enemyKang + 50
                setEnemyKang(newPos)
                if (enemyKang == 450) alert("You've lost!")
            }         

            setInput("")
            index == WORDS.length - 1 ? setIndex(0) : setIndex(index+1)
        }        
    }


    return (
        <div>
            <div className="KangarooField" style={{width: "50%", backgroundColor: "lightblue"}}>
                <div style={{marginLeft: enemyKang}}>🦘</div>

                <div style={{marginLeft: playerKang}}>🦘</div>
            </div>

            <br /><br />

            {WORDS[index].l1}
            <br />
            <input placeholder="translate" value={input} onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => handleEnter(e)}/>

        </div>
    )
}
