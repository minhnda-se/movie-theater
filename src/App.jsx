import { useState } from "react";
import MainRoutes from "./app/routes/MainRoutes";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return <MainRoutes />;
}

export default App;
