import React, {useState, useEffect} from 'react'
import { RWebShare } from "react-web-share";

export default function WebShareShare(props) {
    const [id, setId] = useState('')
    const [firstName, setFirstName] = useState('')

    useEffect(() => {
        const id = localStorage.getItem('userId');
        const firstName = localStorage.getItem('firstName');
        setId(JSON.parse(id));
        setFirstName(JSON.parse(firstName));
    }, [])

    return (
        <div>
            <RWebShare
                data={{
                    text: "Web Share - Share",
                    url: `http://localhost:3000/favorites`,
                    title: "Share",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button className='btn btn-success'>Share Favorites</button>
            </RWebShare>
            {/* <h3 style= {{color: "brown"}}> WhatsApp sharing Link </h3> 
            <a href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share"
                target="_blank"> Share to WhatsApp </a> 
            <button className='btn btn-outline-success'>Share Favorites!</button> */}
        </div>
    )
}

