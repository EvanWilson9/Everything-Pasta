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
        image="https://i0.wp.com/101thingshiltonhead.com/wp-content/uploads/2012/02/Spirit-Sunset-Cruise-1.jpg?fit=1200%2C816"
        date="October 12, 2023"
        title="Spirit of Harbour Town - Sunset Dinner Cruise"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="https://th.bing.com/th/id/R.9be145c733ef134a87286fce5fd3d3e2?rik=jqTC0H8Hu9YkOA&riu=http%3a%2f%2fcdn.onlyinyourstate.com%2fwp-content%2fuploads%2f2017%2f07%2fskull-creek-boathouse-2.jpg&ehk=lMcUZqLZEqjb0QxG%2bdQblpomrd5xmXP7TUK94mDlufs%3d&risl=&pid=ImgRaw&r=0"
        title="Skull Creek Boathouse"
        date="October 9, 2023"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="https://townsquare.media/site/11/files/2018/07/italian-family-restaurant-olive-garden-g6-rdv.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"
        title="Olive Garden "
        date="September 21, 2023"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <Review
        image="https://th.bing.com/th/id/R.0f52d96665be999e93a5907eebd9c124?rik=yw2ONmV2i0bD9g&pid=ImgRaw&r=0"
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