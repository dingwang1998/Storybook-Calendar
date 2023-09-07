import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DraggableDiv from "./useDraggableDiv";
import Moveable from "react-moveable";

const color = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
`;

const BoxPink = styled(color)`
  background: pink;
`;

const BoxHotPink = styled(color)`
  background: hotpink;
`;

const BoxskyBlue = styled(color)`
  background: skyblue;
`;

export default () => {
  const [index, setIndex] = useState(0);

  const cdivs = [
    {
      temp: <BoxPink onClick={() => setIndex(0)}>1</BoxPink>,
    },
    {
      temp: <BoxHotPink onClick={() => setIndex(1)}>2</BoxHotPink>,
    },
    {
      temp: <BoxskyBlue onClick={() => setIndex(2)}>3</BoxskyBlue>,
    },
  ];
  const refArray = cdivs.map(() => useRef(null));

  // const arrDivs = cdivs.map((it) => {
  //   return {
  //     ...it,
  //     ref: React.createRef(null),
  //   };
  // });

  useEffect(() => {
    cdivs.forEach((ele) => {
      console.log(ele, "ele");
    });
  }, []);

  return (
    <>
      <div className="container">
        {cdivs.map((content, index) => (
          <>
            <div ref={refArray[index]}>{content.temp}</div>
          </>
        ))}

        <Moveable
          target={refArray[index]}
          originDraggable={true}
          draggable={true}
          rotatable={true}
          onDrag={(e) => {
            e.target.style.transform = e.transform;
          }}
          onDragOrigin={(e) => {
            e.target.style.transformOrigin = e.transformOrigin;
            e.target.style.transform = e.drag.transform;
          }}
          onRotate={(e) => {
            e.target.style.transform = e.drag.transform;
          }}
        />
      </div>
    </>
  );
};
