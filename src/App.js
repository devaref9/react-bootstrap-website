import { Route, Routes } from "react-router-dom";
import { Layout } from "./containers";
import { HomePage } from "./pages";
import NoMatchPage from "./pages/NoMatchPage/NoMatchPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
