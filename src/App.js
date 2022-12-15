import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Componentes/FirstPage";
import GlobalStyle from "./Componentes/GlobalStyled";
import CreateAccount from "./Componentes/CreateAccount";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/cadastro" element={<CreateAccount />}  />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
