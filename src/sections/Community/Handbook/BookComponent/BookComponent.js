import React from 'react';
import BookComponentWrapper from "./BookComponent.style";

const BookComponent = () => {
  return (
    <BookComponentWrapper>
    <a
      className="book-container"
      href="https://layer5.io/community/handbook"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="book">
        <img
          alt="Community HandBook"
          src="https://user-images.githubusercontent.com/91362589/245493993-1780f4f9-b332-4b91-95ac-841013624b86.png"
        />
      </div>
    </a>
    </BookComponentWrapper>
  );
};

export default BookComponent;
