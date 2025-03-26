import { useContext } from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { ThemeContext } from "../App";

const colors = ["#1976d2", "#ff5722", "#4caf50", "#9c27b0", "#ffeb3b"];

const Settings = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {/* Theme Toggle */}
      <Typography variant="h6" sx={{ mt: 2 }}>
        Theme Mode
      </Typography>
      <Button variant="contained" onClick={toggleTheme}>
        {mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </Button>

      {/* Color Options */}
      <Typography variant="h6" sx={{ mt: 4 }}>
        Primary Color
      </Typography>
      <Stack direction="row" spacing={2}>
        {colors.map((color) => (
          <Paper
            key={color}
            sx={{
              width: 50,
              height: 50,
              backgroundColor: color,
              cursor: "pointer",
              borderRadius: "50%",
            }}
            onClick={() => console.log(`Set color to: ${color}`)}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Settings;
