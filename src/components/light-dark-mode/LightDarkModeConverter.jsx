import "./theme.css";
import useLocalStorage from "./useLocalStorage";
export default function LightDarkModeConverter() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  console.log(theme);

  function handleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div className="lightMode" data-theme={theme}>
      <div className="conatiner">
        <p>Hello World</p>
        <button type="button" onClick={handleTheme}>
          Change Theme
        </button>
      </div>
    </div>
  );
}
