import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ServiceLayout from "./components/ServiceLayout";
import Detail from "./pages/Detail";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SubPage from "./pages/SubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/detail/:id" element={ <Detail /> } />
          <Route path="/subpage/:category" element={ <SubPage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route index element={ <Home /> } />
          <Route path="/servicecenter" element={<ServiceLayout />}>
            <Route path="/servicecenter/faq" element={ <Faq /> } />
            <Route path="/servicecenter/inquiry" element={ <Inquiry /> } />
            <Route path="/servicecenter/terms" element={ <Faq /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
