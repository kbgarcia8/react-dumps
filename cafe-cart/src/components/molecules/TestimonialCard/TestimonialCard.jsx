import { React, useMemo} from "react";
import PropTypes from "prop-types";
import { useTheme } from "../../../context/ThemeContext.jsx";
import * as styled from "./TestimonialCard.styles.js"
import StarRating from "../StarRating/StarRating";

const starsQuantiy = Array(5).fill(0)

const TestimonialCard = ({
    testimonial,
    className,
    children
}) => {

    const {theme} = useTheme();

    const starRatingColors = useMemo(() => {
        return {
            filled: theme.warning,
            blank: theme.shadow
        }
    }, [theme])

    return (
        <styled.TestimonialCardWrapper className={className}>
            <styled.TestimoneePictureContainer>
                <styled.TestimoneePicture src={testimonial.photo} alt={`${testimonial.name}-photo`}/>
            </styled.TestimoneePictureContainer>
            <styled.TestimonialCardUserName>{`${testimonial.user}`}</styled.TestimonialCardUserName>
            <styled.StarRatingContainer>
                <StarRating
                    stars={starsQuantiy}
                    ratedColor={starRatingColors.filled}
                    noRateColor={starRatingColors.blank}
                    rating={testimonial.rating}
                />
            </styled.StarRatingContainer>
            <styled.TestimonialCardMessage>{`${testimonial.message}`}</styled.TestimonialCardMessage>            
            {children}
        </styled.TestimonialCardWrapper>
    )
}

TestimonialCard.propTypes = {
    
    className: PropTypes.string,
    children: PropTypes.node
};

export default TestimonialCard;