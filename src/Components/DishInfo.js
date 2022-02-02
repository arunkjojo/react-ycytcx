import React from 'react';
import Counter from './Counter';
export const DishInfo = (props) => {
  const data = props.data;
  return (
    <div key={data.dish_id} className="foodContainer">
      <div className="typeInfo">
        {data.dish_Type === 2 ? (
          <div className="foodType green">
            <span className="foodTypeCir" />
          </div>
        ) : (
          <div className="foodType red">
            <span className="foodTypeCir" />
          </div>
        )}
      </div>
      <div className="productInfo">
        <h3>{data.dish_name}</h3>
        <div className="productDetails1">
          <h4 className="leftDetials">
            {data.dish_currency} {data.dish_price}
          </h4>
          <h4 className="rightDetials">{data.dish_calories} Calories</h4>
        </div>
        <div className="productDetails2">
          {data.dish_description}
          <Counter id={data.dish_id} />
          <p style={{ color: 'red' }}>
            {data.addonCat.length > 0 ? 'Customizations Available' : ''}
          </p>
        </div>
      </div>
      <div className="imageInfo">
        <img height="70" width="70" src={data.dish_image} />
      </div>
    </div>
  );
};
