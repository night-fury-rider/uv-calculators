import './UVFooter.css';

const UVFooter = props => {
  return (
    <footer className="footer mt-auto py-3 bg-light fixed-bottom">
      <div className="container">
        <span className="text-muted">{props.message}</span>
      </div>
    </footer>
  )
};

export default UVFooter;
