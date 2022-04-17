import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Doctorpage from "./pages/Doctorpage";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Doctorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
