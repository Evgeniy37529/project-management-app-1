import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/login/LoginPage';
import SignUp from '../pages/sign-up/SignUpPage';
import Footer from '../Components/footer/Footer.component';
import { WelcomePage } from '../pages/WelcomPage/WelcomPage';
import './App.css';
import Header from '../Components/header/Header.component';
import Boards from '../pages/boards/boards';
import Board from '../pages/board/board';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/boards/:id" element={<Board />} />
        <Route path="/404" />
        <Route path="/welcome" />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" />
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
