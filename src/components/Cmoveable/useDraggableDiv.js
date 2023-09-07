import React, { useEffect, useRef, useState } from "react";
import Moveable from "react-moveable";

function useDraggableDiv({ content }) {
  const divRef = useRef(null);
  const moveableRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const target = divRef.current;

      moveableRef.current = new Moveable();

      moveableRef.current.on("drag", ({ target }) => {
        console.log(`${content} 拖拽中`);
      });

      moveableRef.current.on("resize", ({ target }) => {
        console.log(`${content} 缩放中`);
      });

      moveableRef.current.bind(target);
    }

    return () => {
      if (moveableRef.current) {
        moveableRef.current.destroy();
      }
    };
  }, [content]);

  return (
    <div className="draggable-div" ref={divRef}>
      {content}
    </div>
  );
}

export default useDraggableDiv;
