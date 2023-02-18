import ShoppingList_Item from "./ShoppingList_Item"

const items = ["Produkt1","Produkt3","Produkt7","Produkt2","Produkt5","Produkt8","Produkt4",]

const ShoppingList =() => {

    return (<>
        {items.map((name)=><ShoppingList_Item name={name}/>)}
    </>)
}

export default ShoppingList