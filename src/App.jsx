import "./App.css";
import Navbar from "./components/ui/Navbar/Navbar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import PhpPage from "./pages/PhpPage";
import HtmlPage from "./pages/htmlPage";
import CssPage from "./pages/cssPage";
import JsPage from "./pages/jsPage";
import Inicio from "./pages/Inicio";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Inicio />} />
      <Route path=":path" element={<HtmlPage />} />
      <Route path=":path" element={<CssPage />} />
      <Route path=":path" element={<JsPage />} />
      <Route path=":path" element={<PhpPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
