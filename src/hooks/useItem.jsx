import { useState } from "react";

const useItem = (defaultItems = []) => {
  const [items, setItems] = useState(defaultItems);
  const [id, setId] = useState(
    defaultItems.length > 0
      ? Math.max(...defaultItems.map((item) => item.id))
      : 0
  );

  const addItem = () => {
    setItems((prevItems) => [...prevItems, { id: id + 1 }]);
    setId(id + 1);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return {
    items,
    addItem,
    removeItem,
  };
};

export default useItem;
