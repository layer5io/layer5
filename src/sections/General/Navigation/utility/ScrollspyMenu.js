import React, { useEffect, useState, useRef } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import Card from "./Card";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];

  const [state, setState] = useState({
    active: menuItems[0]
  });
  const [focusindex, setfocusindex] = useState(0);
  const [focusables, setfocusables] = useState('[]');
  const wrapRef = useRef(null);
 const dropdowncontent = useRef(null); 

  const handleMouseOver = (index) => {
    setState({
      active: menuItems[index]
    });
    if(dropdowncontent.current ) {
      const a = dropdowncontent.current.querySelectorAll('[href]'); 
      setfocusables(a); 
      a[0].focus();
   }
  };

  if (props.className) {
    addAllClasses.push(props.className);
  }

  const wrapDisplay = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    const changefocus = async () => {
      if(dropdowncontent.current) { 
      if(focusindex >=0 && focusindex < focusables.length) {
        focusables[focusindex].focus(); 
      }
    }
  };

    changefocus();
}, [focusindex]);

  const handlefocus = (e) => {
    if(e.keyCode == "40") {
          e.preventDefault();
    if(dropdowncontent.current) { 
      if ( (focusindex + 1) == focusables.length) { 
        setfocusindex(0) 
      } else { 
        setfocusindex(focusindex + 1)
      } 
}
}

  if(e.keyCode == "38")
  {    e.preventDefault();
      if(dropdowncontent.current) { 
        if ( focusindex == 0) { 
          setfocusindex(focusables.length - 1)
        } else { 
          setfocusindex(focusindex - 1) 
        }  
    }
   }
  }
  
  const wrapNone = () => {
    if (wrapRef.current) {
      wrapRef.current.style.display = "none";
    }
  };

  const { active } = state;
  const blogData = props.blogData;

  return (
    <ul className={addAllClasses.join(" ")} onMouseOver={wrapDisplay} onMouseOut={wrapNone}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
          onMouseOver={() => handleMouseOver(index)}
        >
          <AnchorLink to={menu.path} className="menu-link">
            <span>
              {menu.name}
            </span>
          </AnchorLink>
        </li>
      ))}
      {active.subItems !== undefined && (
        <React.Fragment>
          <ul className="dropdown" style={{ zIndex: "101" }}>
            <div className="nav-grid" ref={dropdowncontent}>
              <div className="hr">
                <Link className="section" onKeyDown={handlefocus} to={active.path}  >{active.name}
                </Link>
                {active.subItems.map((subItem, i) => (
                  <li key={i}>
                    { subItem.name === "Forum" ?
                      <a href={subItem.path} target="_blank" className="sub-item" rel="noreferrer" onKeyDown={handlefocus}>
                        {subItem.name}
                      </a>
                      : <Link to={subItem.path} partiallyActive={true} className={subItem.sepLine && "sub-item"} onKeyDown={handlefocus}>
                        {subItem.name}
                      </Link>
                    }
                  </li>
                ))}
                <div className="action-items">
                  {active.actionItems.map((actionItem, i) => (
                    ( actionItem.actionName === "Join the discussion" ?
                      <a href={actionItem.actionLink} target="_blank" className="action-link" rel="noreferrer" onKeyDown={handlefocus} >
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </a>
                      : (<Link key={i} to={actionItem.actionLink} partiallyActive={true} className="action-link" onKeyDown={handlefocus} >
                        <span className="readmore-btn">
                          {actionItem.actionName} <IoIosArrowRoundForward />
                        </span>
                      </Link>
                      )
                    )
                  ))}
                </div>
              </div>
              <div className="nav-display">
                <div onKeyDown={handlefocus} ><Card frontmatter={blogData[active.name].nodes[0].frontmatter} fields={blogData[active.name].nodes[0].fields}/></div>
                <div onKeyDown={handlefocus} ><Card frontmatter={blogData[active.name].nodes[1].frontmatter} fields={blogData[active.name].nodes[1].fields}/></div>
              </div> 
            </div>
          </ul>
          <div className="wrap" ref={wrapRef} style={{ zIndex: "100" }} />
        </React.Fragment>
      )}
    </ul>
  );
};

export default ScrollspyMenu;
