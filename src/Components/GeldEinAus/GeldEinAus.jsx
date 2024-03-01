import { useState } from "react";
import "./GeldEinAus.css";

const GeldEinAus = () => {
  const [Stand, setStand] = useState("");
  const [Wert, setWert] = useState("");

  const EinzahlenAuszahlen = (zahlung) => {
    if (Wert > 0 && zahlung === "einzahlung") {
      setStand(Number(Wert + Stand));
      setWert("");
    } else if (Wert > 0 && Wert <= Stand && zahlung === "auszahlung") {
      setStand(Number(Stand - Wert));
      setWert("");
    } else {
      alert("Ungültigen Betrag!");
    }
  };

  return (
    <div className="container">
      <section className="konto">
        <h1>Kontostand:</h1>
        <p className="stand">{Stand}</p>
        <input type="number" name="bank" id="bank" value={Wert} onChange={(event) => setWert(Number(event.target.value))} />
        <div>
          <button onClick={() => EinzahlenAuszahlen("einzahlung")}>Einzahlen</button>
          <button onClick={() => EinzahlenAuszahlen("auszahlung")}>Auszahlen</button>
        </div>
      </section>
    </div>
  );
};

export default GeldEinAus;
