import { getErrorInString } from "../../modules/Errors/ErrorService";
import UVGridHeader from "./UVGridHeader";

const UVGrid = props => {
  if (!props.columns || props.columns.length === 0) {
    throw new Error(getErrorInString('Invalid Column Data', null, 'Invalid column data is passed to UVGrid component'));
  }
  if (!props.rows || props.rows.length === 0) {
    throw new Error(getErrorInString('Invalid Row Data', null, 'Invalid row data is passed to UVGrid component'));
  }
  return (
    <div className="uv-grid-container">
      <UVGridHeader title={props.title} />

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              {props.columns.map((columnName, columnIndex) => (
                <th key={columnIndex} scope="col">{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>

            {props.rows.map((rowObj, rowIndex) => (
              <tr key={rowIndex}>
                <td>{rowIndex + 1}</td>
                <td>{rowObj.name}</td>
                <td>{rowObj.runs}</td>
                <td>{rowObj.wickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default UVGrid;
