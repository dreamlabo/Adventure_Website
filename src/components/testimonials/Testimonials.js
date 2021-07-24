import React from 'react';
import TestimonialsIndv from "./TestimonialsIndv";
import './testimonials_styles.css'
import MapAndCompass from '../../images/map_and_compass.jpg'
import Reviewer1 from '../../images/Review1.jpg'
import Reviewer2 from '../../images/Review2.jpg'
import Reviewer3 from '../../images/Review3.jpg'

const Testimonials = () => {
    return (
        <section className="testimonials-main-container">
            <h2 className="testimonials-header" >What Other Adventurers Are Saying</h2>
            <div className="testimonials-container">

               <div className="testimonials-left-side">
                   <img className='testimonials-image' src={MapAndCompass}/>
               </div>

               <div className="testimonials-right-side">
                   <div className="testimonial test-one">
                    <TestimonialsIndv  reviewer="Jennifer Batten"
                                        reviewerImage={Reviewer1}/>
                   </div>
                   <div className="testimonial test-two">
                    <TestimonialsIndv  reviewer="Mike Portnoy"
                                       reviewerImage={Reviewer2}
                    />

                   </div>
                   <div className="testimonial test-three">
                    <TestimonialsIndv reviewer="John Petrucci"
                                      reviewerImage={Reviewer3}
                    />
                   </div>
               </div>
            </div>

        </section>
    )
}
export default Testimonials;