import React, { useEffect, useState } from "react";
import { fetchColors } from '../api/fetchColors';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState('');
  
  const getData = () => {
    fetchColors()
      .then((res) => {setColorList(res.data)})
      .catch((err) => {console.log(err.message)});
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!colorList ? (<h1>Loading...</h1>) : (
        <>
          <ColorList colors={colorList} updateColors={setColorList} getColors={getData} />
          <Bubbles colors={colorList} />
        </>
      )}
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
