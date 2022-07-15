import React from "react";

function Category({ obj, filterCollection }) {
  return (
    <>
      <span className="category">
        {obj.map((item) => {
          return (
            <p
              className={item.isSelected ? "items selected" : "items"}
              onClick={filterCollection}
            >
              {item.name}
            </p>
          );
        })}
      </span>
    </>
  );
}

export default Category;
