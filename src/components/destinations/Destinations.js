import React from 'react'
import DestinationIndv from "./DestinationIndv";

const Destinations = () => {
    return(
        <div>
            <h2>
                Destinations
            </h2>
            <DestinationIndv activity="Trail Running"/>
            <DestinationIndv activity="Mountain Biking"/>
            <DestinationIndv activity="Winter Sports"/>
        </div>
    )
}

export default Destinations;