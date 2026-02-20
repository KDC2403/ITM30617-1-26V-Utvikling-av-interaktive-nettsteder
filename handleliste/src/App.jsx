import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/ShoppingList";

/*EKSEMPEL LISTEELEMENTER*/
export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Sjokolade", quantity: 1, bought: false },
    { id: 2, name: "Yoghurt", quantity: 2, bought: true },
  ]);

  /*FUNKSJON FOR Å LEGGE TIL FLERE VARER*/
  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity,
      bought: false,
    };

    setItems((prev) => [newItem, ...prev]);
  }

  /*SJEKKBOKS FOR KJØPTE VARER*/
  function toggleBought(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  /*ENDRING AV ANTALL, KUN OVER ETT ANTALL MULIG*/
  function changeQuantity(id, newQuantity) {
    if (newQuantity < 1) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  /*HOVEDAPPLIKASJON, OPPSETT AV SELVE APPEN*/
  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onToggleBought={toggleBought}
        onChangeQuantity={changeQuantity}
      />
    </main>
  );
}