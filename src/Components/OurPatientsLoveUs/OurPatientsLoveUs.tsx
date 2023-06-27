import './OurPatientsLoveUs.css';
import { userReviews } from './Constants';
import React from 'react';

interface ReviewProps {
  rating: number;
  body: string;
  userName: string;
  userImage: string;
}

const Review: React.FC<ReviewProps> = ({ rating, body, userName, userImage }) => (
  <div className='c_item'>
    <p className='head'><img className='star' src={"/PublixVsOthers/Star_Orange.svg"} alt="Star" />{rating}</p>
    <p className='body'>{body}</p>
    <p className='footer'><img className='user' src={userImage} alt="user" />{userName}</p>
  </div>
);

const OurPatientsLoveUs: React.FC = () => (
  <section className="OurPatientsLoveUs">
    <h2 className="title1">Our Patients Love Us</h2>
    <div className='carouselDiv'>
      <div className='carouselItems'>
       { userReviews.map(review=> <Review
          rating={review.rating}
          body={review.body}
          userName={review.userName}
          userImage={review.userImage}
        /> )}
      </div>
      <div className='scroll'>
        <div className='scrollItem'/>
        <div className='scrollItem'/>
        <div className='scrollItem'/>
        <div className='scrollItem'/>
        <div className='scrollItem'/>
        <div className='scrollItem vh'> a</div>
      </div>
    </div>
  </section>
);

export default OurPatientsLoveUs;
