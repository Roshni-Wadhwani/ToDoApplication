import "./App.css";
import MainPage from "./components/MainPage";
import { UserForm } from "./components/AddPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewPage from "./components/ViewPage";
import DeletePage from "./components/DeletePage";
import UpdatePage from "./components/UpdatePage";
import UpdateForm from "./components/UpdateForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>} />
          <Route path="/add" element={<UserForm />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/delete" element={<DeletePage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
