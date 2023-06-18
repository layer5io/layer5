import React from 'react';
import BookComponentWrapper from "./BookComponent.style";
import handbookdark from "../images/handbook-dark.webp";
import { Link } from 'gatsby';

const BookComponent = () => {
  return (
    <BookComponentWrapper>
    <Link
        className="book-container"
        to="/community/handbook"
        target="_blank"
        rel="noreferrer noopener"
      >
      <div className="book">
        <img
          alt="Community HandBook"
          src={handbookdark}
        />
      </div>
    </Link>
    </BookComponentWrapper>
  );
};

export default BookComponent;
