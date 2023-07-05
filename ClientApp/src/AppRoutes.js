
import Home from "./components/Home";
import Inventory from "./inventory/Inventory";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/inventory',
    element: <Inventory />
  }
];

export default AppRoutes;
