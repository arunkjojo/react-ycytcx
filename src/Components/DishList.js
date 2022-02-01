import React from 'react';
import { DishInfo } from './DishInfo';
export const DishList = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <>
      {data.category_dishes.map((name) => (
        <DishInfo data={name} />
      ))}
    </>
  );
};
