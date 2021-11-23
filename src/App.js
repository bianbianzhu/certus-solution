import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MatchedPage from "./pages/MatchedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MatchedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
