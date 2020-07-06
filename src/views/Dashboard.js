import React from 'react'
import CardEvent from '../components/CardEvent'


export default function Home ({events}) {
    return (
        <div className="container">
            <h2>ALL EVENTS</h2>
            <div className="events-layout">
                <CardEvent events={events} />
            </div>
        </div>
    )
}