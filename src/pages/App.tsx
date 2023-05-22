import Layout from "../components/layout/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/:id" element={<Detail />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
