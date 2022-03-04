import './UVGrid.css';
import iconData from '../../modules/Icons/icons.json';

const UVGridHeader = props => {
  return (
    <div className="uv-grid-header d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">{props.title}</h1>
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">

        </div>
      </div>
    </div>
  );
};
export default UVGridHeader;
