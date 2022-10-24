import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";
import { Button } from "react-bootstrap";
import storeItems from "./data/items2.json";
import { formatRoutes } from "./utilities/formatRoutes";

function App() {
  var array: any = storeItems[1].Men;
  var sex = "Men";
  let renderItems = formatRoutes({ array, sex });
  sex = "Women";
  array = storeItems[0].Women;
  let renderItems1 = formatRoutes({ array, sex });
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/women"
          element={<Women sex="Women" component={<Button></Button>} />}
        />
        <Route
          path="/men"
          element={<Men sex="Men" component={<Button></Button>} />}
        />
        {renderItems}
        {renderItems1}
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
