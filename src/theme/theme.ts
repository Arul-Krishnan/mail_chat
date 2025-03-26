import { ThemeOptions } from "@mui/material/styles";

// Define Light Theme
const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff5722" },
    background: { default: "#f4f6f8", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#555555" },
  },
};

// Define Dark Theme
const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#ff8a65" },
    background: { default: "#121212", paper: "#1e1e1e" },
    text: { primary: "#ffffff", secondary: "#bbbbbb" },
  },
};

// Export themes
export { lightTheme, darkTheme };
