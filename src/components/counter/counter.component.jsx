//importo React & gli HOOKS useState, useEffect
import React, { useState, useEffect, useRef, useContext } from "react";

//importo la variabile del cambio colore themeContent
import { themeContent } from "../../App";

//importo l'HOOK personalizzato
import { useTheme } from '../../contexts/theme-context'

import "./counter.styles.scss";

const Counter = () => {
    //dichiaro una classe come oggetto da passare per lo stile in linea
    const box = {
      color: "#000000",
      backgroundColor: "#FFFFFF",
      alignSelf: "center",
      marginTop: "15px",
      padding: "0px 10px",
      borderRadius: "15px",
    };

  //definisco le proprietà per il cambio colore
  const darkWrapper = {
    backgroundColor: "#333333",
    color: "#EEEEEE",
  };

  const lightWrapper = {
    backgroundColor: "#EEEEEE",
    color: "#333333",
  };

  //dichiaro una variabile per l'HOOK useContext che deve leggere il valore importato di themeContent
  // const themeValue = useContext(themeContent);

  //creo un variabile che restituisce un array (destrutturazione) per modificare lo state, in base al suo valore di partenza da noi impostato: setState(0)
  const [count, setCount] = useState(0);

  //creo uno state basato sull'HOOK personalizzato di theme-context
  const {darkTheme, setTheme} = useTheme();

  //
  //dichiaro una funzione per l'evento onClick di Increase
  const IncreaseNumber = () => {
    //imposto la modifica dello state, invocando il metodo setCount
    //che tramite una callback mi permette di accedere al valore iniziale di count e incrementarlo
    setCount((count) => count + 1);
  };

  //dichiaro una funzione per l'evento onClick di Decrease
  const DecreaseNumber = () => {
    //
    //controllo
    //SE count > 0
    //ALLORA imposto il decremento aggiornando la proprietà setCount
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  //dichiaro la funzione useEffect come fosse componentDidMount()
  useEffect(() => {
    console.log("Primo Render");
  }, []);

  //dichiaro la funzione useEffect, definendo in base a quale valore aggiornarsi ", [count]" -> componentDidUpdate()
  useEffect(() => {
    console.log("aggiornato: " + count);
  }, [count]);

  //dichiro una variabile per l'assegnazione di useRef al bottone Increase, assegnandogli come valore di default "null"
  const inputEl = useRef(null);

  //dichiaro lo useEffect per descrivere cosa deve fare la variabile inputEl
  //current -> metodo che consente di leggere lo stato attuale dell'elemento
  //focus() -> funzione Js per impostare il focus su un elemento
  useEffect(() => {
    inputEl.current.focus();
  });

  return (
    <div className="counter">
      {/* rendo condizionale la classe */}
      <div className={`number_counter ${count >= 5 ? "red" : null}`}>
        {/* aggiungo la proprietà dello state */}
        {count}
      </div>

      {/* aggiungo un messaggio arrivati ad un determinato valore */}
      {/* passandogli come stile in linea l'oggetto dichiarato prima di render */}
      {count >= 5 ? (
        <div style={box}>
          <p>Ottimo! Sei a {count}!</p>
        </div>
      ) : null}

      {/* aggiungo il tag con il Consumer per il cambio del tema */}
      {/* <themeContent.Consumer>
        {
          value => 
            //aggiungo un controllo per lo stile -> SE value esiste, ALLORA applicare dark ALTRIMENTI light 
            <div className="wrapper_buttons" style={(value) ? darkWrapper : lightWrapper}>
              {/* aggiungo l'evento onClick per decrementare il valore di number */}
      {/* invoco la funzione nell'evento tramite un'arrow function
              <button
                type="submit"
                onClick={DecreaseNumber}
                className="button_counter"
              >
                Decrease
              </button>

              {/* aggiungo l'evento onClick per incrementare il valore di number */}
      {/* aggiungo il ref che invoca l'HOOK useRef */}
      {/* <button
                type="submit"
                ref={inputEl}
                onClick={IncreaseNumber}
                className="button_counter"
              >
                Increase
              </button>
            </div> */}
      {/* }
      </themeContent.Consumer> */}

      <div className="wrapper_buttons">
        {/* aggiungo l'evento onClick per decrementare il valore di number */}
        {/* invoco la funzione nell'evento tramite un'arrow function */}
        {/* aggiungo un controllo per lo stile -> SE darkTheme esiste, ALLORA applicare dark ALTRIMENTI light  */}
        <button
          type="submit"
          onClick={DecreaseNumber}
          className="button_counter"
          style={(darkTheme) ? darkWrapper : lightWrapper}
        >
          Decrease
        </button>

        {/* aggiungo l'evento onClick per incrementare il valore di number */}
        {/* aggiungo il ref che invoca l'HOOK useRef */}
        {/* aggiungo un controllo per lo stile -> SE darkTheme esiste, ALLORA applicare dark ALTRIMENTI light  */}
        <button
          type="submit"
          ref={inputEl}
          onClick={IncreaseNumber}
          className="button_counter"
          style={(darkTheme) ? darkWrapper : lightWrapper}
        >
          Increase
        </button>
      </div>

        {/* aggiungo un pulsante con evento al Click per il cambio del tema basato sull'HOOK personalizzato (setTheme) */}
        <button type="submit" className="button_color" onClick={setTheme}>Change Buttons Color</button>
    </div>
  );
};

//esporto il componente Counter
export default Counter;
