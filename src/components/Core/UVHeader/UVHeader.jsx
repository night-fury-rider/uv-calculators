import './UVHeader.css';

const UVHeader = props => {
  return (
    <header className="uv-header-container navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a href={props.href}
            target="_blank"
            rel="noreferrer"
            className="navbar-brand cursorPointer">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
            </ul>
            <div className="d-flex">
              {props.links?.map((linkObj, linkIndex) => (
                <a key={linkIndex}
                  href={linkObj.href}
                  target='_blank'
                  rel='noreferrer'
                  className="uv-centered-container"
                  alt={linkObj.alt} >

                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default UVHeader;
