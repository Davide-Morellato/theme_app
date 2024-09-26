//importo gli HOOKS useState & createContext
import { useState, createContext } from "react";

import "./App.css";
import Card from "./components/card/card.component"; //importo il componente Card
import ErrorBoundaries from "./components/errorBoundaries/errorBoundaries.component"; //importo il componente Error

import { ThemeProvider } from "./contexts/theme-context"; //importo il componente PROVIDER di theme-context

//esporto la variabile themeContent per essere poi importata nei componenti figli
//[createContext con valore di default false -> restituisce l'inizializzazione del contesto]
// export const themeContent = createContext(true); -> SPOSTATO nel theme-context

function App() {
  //dichiaro una variabile per ancorare il valore di default "false" di createContext allo state del componente (useState)
  // const [darkTheme, setDarkTheme] = useState(false); -> SPOSTATO nel theme-context

  return (
    <div className="App">
      {/* Inserisco il componente ErrorBoundaries che racchiuderà il componente Card */}
      <ErrorBoundaries>
        {/* aggiungo il PROVIDER globale che aggiornerà il valore darkTheme del theme-context*/} 
        <ThemeProvider>
          {/* inserisco il componente Card */}
          {/* aggiungo l'attributo testo con una stringa e poi nel componente lo invoco per essere stampato in pagina */}
          <Card testo="Contatore" />
        </ThemeProvider>
      </ErrorBoundaries>
    </div>
  );
}

export default App;
