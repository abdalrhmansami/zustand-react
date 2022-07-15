import { useSettingsStore } from "./store";
import People from "./components/People";
import AddPpl from "./components/AddPpl";
import "./app.css";

function App() {
  const toggleDarkMode = useSettingsStore((state: { toggleDarkMode: any; }) => state.toggleDarkMode);
  const dark = useSettingsStore((state: { dark: any; }) => state.dark);

  return (
    <div className={dark ? "dark" : ""}>
      <button onClick={toggleDarkMode}>Dark Mode</button>
      <AddPpl />
      <People />
    </div>
  );
}

export default App;
