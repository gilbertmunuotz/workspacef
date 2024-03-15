import Body from "./components/Body";
import Home from "./components/Home";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category1 from "./components/Cat1";
import Category2 from "./components/Cat2";
import Category3 from "./components/Cat3";
import Notfound from "./components/Notfound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Category1", element: <Category1 />, errorElement: <Notfound /> },
  { path: "/Category2", element: <Category2 />, errorElement: <Notfound /> },
  { path: "/Category3", element: <Category3 />, errorElement: <Notfound /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Navbar />
      <Home />
      <Body />
      <Form />
      <Footer />
    </RouterProvider>
  );
}

export default App;
