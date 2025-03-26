import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MailContent from "../../components/MailContent";
import MailSidebar from "../../components/MailSidebar";
import MailBox from "../../components/MailBox";

const Mail = () => {
  return (
    <Box sx={{ width: "100%", height: "20vh", display: "flex", p: 1 }}>
      <Grid container spacing={1} sx={{ width: "100%", height: "100%" }}>
        {/* Sidebar (Grid 1 - 20%) */}
        <Grid item size={2}>
          <MailSidebar />
        </Grid>

        {/* Email List (Grid 2 - 30%) */}
        <Grid item size={4}>
          <MailBox />
        </Grid>

        {/* Email Content (Grid 3 - 50%) */}
        <Grid item size={6}>
          <MailContent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mail;
