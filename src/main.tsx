import { createRoot } from "react-dom/client";
import { App } from "./App";
import EarthLine from "./EarthLine";

const root = createRoot(document.getElementById("root")!);
root.render(<EarthLine />);
