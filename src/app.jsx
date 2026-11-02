import { useState } from "react";
import Panel from "./Panel";

// színek tömbben: név + RGB kód
const szinek = [
  { nev: "Piros", rgb: "rgb(255, 0, 0)" },
  { nev: "Zöld", rgb: "rgb(0, 128, 0)" },
  { nev: "Kék", rgb: "rgb(0, 0, 255)" },
  { nev: "Sárga", rgb: "rgb(255, 255, 0)" },
  { nev: "Narancs", rgb: "rgb(255, 165, 0)" },
  { nev: "Lila", rgb: "rgb(128, 0, 128)" },
];

function App() {
  const [valasztottNev, setValasztottNev] = useState("");

  function valtozas(e) {
    setValasztottNev(e.target.value);
  }

  let valasztottSzin = null;
  if (valasztottNev === "Piros") {
    valasztottSzin = szinek[0];
  } else if (valasztottNev === "Zöld") {
    valasztottSzin = szinek[1];
  } else if (valasztottNev === "Kék") {
    valasztottSzin = szinek[2];
  } else if (valasztottNev === "Sárga") {
    valasztottSzin = szinek[3];
  } else if (valasztottNev === "Narancs") {
    valasztottSzin = szinek[4];
  } else if (valasztottNev === "Lila") {
    valasztottSzin = szinek[5];
  } else {
    valasztottSzin = null;
  }

  let kiirando = "";
  if (valasztottSzin === null) {
    kiirando = "Még nem választottál színt!";
  } else {
    kiirando = "A kedvenc színed: " + valasztottSzin.nev;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kedvenc szín választó</h1>

      <select value={valasztottNev} onChange={valtozas}>
        <option value="">-- Válassz egy színt --</option>
        {szinek.map(function (szin, index) {
          return (
            <option key={index} value={szin.nev}>
              {szin.nev}
            </option>
          );
        })}
      </select>

      <h2>{kiirando}</h2>

      <Panel szin={valasztottSzin} />
    </div>
  );
}

export default App;