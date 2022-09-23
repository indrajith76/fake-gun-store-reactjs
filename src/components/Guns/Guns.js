import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Guns = ({countIncrease}) => {
  // console.log();
  const [ guns, setGuns ] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mt-10 px-3 md:px-10 lg:p-0">
      {
        guns.map(gun => <Card gun={gun} countIncrease={countIncrease} key={gun.id}/>)
      }
    </div>
  );
};

export default Guns;
