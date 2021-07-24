import React from 'react'
import Activity from "./Activity";
import './activities_styles.css'
import TrailRunner from '../../images/trail_running.jpg'
import MountainBiker from '../../images/MountainBike.jpg'
import Skier from '../../images/Skier.jpg'

const Activities = () => {
    return(
        <div className="activities-main-container ">
            <h2 className="activities-header">
                Activities
            </h2>

            <div className="activities-container">
                <Activity activity="Trail Running"
                          description={"Unlike road and track running, trail running generally takes place on hiking trails, often in mountainous terrain, where there can be much larger ascents and descents. It is difficult to definitively distinguish between trail running and cross country running"}
                          image={TrailRunner}
                />

                <Activity activity="Mountain Biking"
                          description={"Mountain biking is a sport of riding bicycles off-road, often over rough terrain, using specially designed bikes. Mountain bikes share similarities with other bikes but incorporate features designed to enhance durability and performance in rough terrain. "}
                          image={MountainBiker}
                />

                <Activity activity="Skiing"
                          description={"Skiing is a means of transport using skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive winter sport. Many types of competitive skiing events are recognized by the International Ski Federation"}
                          image={Skier}
                />
            </div>
        </div>
    )
}

export default Activities;