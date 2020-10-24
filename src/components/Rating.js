import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
function Rating({ratingsearch}) {
    const [rating, setrating] = useState(1);
    function onStarClick(nextValue, prevValue, name) {
        setrating(nextValue);
        ratingsearch(nextValue);
    }
    return (
        <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
        </div>
    )
}

export default Rating;
