type ShoppingList_Search_Props = {
    query: string;
    onQueryChange: (newQuery: string) => void;
  };
  
  const ShoppingList_Search: React.FC<ShoppingList_Search_Props> = ({ query, onQueryChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;
      onQueryChange(newQuery);
    };
  
    return (
      <form className="shopping-list--search">
        <input type="text" value={query} onChange={handleInputChange} />
      </form>
    );
  };
  
  export default ShoppingList_Search;
  