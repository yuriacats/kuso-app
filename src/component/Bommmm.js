import React from "react";
import nico from '../niconico.jpeg'
import bakuhatu from '../bakuhatu.mp3'

const audioPlay = () => {
    const audio = new Audio(bakuhatu)
    audio.play().then(() => {
        console.log("Audio started!")
        next();
    })
        .catch(error => console.warn(error))
}
const next = () =>{
    setTimeout(() => {
        window.location.reload();
    }, 2 * 1000);
}
const Bommmm = () => (<>
        <img src={nico} alt = 'NiconicoCompany'/>
        <button className="btn" onClick={() => { audioPlay(); }}> 起爆！！！！！ </button>
        <button className="btn" onClick={() => { next(); }}> 起爆しない </button>

    </>
)

export default Bommmm;