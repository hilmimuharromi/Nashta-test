import React from 'react'
import CardEvent from '../components/CardEvent'

export default function Home ({events}) {
    return (
        <div className="container">
            <div div className = "events-layout" >
            <CardEvent events={events} />
            </div>
        </div>
    )
}