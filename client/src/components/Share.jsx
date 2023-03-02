import React from 'react'
import { RWebShare } from "react-web-share";

export default function WebShareShare(props) {
    const {id, firstName} = props
    return (
        <div>
            <RWebShare
                data={{
                    text: "Web Share - Share",
                    url: `http://localhost:3000/favorites/${id}/${firstName}`,
                    title: "Share",
                }}
                onClick={() => console.log("shared successfully!")}
            >
                <button className='btn btn-outline-success'>Share Favorites</button>
            </RWebShare>
            {/* <h3 style= {{color: "brown"}}> WhatsApp sharing Link </h3> 
            <a href="whatsapp://send?text=This is WhatsApp sharing example using link" data-action="share/whatsapp/share"
                target="_blank"> Share to WhatsApp </a> 
            <button className='btn btn-outline-success'>Share Favorites!</button> */}
        </div>
    )
}

