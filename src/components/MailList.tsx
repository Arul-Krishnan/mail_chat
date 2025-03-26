import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { selectEmail } from "../redux/slices/emailSlice";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface Mail {
  id: number;
  subject: string;
  sender: string;
}

interface MailListProps {
  mails: Mail[];
}

const MailList = ({ mails }: MailListProps) => {
  const dispatch: AppDispatch = useDispatch();
  const selectedEmail = useSelector((state: RootState) => state.email.selectedEmail);
  console.log(selectedEmail);
  return (
    <List>
      {mails.map((mail) => (
        <ListItem key={mail.id} disablePadding>
          <ListItemButton
            // selected={selectedEmail.id === mail.id}
            onClick={() => dispatch(selectEmail(mail))}
          >
            <ListItemAvatar>
              <Avatar alt={mail.sender} src="../assets/icons/email.png" />
            </ListItemAvatar>
            <ListItemText primary={mail.subject} secondary={mail.sender} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MailList;
