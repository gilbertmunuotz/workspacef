import Index from "./components/Index";
import Category1 from "./components/Cat1";
import Category2 from "./components/Cat2";
import Category3 from "./components/Cat3";
import Notfound from "./components/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <Notfound /> },
  { path: "/Category1", element: <Category1 />, errorElement: <Notfound /> },
  { path: "/Category2", element: <Category2 />, errorElement: <Notfound /> },
  { path: "/Category3", element: <Category3 />, errorElement: <Notfound /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
