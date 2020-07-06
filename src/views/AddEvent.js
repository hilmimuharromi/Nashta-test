import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../stores/actions';
import { store } from 'react-notifications-component';


export default function AddEvent({events}) {
    const id = events.length +1
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [participant, setParticipant] = useState('')
    const [date, setDate] = useState(null)
    const [note, setNote] = useState('')
    const [imageUrl, setImage] = useState('')

    const displayNotification = (message) => {
        store.addNotification({
            title: "Error Input",
            message: message,
            type: "danger",
            insert: "bottom",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000
            }
        });
    };

    function submitEvent(e){
        e.preventDefault()
        if(!title) {
            displayNotification('Title cannot be empty')
        } else if (!location) {
            displayNotification('Location cannot be empty')
        } else if (!participant) {
            displayNotification('Participant cannot be empty')
        } else if (!date) {
            displayNotification('Date cannot be empty')
        } else if (!note) {
            displayNotification('Note cannot be empty')
        } else if (note.length < 50){
            displayNotification('Note must more than 50 characters')
        } else if (!imageUrl) {
            displayNotification('Image cannot be empty')
        } else {
            let payload= {
                id, title, location, participant, date, note, imageUrl: 'https://i.imgur.com/qJBbQrC.png'
            }
            dispatch(allActions.addEvent(payload))
             setTitle('')
            setLocation('')
            setParticipant('')
            setDate(null)
            setNote('')
            setImage('')
        }
    }

    const status = useSelector((state) => state.addEvent.status)


  if (status === 'done'){
      console.log('berhasil');
      store.addNotification({
            title: "Success",
            message: 'Success Add Event',
            type: "success",
            insert: "bottom",
            container: "top-center",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 2000
            }
        });
  }

  return (
    <div className="container">
        <div className="layout-add-event">
            <div className="left-content">
                <form onSubmit={(event) => submitEvent(event)}>
                    <div className="flex">
                        <div className="field">
                            <div className="control">
                                <input className="input is-primary" type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
                            </div>
                        </div>
                        <div className = "field">
                            <div className="control">
                                <input className="input is-primary" type="text" placeholder="Location" onChange={(e) => {setLocation(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className = "field" >
                            <div className="control">
                                <input className="input is-primary" type="text" placeholder="Participant" onChange={(e) => {setParticipant(e.target.value)}} />
                            </div>
                        </div>
                        <div className = "field" >
                            <div className="control">
                                <input className="input is-primary" type="date" placeholder="Date" onChange={(e) => {setDate(e.target.value)}} />
                            </div>
                        </div>
                    </div>
                    <div className = "field" >
                            <div className="control">
                                <input className="input is-primary" type="text" placeholder="Note" onChange={(e) => {setNote(e.target.value)}} />
                            </div>
                    </div>
                    <div className = "field" >
                        <input className="input is-primary" type="file" placeholder="Image" onChange={(e) => {setImage(e.target.value)}} />
                    </div>
                    <div className = "field" >
                        <button className="button is-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div className="right-content">
                <img src="https://i.imgur.com/ndH5bqH.png" alt="Event"></img>
                </div>
        </div>
    </div>
    
  )
}
