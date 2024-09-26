import React, {useState, useContext, createContext}from "react";

//esporto la variabile themeContent per creare un nuovo context (createContext), così da essere importata nei componenti figli
//NB -> non definisco alcun valore al createContext, perchè avrà come valore di default FALSE
export const themeContent = createContext();

//creo un HOOK personalizzato per aggiornare il themeContent
export const useTheme = () => useContext(themeContent)

//creo un FC ThemeProvider da annidare (quindi sfrutto {children})
export const ThemeProvider = ({children}) => {

  //dichiaro una variabile per ancorare il valore di default di createContext allo state del componente (useState)
  const [darkTheme, setDarkTheme] = useState(false);

  //creo una funzione per cambiare il valore di darkTheme
  const setTheme = () => setDarkTheme(previousValue => !previousValue);

  //restituisco il provider (themeContent) a cui associo il darkTheme ed la funzione setTheme per il cambio valore
  return(
    <themeContent.Provider value={{darkTheme, setTheme}}>
        {/* inserisco children così da passare il provider ai figli */}
        {children}
    </themeContent.Provider>
  )

}
