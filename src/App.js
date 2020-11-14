import React, { useState } from "react";
function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(false);
  const [updatedItem, setUpdatedItem] = useState("");

  const addItem = () => {
    const newItem = {
      id: list.length + 1,
      value: item,
    };

    const items = [...list];
    items.push(newItem);

    setList(items);
    setItem("");
  };

  const deleteItem = (id) => {
    const items = [...list];
    const newList = items.filter((item) => item.id !== id);
    setList(newList);
  };
  const updateItem=()=>{
    const items = [...list];
    const index=items.indexOf(item);

    items[index].value=updatedItem;
    setList(items)

  

    setUpdate(false);
    setUpdatedItem("")
    setItem("");
    }

  return (
    <div className="mt-4">
      <h4 className="display-4 text-center mb-4">
        <i className="fas fa-list-ul"></i>To Do App
      </h4>
      <div className="mx-auto" style={{ width: "300px" }}>
        <div className="input-group mb-3">
         
  {   !update?    ( <div>
    
    <input
            type="text"
            placeholder="Type item..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="button"
              onClick={addItem}
              disabled={item.length ? false : true}
            >
              Add
            </button>
          </div>
    <ul className="mt-4">
            {list.map((item) => (
              <li key={item.id} className="mr-2">
                <p>
                  {item.value}
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      setUpdate(true);
                      setItem(item)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    Mark as done
                  </button>
                </p>
              </li>
            ))}
          </ul></div>):(<div>
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
    </div>)}
        </div>
      </div>
    </div>
  );
}

export default App;
