import React from 'react';
import './testimonialsIndv_styles.css'
// import './font-awesome/css/font-awesome.min.css';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'



const TestimonialsIndv = (props) => {
    return (
        <section className="testimonial-container">

            {/*<div className="testimonial-inner-container">*/}
                <img  className="testimonial-image" src={props.reviewerImage} />
            <h4 className="testimonial-reviewer-name">{props.reviewer}</h4>
                <div className='testimonial-icon'><FontAwesomeIcon className='testimonial-icon' icon={faQuoteLeft}/></div>

            <p className="testimonial-text" >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                assumenda cum eius, ex exercitationem fuga magni praesentium
                quas quis quisquam, rem rerum sed ullam vel vero? Ad aut dicta
                doloribus ducimus earum error expedita fugit impedit inventore,
                laboriosam laudantium maxime nam natus nihil nostrum porro quod
                ratione, rerum sint voluptatibus.
            </p>
            <h4 className="testimonial-text-member-since ">Adventure Co member since 2021</h4>

            {/*</div>*/}

        </section>
    )
}
export default TestimonialsIndv;