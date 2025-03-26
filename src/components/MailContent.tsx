import { Paper, Typography, Stack, Button, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PrintIcon from "@mui/icons-material/Print";
import DownloadIcon from "@mui/icons-material/Download";
import EmptyMail from "./EmptyMail";

const MailContent: React.FC = () => {
  const selectedEmail = useSelector((state: RootState) => state.email.selectedEmail);

  if (!selectedEmail) {
    return (
      <Typography variant="h6" sx={{ p: 2 }}>
        <EmptyMail />
      </Typography>
    );
  }

  return (
    <Paper sx={{ height: "100%", p: 2, display: "flex", flexDirection: "column" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          {selectedEmail.subject}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small" startIcon={<DownloadIcon />}>
            Download
          </Button>
          <Button variant="outlined" size="small" startIcon={<PrintIcon />}>
            Print
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle1" color="textSecondary" mb={1}>
        From: {selectedEmail.sender}
      </Typography>
      <Typography variant="body1">{selectedEmail.content}</Typography>
    </Paper>
  );
};

export default MailContent;
