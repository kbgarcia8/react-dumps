import {React, useState} from "react";
import PropTypes from "prop-types";
import * as styled from "./StarRating.styles.js"
import StarIcon from "../../atoms/SVG/StarIcon.jsx";



const StarRating = ({
    stars,
    ratedColor,
    noRateColor,
    rating,
    withText,
    className
}) => {

    return (
        <styled.StarRatingWrapper className={className}>
            <styled.StarIconsContainer>
            {stars.map((_, index) => {
                const [whole, decimal] = rating.split('.').map(Number);

                if (index < whole) {
                    return <StarIcon key={index} fill={ratedColor} />;
                } else if (index === whole && decimal >= 5) {
                    return (
                    <StarIcon
                        key={index}
                        fillColor={ratedColor}
                        blankColor={noRateColor}
                    />
                    );
                } else {
                    return <StarIcon key={index} fill={noRateColor} />;
                }
            })}
            </styled.StarIconsContainer>
            {withText && <styled.StarRatingText>{`${rating} Stars`}</styled.StarRatingText>}
        </styled.StarRatingWrapper>
    )
}

StarRating.propTypes = {
    stars: PropTypes.array,
    ratedColor: PropTypes.string,
    noRateColor: PropTypes.string,
    rating: PropTypes.string,
    className: PropTypes.string
};

export default StarRating;