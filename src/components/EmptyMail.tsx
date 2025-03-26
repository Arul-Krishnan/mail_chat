import { Box, Typography } from "@mui/material";
import emptyMail from "../assets/images/emptyMail.jpg";

export default function EmptyMail() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        py: 5,
      }}
    >
      <Typography variant="h5" gutterBottom>
        <img src={emptyMail} alt="Empty Mail" style={{ width: "100%", height: "300px" }} />
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Please select a folder or search for emails
      </Typography>
    </Box>
  );
}
