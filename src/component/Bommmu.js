import React from "react";
import house from '../building_house1.png'

import bakuhatu from '../bakuhatu.mp3'

const audioPlay = () => {
    const audio = new Audio(bakuhatu)
    audio.play().then(() => {
        console.log("Audio started!")
        next();
    })
        .catch(error => console.warn(error))
}
const next = () => {
    setTimeout(() => {
        window.location.reload();
    }, 2 * 1000);
}
const Bommmu = () => (<>
        <img src={house} alt = 'house'/>
        <button className="btn" onClick={() => { audioPlay(); }}>   起爆！！！！！ </button>
        <button className="btn" onClick={() => { next(); }}>   起爆しない！！ </button>

    </>
)

export default Bommmu;