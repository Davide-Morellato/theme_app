//
//
//importo gli HOOKS useState & createContext
import { useState, createContext } from "react";

import "./App.css";
import Card from "./components/card/card.component"; //importo il componente Card
import ErrorBoundaries from "./components/errorBoundaries/errorBoundaries.component"; //importo il componente Error

//esporto la variabile themeContent per essere poi importata nei componenti figli
//[createContext con valore di default false -> restituisce l'inizializzazione del contesto]
export const themeContent = createContext(true);

function App() {
  //dichiaro una variabile per ancorare il valore di default "false" di createContext allo state del componente (useState)
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
      {/* Inserisco il componente ErrorBoundaries che racchiuderà il componente Card */}
      <ErrorBoundaries>

        {/* aggiungo il PROVIDER che aggiornerà il valore (value) ad esso associato (darkTheme) */}
        <themeContent.Provider value={darkTheme}>
          {/* inserisco il componente Card */}
          {/* aggiungo l'attributo testo con una stringa e poi nel componente lo invoco per essere stampato in pagina */}
          <Card testo="Contatore" />

          {/* inserisco il bottone per la variazione del tema dell'applicazione -> al click il createContext deve aggiornarsi */}
          <button onClick={() => setDarkTheme(!darkTheme)} className="button_color">
            Change Color
          </button>

        </themeContent.Provider>
      </ErrorBoundaries>
    </div>
  );
}

export default App;
