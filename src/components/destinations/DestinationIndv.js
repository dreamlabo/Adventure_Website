import React from 'react'
import MountainBiker from '../../images/mountainBike.jpg'

const DestinationIndv = (props) => {
    return(
        <div>
            <h3>
                {props.activity}
            </h3>
            <img src={MountainBiker} alt="mountain biker" style={{maxWidth: '175px', maxHeight: 'auto'}}/>
            <p>Here we will talk about what the activity is</p>

        </div>
    )
}

export default DestinationIndv;
