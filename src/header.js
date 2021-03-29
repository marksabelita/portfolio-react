import { useScrollPosition } from "./hooks";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faTimes } from "@fortawesome/free-solid-svg-icons"
import NavList from './components/contents/navlist';

const Header = () => {
  const navs = [
    {
      link: "about",
      label: "About",
      count: "01"
    },
    {
      link: "experience",
      label: "Experience",
      count: "02"
    },
    {
      link: "porfolio",
      label: "Portfolio",
      count: "03"
    },
    {
      link: "contact",
      label: "Contact Me",
      count: "04"
    }
  ];

  const [sticky, setSticky] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const [currPos, setCurPossition] = useState(0);
  const [showDrawer, setDrawerDisplay] = useState(false);

  const displayDrawer = (show) => {
    setTimeout(() => setDrawerDisplay(show), 400 );
  }

  useScrollPosition(
    ({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y;
        setOnTop(false);
        setCurPossition(currPos.y);
        if (isShow !== sticky) {
          setSticky(isShow);
        }
    },
    [sticky]
  )

  const handleClickEvent = (e) => {
    if(e) {
      setDrawerDisplay(false);
      setTimeout(() => { setOnTop(true)}, 800);
    }
  }

  return (
    <div>
      <div className="header" style={{
        transform: (sticky || onTop) && !showDrawer ? "translateY(0%)" : "translateY(-100%)",
        transition: "transform 400ms ease-in",
        bottom: 0,
        left: 0,
        boxShadow: sticky && currPos < 0 ? "0 10px 30px -10px rgba(0,0,0,.2)" : 'none'
      }}>
        <nav>
          <div className="icon-holder"> 
            <img src={"./assets/ms.png"}/>
          </div>
          <div className="drawer-icon" onClick={() => {displayDrawer(true)}}>
            { !showDrawer ?  <FontAwesomeIcon icon={faAlignRight} /> : '' } 
          </div>
          <div>
              <NavList navs={navs} classLabel={'nav-list'} onClickCallback={handleClickEvent} hasResume={false}/>
              
          </div>
        </nav>
      </div>

      <div className="drawer"  style={{
          display: showDrawer ? "block" : "none",
          transition: "transform 400ms ease-in"
        }}>
        <div className="close-holder" onClick={() => {displayDrawer(false)}}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="drawer-content">
          <NavList navs= {navs} onClickCallback={handleClickEvent} hasResume={true}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
