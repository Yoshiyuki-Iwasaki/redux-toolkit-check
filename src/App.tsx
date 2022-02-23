import Top from "./page/top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Top />} />
      </Routes>
    </Router>
  );
};

export default App;
