import React, { useState } from 'react';
import { DishList } from './DishList';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';
export const LinkTab = (props) => {
  const data = props.links;
  const [value, setValue] = useState(0);
  if (data) {
    return (
      <div className="linkDiv">
        <Paper>
          <Tabs
            value={value}
            onChange={(e, v) => setValue(v)}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            // scrollButtons="auto"
          >
            {data.map((name) => (
              <Tab key={name.menu_category_id} label={name.menu_category} />
            ))}
          </Tabs>
          <div>
            <DishList data={data[value]} />
          </div>
        </Paper>
      </div>
    );
  } else {
    return (
      <h2
        style={{
          color: 'red',
          margin: 0,
          position: 'absolute',
          top: '50%',
          left: '45%',
        }}
      >
        <CircularProgress />
      </h2>
    );
  }
};
