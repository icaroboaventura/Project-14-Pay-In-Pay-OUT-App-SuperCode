import "./PayInPayOut.css";

const PayInPayOut = () => {
  return (
    <>
      <h2>Mein Girokonto</h2>
      <p className="geld">0</p>
      <form>
        <input type="text" placeholder="Betrag in €" />
        <div>
          <button>Einzahlen</button>
          <button>Auszahlen</button>
        </div>
      </form>
    </>
  );
};

export default PayInPayOut;
