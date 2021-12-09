import React from 'react'

export const UserCards = ({user}) => {

    
  console.log(user.cards.map(card=>card.l1))

    return (
        <div>
           Here are your cards:
           <ol>
                {user.cards.map(card =>
                    <li>{card.l2}</li>
                )}    
           </ol> 
        </div>
    )
}
