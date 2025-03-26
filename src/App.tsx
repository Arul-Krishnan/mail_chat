import "./App.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Routes from "./routes";
import { createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeContext } from "./theme/ThemeContext"; // ✅ Correct (named import)

// Create Theme Context
// export const ThemeContext = createContext({
//   toggleTheme: () => {},
//   mode: "light",
// });

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={createTheme(mode === "light" ? lightTheme : darkTheme)}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
