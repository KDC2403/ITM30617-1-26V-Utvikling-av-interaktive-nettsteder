/*EKSPORTERER TIL HOVEDAPPEN I PROSJEKTET*/
export default function ShoppingItem({
  item,
  onToggleBought,
  onChangeQuantity,
}) 

/*FUNKSJON FOR ENDRING AV ANTALL VARER I LISTEN*/
{
  function handleQuantityChange(e) {
    const value = Number(e.target.value);
    if (value < 1) return;
    onChangeQuantity(item.id, value);
  }

  /*ELEMENTER I HANDLELISTEN, TYPE INPUT FOR VARE OG ANTALL*/
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggleBought(item.id)}
        />
        {item.name}
      </label>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
    </li>
  );
}