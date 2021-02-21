import React, { useEffect, useState } from "react";
import { getColors } from '../api/getColors';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    getColors()
      .then((res) => {setColorList(res.data)})
      .catch((err) => {console.log(err.message)});
  }, []);

  return (
    <>
      {!colorList ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ColorList colors={colorList} updateColors={setColorList} getColors={getColors} />
          <Bubbles colors={colorList} />
        </>
      )}
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
