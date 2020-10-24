import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { Card } from 'react-bootstrap';


function Moviecard({val}) {
    return (
        <div className="movie-card">
 
            <Card style={{ width: '18rem',height: '25rem' }}>
             <Card.Img variant="top" src={val.image} style={{ width: '18rem',height: '15rem' }} />
             <Card.Body className="card-body">
             <Card.Title>{val.name}</Card.Title>
             <Card.Text>{val.year}</Card.Text>
             <StarRatingComponent value={val.rating}/>
             </Card.Body>
            </Card>    
        </div>
    )
}

export default Moviecard;
