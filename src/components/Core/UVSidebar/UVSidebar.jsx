import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faFonts from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

import { getErrorInString } from "../../../modules/Errors/ErrorService";

import './UVSidebar.css';

const UVSidebar = props => {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (event, index, url) => {
    event.preventDefault();
    navigate(url, { replace: true });
    setActiveIndex(index);
  };

  if (!props.links || props.links.length === 0) {
    throw new Error(getErrorInString('Invalid Sidebar Data', null, 'Invalid sidebar data is passed to UVSidebar component'));
  }

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse uv-bg-light-soft">
      <div className="position-sticky pt-3">
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          {props.links.map((linkObj, linkIndex) => (
            <li className="nav-item" key={linkIndex}
              onClick={event => { handleNavigation(event, linkIndex, process.env.PUBLIC_URL + '/' + linkObj.href) }}>
              <Button className={"nav-link link-button " + (linkIndex === activeIndex ? 'active' : '')}>
                <FontAwesomeIcon icon={faFonts[linkObj.icon]}
                  className='cursorPointer' />
                {linkObj.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </nav >
  );
};

export default UVSidebar;
