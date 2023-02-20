import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ServiceLayout from "./components/ServiceLayout";
import Alliance from "./pages/Alliance";
import Detail from "./pages/Detail";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import Policy from "./pages/Policy";
import SignUp from "./pages/SignUp";
import SubPage from "./pages/SubPage";
import Terms from "./pages/Terms";
import YouthProtection from "./pages/YouthProtection";

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
            <Route path="/servicecenter/terms" element={ <Terms /> } />
            <Route path="/servicecenter/policy" element={ <Policy /> } />
            <Route path="/servicecenter/protection" element={ <YouthProtection /> } />
            <Route path="/servicecenter/notice" element={ <Notice /> } />
            <Route path="/servicecenter/alliance" element={ <Alliance /> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
