import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

import sData from './UVSidebar-data.json';

const UVSidebarMobile = props => {
  const navigate = useNavigate();

  const handleNavigation = (event, url) => {
    event.preventDefault();
    navigate(url, { replace: true });
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="uv-centered-container">
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>{sData.mobileSidebar.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="nav flex-column h-100">
          {props.links.map((linkObj, linkIndex) => (
            <li className="nav-item" key={linkIndex}
              onClick={event => { handleNavigation(event, process.env.PUBLIC_URL + '/' + linkObj.href) }}>
              <div className="d-grid gap-2">
                <Button variant="primary" className="rem-bottom-1" size="lg">
                  {linkObj.title}
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  )
};

export default UVSidebarMobile;
