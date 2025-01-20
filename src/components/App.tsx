import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../const";
import Register from "../components/auth/register";
import Login from "../components/auth/login";
import Header from "../components/header/header";
import Menu from "../components/menu/menu"
import Search from "./search/search";
import PostEditor from "./post-editor/post-editor";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Register} element={<Register />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Header} element={<Header />} />
          <Route path={AppRoute.Menu} element={<Menu />} />
          <Route path={AppRoute.Search} element={<Search/>} />
          <Route path={AppRoute.PostEditor} element={<PostEditor/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
