import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useSelector, useDispatch } from 'react-redux';
import { increase_count, decrease_count } from '../Redux/count/countSlice';
export default function Counter(props) {
  const id = props.id;
  const count = useSelector((state) => {
    return state.count.cartItems;
  });
  const itemQty = count.filter((item) => {
    return item.id == id;
  })[0];
  const countValue = itemQty ? itemQty.qty : 0;
  const dispatch = useDispatch();
  const increaseCount = () => {
    dispatch(
      increase_count({
        count: count + 1,
        cartId: id,
      })
    );
  };
  const decreaseCount = () => {
    if (countValue > 0) {
      dispatch(
        decrease_count({
          count: count - 1,
          cartId: id,
        })
      );
    }
  };
  return (
    <Container
      style={{ flexDirection: 'row', paddingLeft: '0px', paddingTop: '10px' }}
    >
      <ButtonGroup
        className="counterButtonGroup"
        style={{ borderRadius: '25px', border: '0.5px solid' }}
      >
        <Button
          style={{ border: '0px' }}
          className="counterButton"
          onClick={decreaseCount}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          style={{ borderLeft: '0.5px solid', borderRight: '0.5px solid' }}
          className="counterButton"
        >
          {countValue}
        </Button>
        <Button
          style={{ border: '0px' }}
          className="counterButton"
          onClick={increaseCount}
        >
          <AddIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Container>
  );
}
