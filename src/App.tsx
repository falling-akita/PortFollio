import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { TopPage } from "./Page/MainPage";

function App() {
  return (
    <Router basename="FATMEN">
      <Routes>
        <Route path="/" element={<TopPage />} />{" "}
      </Routes>
    </Router>
  );
}

//<Router basename=""></Router>

export default App;
