import React from 'react';
import TestimonialsIndv from "./TestimonialsIndv";

const Testimonial = () => {
    return (
        <section>
            <h2>Testimonials</h2>
            <TestimonialsIndv reviewer="Mary Ann"/>
            <TestimonialsIndv reviewer="The Professor"/>
            <TestimonialsIndv reviewer="Mr. Howell"/>
        </section>
    )
}
export default Testimonial;