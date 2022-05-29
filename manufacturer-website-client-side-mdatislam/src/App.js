import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/CommonPage/Header";
import Home from "./Pages/HomePage/Home";
import Blog from "./Pages/OtherPage/Blog";
import About from "./Pages/OtherPage/About";
import NotFound from "./Pages/OtherPage/NotFound";
import Footer from "./Pages/CommonPage/Footer";
import Login from "./Pages/AuthPage/Login";
import Dashboard from "./Pages/AuthPage/Dashboard/Dashbord";
import MyProfile from "./Pages/AuthPage/Dashboard/Profile";
import MyOrderList from "./Pages/AuthPage/Dashboard/MyOrderList";
import Register from "./Pages/AuthPage/Register";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ReqireAuth from "./Pages/AuthPage/ReqireAuth";
import Purchase from './Pages/AuthPage/Purchase';
import ReviewAdd from "./Pages/AuthPage/Dashboard/ReviewAdd";


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Purchase/:id" element={
          <ReqireAuth>
            <Purchase/>
          </ReqireAuth>
        }></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path="MyOrderList" element={<MyOrderList></MyOrderList>}></Route>
        <Route path="ReviewAdd" element={<ReviewAdd></ReviewAdd>}></Route>
        </Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Blog" element={<Blog></Blog>}></Route>
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
