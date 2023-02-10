import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SubPage from "./pages/SubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/detail/:id" element={ <Detail /> } />
          <Route path="/subpage/:category" element={ <SubPage /> } />
          <Route index element={ <Home /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
