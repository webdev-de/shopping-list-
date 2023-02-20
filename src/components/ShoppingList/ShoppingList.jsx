import { useState } from "react";
import ShoppingList_Item from "./ShoppingList_Item";
import { FaTrashAlt, FaListAlt, FaPlus, FaSearch } from 'react-icons/fa';
import uniqueID from "../../assets/scss/helper/uniqueID";

const demoItems = [
  {
    id: 1,
    list: "demo",
    done: true,
    name: "Produkt 1"
  },
  {
    id: 2,
    list: "default",
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


  const getItems = (type = null, list = 'default') => {

    let allItems = items;

    if (list !== null) {
      allItems = allItems.filter((item => item.list === list))
    }
    if (type === 'done') return allItems.filter(item => item.done === true);
    if (type === 'open') return allItems.filter(item => item.done === false);

    return allItems;
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

      {getItems(null, currentList).length >= 1 ? getItems(null, currentList).map(item => (
        <ShoppingList_Item
          key={item.id} id={item.id}
          done={item.done} name={item.name}
        />
      )) : "Leider kein Eintrag gefunden"}



      <button onClick={addItem}>AddItem</button>
    </div>
  );
}

export default ShoppingList;