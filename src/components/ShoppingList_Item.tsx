type ShoppingList_Item_Props = {
    name: string;
};

const ShoppingList_Item: React.FC<ShoppingList_Item_Props> = ({ name }) => {
    // render component using props
    return (
        <li className="shopping-list--item">
            {name}
        </li>
    );
};

export default ShoppingList_Item;
