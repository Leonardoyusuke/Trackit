import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Componentes/FirstPage";
import GlobalStyle from "./Componentes/GlobalStyled";
import CreateAccount from "./Componentes/CreateAccount";
import Habits from "./Componentes/Habits";
import Context from "./Componentes/Context";
import { useState } from "react";
import Hoje from "./Componentes/Hoje";
import History from "./Componentes/History";

function App() {

  //const [picture, setPicture] = useState("")
  const [day,setDay] = useState([])
  const [clicado,setClicado] = useState([false,false,false,false,false,false,false])
  const [token,setToken] = useState("")
  const [picture,setPicture] = useState("")
  const [reload,setReload] = useState(false)
  const [myHabits,setMyHabits] = useState([])
  const [percentage,setPercentage] = useState("0")
  const [listaCheck,setListaCheck] = useState([])




  return (
    <>
      <Context.Provider value={{listaCheck,setListaCheck,day,setDay,clicado,setClicado,token,setToken,picture,setPicture,reload,setReload,myHabits,setMyHabits,percentage,setPercentage}}
      >
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/cadastro" element={<CreateAccount  />} />
            <Route path="/habitos" element={<Habits  />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
