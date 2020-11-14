import React, { useState } from "react";

const UpdateItem = (item) => {
const [updatedItem,setUpdatedItem]=useState("");

const updateItem=()=>{
console.log("new item is...",updatedItem)
}

  return (
    <div>
      <input
        type="text"
        placeholder={item.value}
        value={updatedItem}
        onChange={(e) => setUpdatedItem(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-info btn-sm"
          type="button"
          onClick={updateItem}
          disabled={updatedItem.length ? false : true}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateItem;
