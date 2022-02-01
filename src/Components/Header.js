import React from 'react';
import Badge from '@material-ui/core/Badge ';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
export const Header = (props) => {
  const count = useSelector((state) => state.count.value);
  if (props.data) {
    return (
      <div className="headerItem">
        <h4 className="item"
          // style={{
          //   color: 'black',
          //   position: 'absolute',
          //   margin: 'auto',
          //   // paddingLeft: '0%',
          //   position: 'fixed',
          // }}
        >
          {props.data}
        </h4>
        <h5 className="item"
          // style={{
          //   color: 'black',
          //   position: 'absolute',
          //   margin: 'auto',
          //   // paddingLeft: '85%',
          //   position: 'fixed',
          // }}
        >
          My Order
          <Badge color="secondary" badgeContent={count}>
            {' '}
            <ShoppingCartIcon />{' '}
          </Badge>
        </h5>
      </div>
    );
  } else return '';
};
