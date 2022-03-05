import { Link } from 'react-router-dom';
import { getErrorInString } from "../../../modules/Errors/ErrorService";
import React from 'react';

const UVSidebar = props => {

  if (!props.links || props.links.length === 0) {
    throw new Error(getErrorInString('Invalid Sidebar Data', null, 'Invalid sidebar data is passed to UVSidebar component'));
  }

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div className="position-sticky pt-3">
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <ul className="nav flex-column h-100">
          {props.links.map((linkObj, linkIndex) => (
            <li className="nav-item" key={linkIndex}>
              <Link to={process.env.PUBLIC_URL + '/' + linkObj.href} className='nav-link'>{linkObj.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default UVSidebar;
