import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "gatsby";
import TOCWrapper from "./toc.style";

const TOC = ({data}) => {
  const toc = [
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    },
    {
      name: "Filter",
      link:"/"
    }
  ];
  return (
    <TOCWrapper>
      <div className="chapter-back">
        <Link to={`/learn-ng/${data.mdx.fields.learnpath}/${data.mdx.fields.course}`}>
          <HiOutlineChevronLeft />
          <h4>{data.mdx.fields.course}</h4>
        </Link>
      </div>
      <div className="toc-list">
        <ul>
          {toc.map((item) => (
            <li key={item.name}>
              <p className="toc-item">
                <a href={item.link}>{item.name}</a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </TOCWrapper>
  );
};

export default TOC;
