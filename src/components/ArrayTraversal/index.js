import React, { useState } from "react";
import propTypes from "prop-types";
import { TertiaryButton } from "../Button";

const falseData = {
  name: "张三",
  age: 18,
};

function Arraytraversal(props) {
  const [arrayData, setarrayData] = useState([]);
  const [current, setcurrent] = useState(1);
  function addRules() {
    const cIndex = current;
    setarrayData(arrayData.concat({ ...falseData, current: cIndex }));
    setcurrent(current + 1);
  }
  function reomveRules(index) {
    const ary = arrayData.filter((item) => item.current !== index);
    setarrayData(ary);
  }
  return (
    <div>
      <TertiaryButton onClick={addRules}>add</TertiaryButton>
      <ul>
        {arrayData.map((item, index) => {
          return (
            <div key={item.current}>
              <li>
                <h4>{item.name}</h4>
                {item.age}
              </li>
              <span>{item.current}</span>
              <button onClick={() => reomveRules(item.current)}>
                我是删除的
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Arraytraversal.propTypes = {};

export default Arraytraversal;
