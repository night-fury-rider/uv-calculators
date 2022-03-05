
import { useState } from 'react';
import rData from './LowestPriceCalculator-data.json';

const PriceCalculator = props => {


  const [price, setPrice] = useState(props.price ? props.price : 1);
  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);
  const [rate, setRate] = useState(props.rate ? props.rate : 1);

  const calculateRate = () => {
    let newRate = Number((price / quantity).toFixed(2));
    setRate(newRate);
    props.evaluateLowest(props.componentIndex, newRate);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>

      < form className="g-3 registration-form-container" >

        <div className="row uv-centered-container">
          <div className="col-md-auto">
            <input value={price}
              onChange={handlePriceChange}
              onBlur={calculateRate}
              type="number" id="price" name="price" className="form-control" />
            <label htmlFor="price" className="form-label">{rData.price.label}</label>
          </div>
          <div className="col-md-auto">
            <input value={quantity}
              onChange={handleQuantityChange}
              onBlur={calculateRate}
              type="number" id="quantity" name="quantity" className="form-control" step="1" />
            <label htmlFor="quantity" className="form-label">{`${rData.quantity.label} ${props.unit}`}</label>
          </div>

          <div className="col-md-auto">
            <input type="number"
              id="pricePerQuantity"
              name="pricePerQuantity"
              value={rate}
              disabled
              className={"form-control disabled-textfield"} />
            <label htmlFor="pricePerQuantity" className="form-label">{`${rData.label} / ${props.unit}`}</label>
          </div>
        </div>
      </form>

    </>
  )
};

export default PriceCalculator;
