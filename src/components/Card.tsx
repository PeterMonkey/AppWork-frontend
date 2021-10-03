import React from 'react'
import '../styles/List.css'

type typeProps = {
    name: string,
    occupation: string
}

function Card({name, occupation}: typeProps) {
    return (
        
            <div className="card">
                <div className="image">

                </div>
                <div className="cont">
                    <h3>{name}</h3>

                    <h5>{occupation}</h5>

                </div>
            </div>
        
    )
}

export default Card
