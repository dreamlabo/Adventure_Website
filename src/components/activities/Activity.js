import React from 'react'

import './activity_styles.css'



const Activity = (props) => {
    return(
        <div className="activity-container">
            <h3 className="activity-header">
                {props.activity}
            </h3>
            <img src={props.image} alt="activity" style={{width: '260px', height: '195px'}}/>
            <div className="description-container">
                <p className="activity-description">{props.description}</p>
            </div>
            <button className="button-activity">More Info</button>
        </div>
    )
}

export default Activity;
