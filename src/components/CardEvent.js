import React from 'react';
import { Card } from 'react-bulma-components';

export default function CardImage({events}) {
    return ( 
                <>
                 {events.map((event) => (
                        <Card key={event.id} className="card">
                            <div className="card-image">
                                < figure className = "image is-3by2" >
                                    <img className="image-content" src={event.imageUrl} alt=""></img>
                                </figure>
                            </div>
                            <div className="card-content">
                             <p class="subtitle is-6">{event.location}</p>
                             <p class="subtitle is-6">{event.date}</p>
                            <p class="title is-4">{event.title}</p>
                            <br/>
                            <p class="subtitle is-6">{event.participant}</p>
                            <p class="subtitle is-6">{event.note}</p>
                            </div>
                        </Card>
                    ))}
                </>
    )
}