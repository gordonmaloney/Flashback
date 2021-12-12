import React from 'react'
import { FBCard } from '../SubComponents/FBCard'

import { useHistory } from 'react-router-dom'

export const UserIntro = ({user}) => {
  const history = useHistory();

    return (
        <center>
          <FBCard
            title={`Hi, ${user.name}!`}
            buttons={[{ text: "Study", submit: () => history.push('../study') }]}
            body={
              <>
              <div style={{textAlign: "left", paddingRight: "20px", paddingLeft: "20px"}}>
                <p>
                  You have {user.cards.filter(card => card.date <= new Date().valueOf()).length} cards due
                  today, out of {user.cards.length} total.
                </p>
                <p>Your current streak is {user.streak}</p>
                </div>
              </>
            }
          />

          </center>
    )
}
