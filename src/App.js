import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from './Components/Header';
import { LinkTab } from './Components/LinkTab';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099`)
      .then((res) => {
        // console.log(res.data);
        let apiData = res.data[0];
        setData(apiData);
      })
      .catch((err) => console.log(err));
  }, []);
  if (data) {
    // console.log(data);
    return (
      <div>
        <Header data={data.restaurant_name} />
        <LinkTab links={data.table_menu_list} />
      </div>
    );
  } else return '';
}
