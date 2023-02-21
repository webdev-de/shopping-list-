import { useState } from "react";
import ShoppingList_Item from "./ShoppingList_Item";
import { FaTrashAlt, FaListAlt, FaPlus, FaSearch, FaCheckCircle, FaCheck } from 'react-icons/fa';
import uniqueID from "../../assets/scss/helper/uniqueID";

const demoLists = [
  {
    id: "5bae675f92b3e",
    lastupdate: 1677016588793,
    name: "Allgemein",
    shared: false,
    default: true
  }
]

const demoItems = [
  {
    id: "49b4675f41392",
    lastupdate: 1677016135205,
    list: "5bae675f92b3e",
    done: true,
    name: "Produkt 1"
  }
]




const ShoppingList = () => {

  const [items, setItems] = useState(demoItems);
  const [lists, setLists] = useState(demoLists);

  const [itemInput, setItemInput] = useState("");
  const [currentList, setCurrentList] = useState("default")


  const getItems = (type = null, list = 'default') => {

    let allItems = items;

    if (list !== null) {
      allItems = allItems.filter((item => item.list === list))
    }
    if (type === 'done') return allItems.filter(item => item.done === true);
    if (type === 'open') return allItems.filter(item => item.done === false);

    return allItems;
  }


  const getLists = () => {
    const allLists = lists;

    return allLists;
  }

  const addItem = () => {
    const newItem = {
      id: uniqueID(),
      list: "default",
      done: false,
      name: "Beispiel"
    }
    setItems([...items, newItem])
  }

  return (
    <div>
      <h2>Ich bin die Liste</h2>

      <h3>Lists</h3>
      <ul className="main-lists">
        {getLists().length > 0 && getLists().map(list => (
          <li key={list.id} className="item-lists">
            {list.default && <FaCheck className="check"/>}
            <span>{list.name}</span>
            <span>{getItems(null, list.id).length}</span>
          </li>
        ))}
      </ul>

      <h3>Items</h3>
      <div>{new Date().getTime()}</div>

      {
        getItems(null, currentList).length >= 1 ? getItems(null, currentList).map(item => (
          <ShoppingList_Item
            key={item.id} id={item.id}
            done={item.done} name={item.name}
          />
        )) :
          <div>Leider wurde kein Eintrag gefunden, schade Mamelade!</div>
      }



      <button onClick={addItem}>AddItem</button>
    </div>
  );
}

export default ShoppingList;