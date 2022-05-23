import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/CommonPage/Header";
import Home from "./Pages/HomePage/Home";
import Blog from "./Pages/OtherPage/Blog";
import About from "./Pages/OtherPage/About";
import NotFound from "./Pages/OtherPage/NotFound";
import Footer from "./Pages/CommonPage/Footer";
import Login from "./Pages/AuthPage/Login";
import Register from "./Pages/AuthPage/Register";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ReqireAuth from "./Pages/AuthPage/ReqireAuth";


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Blog" element={
          <ReqireAuth>
            <Blog></Blog>
          </ReqireAuth>
        }></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignOut" element={<Register></Register>}></Route>
        <Route path="/Footer" element={<Footer></Footer>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
