import React from "react";
import PropTypes from "prop-types";
import * as styled from "./TestimonialsPage.styles.js"
import { useOutletContext } from "react-router-dom";

const temporaryTestimonials = [
    {
        user: "Elizabeth Doe",
        photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        rating: "4.5",
        message: "Kain at Kape is my go-to spot whenever I need a break from the daily grind. The coffee is always rich and smooth, and their breakfast meals are incredibly comforting. The cozy vibe and friendly staff make it feel like home. Highly recommended!"
    },
    {
        user: "Jessica Stewart",
        photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        rating: "3.0",
        message: "A hidden gem! Kain at Kape has the perfect blend of good food and great coffee. Their signature blend is unlike anything I’ve tasted, and the ambiance is perfect for both working or catching up with friends. Definitely a must-visit café."
    },
    {
        user: "Mark Hanes",
        photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        rating: "5.0",
        message: "What I love about Kain at Kape is the warmth—not just from the coffee, but from the people too. Every visit feels personal. Their kare-kare rice meal paired with iced latte? Chef’s kiss!"
    }
]

const emptyTestimonials = () => (
    <styled.EmptyTestimonialsMessageContainer>
        <styled.EmptyTestimonialsMessage>{"Looks like you haven't ordered from us yet.\nOnce you've completed an order it will appear here so you can order again anytime!"}</styled.EmptyTestimonialsMessage>
    </styled.EmptyTestimonialsMessageContainer>
)

const TestimonialsPage =({}) => {

    return(
        <styled.TestimonialsPageWrapper>
            {temporaryTestimonials.length === 0
                ? emptyTestimonials()
                : temporaryTestimonials.map((testimony, index) => (
                    <styled.TestimonialsCardSpace key={`${testimony.user}-entry`}>
                        <styled.TestimonialEntry testimonial={testimony}/>
                    </styled.TestimonialsCardSpace>
                ))                
            }
        </styled.TestimonialsPageWrapper>
    )
}

export default TestimonialsPage;