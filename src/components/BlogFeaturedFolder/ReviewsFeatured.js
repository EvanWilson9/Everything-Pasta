import React from "react";

function ReviewsFeatured(){

  const Review = (props)=>{

    return(
      <div className="review">
        <img className="review-image" src={props.image} alt=""/>
        <div className="review-info">
          <div className="review-info-top">
            <div className="review-title">{props.title}</div>
            <div className="review-date">{props.date}</div>
          </div>
          <div className="review-desc">{props.desc}</div>
          <div className="review-read-container">
            <button className="read-review-btn">Read my review &#x2192;</button>
          </div>
        </div>
      </div>
    );
  }

  return(
    <div id="featured-reviews-container">
      <div id="reviews-title">Recent Restaurant Reviews</div>
      <div class="reviews-container">
      <Review
        image="/images/harbour.webp"
        date="October 12, 2023"
        title="Spirit of Harbour Town - Sunset Dinner Cruise"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="/images/skull.jpg"
        title="Skull Creek Boathouse"
        date="October 9, 2023"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="/images/olive.jpg"
        title="Olive Garden "
        date="September 21, 2023"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="/images/outback.png"
        title="Outback Steakhouse"
        date="September 15, 2023"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      </div>
      <div>
        <button className='more-reviews-btn'>See more reviews</button>
      </div>
    </div>

  );
}

export default ReviewsFeatured;