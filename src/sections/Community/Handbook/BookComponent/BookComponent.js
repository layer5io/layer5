import React, { useEffect } from "react";
import BookComponentWrapper from "./BookComponent.style";
import handbookdark from "../images/handbook-dark.webp";
import { Link } from "gatsby";

const BookComponent = () => {
  useEffect(() => {
    const bookElement = document.querySelector(".book");
    bookElement.classList.add("rot-on-rel");
  }, []);
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
