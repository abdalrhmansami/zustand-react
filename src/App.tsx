import { useSettingsStore } from "./store";
import People from "./components/people";
import AddPpl from "./components/AddPpl";
import "./app.css";

function App() {
  const toggleDarkMode = useSettingsStore((state: any) => state.toggleDarkMode);
  const dark = useSettingsStore((state: any) => state.dark);

  return (
    <div className={dark ? "dark" : ""}>
      <button onClick={toggleDarkMode}>Dark Mode</button>
      <AddPpl />
      <People />
    </div>
  );
}

export default App;
