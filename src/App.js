import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Componentes/FirstPage";
import GlobalStyle from "./Componentes/GlobalStyled";
import CreateAccount from "./Componentes/CreateAccount";
import Habits from "./Componentes/Habits";
import Context from "./Componentes/Context";
import { useState } from "react";

function App() {

  //const [picture, setPicture] = useState("")
  const [day,setDay] = useState([])
  const [clicado,setClicado] = useState([false,false,false,false,false,false,false])
  const [token,setToken] = useState("")
  const [nomeHabito, setNomeHabito] = useState("")



  return (
    <>
      <Context.Provider value={{day,setDay,clicado,setClicado,token,setToken,nomeHabito,setNomeHabito}}
      >
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/cadastro" element={<CreateAccount  />} />
            <Route path="/habitos" element={<Habits  />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
