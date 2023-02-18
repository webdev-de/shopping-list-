import { useEffect, useState } from "react";
import ShoppingList_Search from "./ShoppingList_Search";
import ShoppingList_Item from "./ShoppingList_Item";

const ShoppingList = () => {
    const [query, setQuery] = useState<string>("");
    const [items, setItems] = useState<string[]>([
        "Produkt1",
        "Produkt3",
        "Produkt7",
        "Produkt2",
        "Produkt5",
        "Produkt8",
        "Produkt4",
    ]);

    const onQueryChange = (newQuery: string) => {
        setQuery(newQuery);
    };

    useEffect(() => {
        console.log("Query has changed:", query);
    }, [query]);

    return (
        <>
            <ShoppingList_Search query={query} onQueryChange={onQueryChange} />

            {items.map((name, index) => name.toLowerCase().includes(query.toLowerCase()) && <ShoppingList_Item key={index} name={name} />)}
        </>
    );
};

export default ShoppingList;
