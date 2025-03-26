import { Box } from "@mui/material";
import MailList from "./MailList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function OtherMail() {
  const emails = useSelector((state: RootState) => state.email.emails);

  return (
    <Box>
      <MailList mails={emails} />
    </Box>
  );
}
