import { useState } from "react";
import ShoppingList_Item from "./ShoppingList_Item";
import { FaTrashAlt, FaListAlt, FaPlus, FaSearch } from 'react-icons/fa';

const demoItems = [
  {
    id: 1,
    list: "demo",
    done: true,
    name: "Produkt 1"
  },
  {
    id: 2,
    list: "demo",
    done: false,
    name: "Produkt 2"
  },
  {
    id: 3,
    list: "memo",
    done: true,
    name: "Produkt 1"
  }
]


const ShoppingList = () => {

  const [items, setItems] = useState(demoItems);
  const [itemInput, setItemInput] = useState("");
  const [currentList, setCurrentList] = useState("default")

  const [watchTrash, SetWatchTrash] = useState(false);


  const getItems = (type = null, list = 'default') => {

    let allItems = items;

    if (list !== null) {
      allItems = allItems.filter((item => item.list === list))
    }
    if (type === 'done') return allItems.filter(item => item.done === true);
    if (type === 'open') return allItems.filter(item => item.done === false);

    return allItems;
  }


  const handleToggleItem = (e) => {
    const selectedID = Number(e.target.value);
    const updatedItems = items.map((item) => item.id === selectedID ? { ...item, done: !item.done } : item);
    setItems(updatedItems);
  };

  const CountDoneItems = () => {
    const count = items.reduce((acc, curr) => curr.done === false ? acc + 1 : acc, 0);

    return (
      <button className="icons-done_btn" onClick={() => SetWatchTrash(!watchTrash)}>
        <FaListAlt color="rgba(255,255,255,.25)" />{count}
      </button>
    )
  }

  const CountNotDoneItems = () => {
    const count = items.reduce((acc, curr) => curr.done === true ? acc + 1 : acc, 0);

    return (
      <button className="icons-done_btn" onClick={() => SetWatchTrash(!watchTrash)}>
        <FaTrashAlt color="rgba(255,255,255,.25)" />{count}
      </button>
    )
  }


  const contItems = (type = "all") => {
    if (type === "all") {
      return items.length;
    }
    if (type === "done") {
      return items.reduce((acc, curr) => curr.done === true ? acc + 1 : acc, 0)
    }
    if (type === "open") {
      return items.reduce((acc, curr) => curr.done === false ? acc + 1 : acc, 0)
    }

    // Fallback
    return 0;

  }



  const addListItem = (name) => {

    if (name.length < 3) return alert("zu Kurzer Text");
    if (items.some(item => item.name === name)) return alert(`Es gibt schon ein eintrag mit dem namen "${name}"`);

    const newID = Math.random().toString(36).substr(2, 9);

    const newItem = {
      id: newID,
      done: false,
      name,
    };

    setItemInput('');
    setItems([...items, newItem]);
    SetWatchTrash(true);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addListItem(event.target.value)
    }
  };

  return (
    <div>
      <h2>Ich bin die Liste</h2>

      <span>Alle Items = {contItems()}</span><br />
      <span>Done Items = {contItems("done")}</span><br />
      <span>Open Items = {contItems("open")}</span><br />

      {console.log(getItems(null,"demo"))}

      <div className="serachbar">
        <input />
        <button><FaSearch /></button>
      </div>

      <div className="list_head">
        {!watchTrash && <CountDoneItems />}
        {watchTrash && <CountNotDoneItems />}
      </div>

      <div>


        {watchTrash && items.map(item => !item.done &&
          <ShoppingList_Item
            key={item.id} id={item.id}
            done={item.done} name={item.name}
            handleToggleItem={handleToggleItem}
          />
        )}

        {!watchTrash && items.map(item => item.done &&
          <ShoppingList_Item
            key={item.id} id={item.id}
            done={item.done} name={item.name}
            handleToggleItem={handleToggleItem}
          />

        )}

      </div>


      <div className="add-item-box">
        <input value={itemInput} onChange={(e) => setItemInput(e.target.value)} onKeyDown={handleKeyDown} />
        <button onClick={() => addListItem(itemInput)}><FaPlus /></button>
      </div>
    </div>
  );
}

export default ShoppingList;