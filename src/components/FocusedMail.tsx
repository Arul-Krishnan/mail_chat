import { Box } from "@mui/material";
import MailList from "./MailList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function FocusedMail() {
  const emails = useSelector((state: RootState) => state.email.emails);

  return (
    <Box sx={{ height: "400px", overflowY: "auto" }}>
      <MailList mails={emails} />
    </Box>
  );
}
