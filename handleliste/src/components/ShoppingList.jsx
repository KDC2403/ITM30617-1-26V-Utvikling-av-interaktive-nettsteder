/*IMPORTERER FRA LISTEN PÅ HOVEDAPPEN I PROSJEKTET*/
import ShoppingItem from "./ShoppingItem";

/*EKSPORTERER TIL HOVEDAPPEN I PROSJEKTET*/
export default function ShoppingList({
  items,
  onToggleBought,
  onChangeQuantity,
}) {
  return (
    <section>
      <h2>Liste</h2>

      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onChangeQuantity={onChangeQuantity}
          />
        ))}
      </ul>
    </section>
  );
}