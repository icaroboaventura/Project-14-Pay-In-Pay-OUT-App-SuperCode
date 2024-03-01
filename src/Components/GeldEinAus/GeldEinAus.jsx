import { useState } from "react";
import "./GeldEinAus.css";

const GeldEinAus = () => {
  const [Stand, setStand] = useState(0);
  const [Wert, setWert] = useState(0);

  const EinzahlenAuszahlen = (zahlung) => {
    if (Wert > 0 && zahlung === "einzahlung") {
      setStand((vorStand) => vorStand + Wert);
      setWert(0);
    } else if (Wert === 0 && zahlung === "einzahlung") {
      alert("0 € einzahlen nicht möglich!");
    } else if (Wert > 0 && Wert <= Stand && zahlung === "auszahlung") {
      setStand((vorStand) => vorStand - Wert);
      setWert(0);
    } else {
      alert("Du versuchst einen ungültigen Betrag auszuzahlen!");
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
