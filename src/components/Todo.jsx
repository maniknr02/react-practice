import React, { useEffect, useState } from "react";
import { RenderTask } from "./RenderTask";

export const Todo = () => {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  //   useEffect(() => {
  //     console.log(itemList);
  //   }, [itemList]);
  const addItemToList = (e) => {
    if (e.currentTarget === e.target) e.stopPropagation();

    e.preventDefault();
    item !== "" &&
      setItemList((previous) => [...previous, { name: item, checked: false }]);
    setItem("");
  };
  const updateChildren = (e) => {
    let index = e.target.id;
    console.log("clicked");
    setItemList((prevList) => {
      let newList = [...prevList];
      newList[index] = {
        name: newList[index].name,
        checked: !newList[index].checked,
      };
      return newList;
    });
  };
  const deleteChecked = (e) => {
    e.preventDefault();
    let newList = [...itemList];
    newList = newList.filter((task) => task.checked === false);
    console.log(newList);
    setItemList(newList);
  };
  return (
    <div className="main">
      <div className="head">
        <div
          style={{ fontSize: "30px", fontWeight: "700", textAlign: "center" }}
        >
          TODO LIST
        </div>
        <br />
        <div>
          <form className="form">
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button className="add" onClick={addItemToList}>
              ADD
            </button>
          </form>
        </div>
      </div>
      <div className="body">
        {itemList.map((task, index) => {
          return <RenderTask task={task} id={index} onClick={updateChildren} />;
        })}
      </div>
      <div className="delete">
        <button onClick={deleteChecked}>DELETE</button>
      </div>
    </div>
  );
};
