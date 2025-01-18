import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../const";
import Register from "../components/auth/register";
import Login from "../components/auth/login";
import Header from "../components/header/header";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Register} element={<Register />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Header} element={<Header />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
