import React from 'react';
import { useState, ChangeEvent } from 'react';

function PostReviewForm(): JSX.Element {

  const [selectedRating, setSelectedRating] = useState(0);
  const [textReview, setTextReview] = useState('');
  console.log(selectedRating);
  console.log(textReview);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5,4,3,2,1].map((number) => (
          <React.Fragment key={number}>
            <input className="form__rating-input visually-hidden" name="rating" value={number} id={`${number}-stars`} type="radio"
              onChange={() => {
                setSelectedRating(number);
              }}
            />
            <label htmlFor={`${number}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setTextReview(target.value);
        }}
      >

      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default PostReviewForm;
