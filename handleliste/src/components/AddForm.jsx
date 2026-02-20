import { useState } from "react";

/*FUNKSJONER FOR "NAVN", "ANTALL" og "ERROR"*/
export default function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    /*ERROR MELDING OM DU IKKE SKRIVER INN NOE SOM HELST*/
    if (!name && !quantity) {
      setError("Du må skrive inn vare og antall!");
      return;
    }

    /*ERROR MELDING OM DU IKKE SKRIVER INN VARENAVN*/
    if (!name) {
      setError("Du må skrive inn vare!");
      return;
    }

    /*ERROR MELDING OM DU IKKE SKRIVE ANTALL*/
    if (!quantity) {
      setError("Du må skrive inn antall!");
      return;
    }

    onAddItem(name, Number(quantity));
    setName("");
    setQuantity("");
    setError("");
  }

  /*OPPSETT FOR "LEGG TIL VARE" SEKSJON I APPEN*/
  return (
    <section>
      <h2>Legg til vare</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vare:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Antall:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <button type="submit">Legg til</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
}