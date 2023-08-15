import { Routes, Route } from "react-router-dom";
import BookLove from "./booklove";
import { HashRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";


function App() {
  return (
    <HashRouter>
    <div className="container">
      <Routes>
      <Route path="/" element={<Navigate to ="/booklove"/>}/>
      <Route path="/booklove" element={<BookLove/>}/>
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
