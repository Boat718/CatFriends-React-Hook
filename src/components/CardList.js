import React from 'react'
import Card from './Card'

const CardList = ({robots})=>{
    const cardArr = robots.map((e)=>{

        return <Card key = {e.id} name = {e.name} email = {e.email} website ={e.website} />
    }) 
    return(
        <div>
            {cardArr}
        </div>
    )
}

export default CardList;