import { FaCheck, FaEdit } from 'react-icons/fa';


const ShoppingList_Item = ({ id, done, name, handleToggleItem }) => {

  return (
    <div className="shopping-list_item">

      <button className="shopping-list_checkbox" value={id} onClick={handleToggleItem}>{done && <FaCheck />}</button>
      <span style={{ textDecoration: done ? "line-through" : "none" }}>{name}</span>
      {!done && <button><FaEdit /></button>}
    </div>
  );

}

export default ShoppingList_Item;