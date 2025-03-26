import React from "react";
import { Link } from "react-router-dom";
import { Paper, List, ListItemButton, ListItemText, ListItemIcon } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import FolderIcon from "@mui/icons-material/Folder";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import StarIcon from "@mui/icons-material/Star";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { styled } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import NoteIcon from "@mui/icons-material/Note";
import ArchiveIcon from "@mui/icons-material/Archive";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import FindInPageIcon from "@mui/icons-material/FindInPage";

const folders = [
  { name: "Inbox", icon: () => <InboxIcon color="warning" />, url: "/" },
  { name: "Drafts", icon: () => <DraftsIcon color="primary" />, url: "/" },
  { name: "Sent Items", icon: () => <SendIcon color="primary" />, url: "/mail/compose" },
  { name: "Deleted Items", icon: () => <DeleteIcon color="primary" />, url: "/" },
  { name: "Junk Mail", icon: () => <FolderOffIcon color="primary" />, url: "/" },
  { name: "Notes", icon: () => <NoteIcon className="folder-icon" />, url: "/" },
  { name: "Archives", icon: () => <ArchiveIcon color="primary" />, url: "/" },
  { name: "Conversations History", icon: () => <QuestionAnswerIcon color="primary" /> },
  { name: "Search Folders", icon: () => <FindInPageIcon color="primary" /> },
];

const favorites = [
  { name: "Inbox", icon: () => <InboxIcon color="warning" />, url: "/" },
  { name: "Sent Items", icon: () => <SendIcon color="primary" />, url: "/mail/compose" },
  { name: "Drafts", icon: () => <DraftsIcon color="primary" />, url: "/" },
];

const SidebarList = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 20,
    paddingRight: 20,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const MailSidebar: React.FC = () => {
  const [openFolders, setOpenFolders] = React.useState(false);
  const [openFavorites, setOpenFavorites] = React.useState(true);
  return (
    <Paper sx={{ height: "100%", p: 0 }}>
      <SidebarList component="nav" sx={{ height: "500px", overflowY: "auto", overflowX: "hidden" }}>
        {/* Favorites Section */}
        <ListItemButton onClick={() => setOpenFavorites(!openFavorites)}>
          <ListItemIcon>
            <StarIcon color="warning" />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
          {openFavorites ? <KeyboardArrowDown /> : <ArrowRight />}
        </ListItemButton>
        <Collapse in={openFavorites} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {favorites.map((fav) => (
              <ListItemButton key={fav.name} sx={{ pl: 4 }} component={Link} to={fav.url ?? "#"}>
                <ListItemIcon>
                  {fav.icon()} {/* Call the function to render the icon */}
                </ListItemIcon>
                <ListItemText primary={fav.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {/* Folders Section */}
        <ListItemButton onClick={() => setOpenFolders(!openFolders)}>
          <ListItemIcon>
            <FolderIcon className="folder-icon" />
          </ListItemIcon>
          <ListItemText primary="Folders" />
          {openFolders ? <KeyboardArrowDown /> : <ArrowRight />}
        </ListItemButton>
        <Collapse in={openFolders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {folders.map((folder) => (
              <ListItemButton
                key={folder.name}
                sx={{ pl: 4 }}
                component={Link}
                to={folder.url ?? "#"}
              >
                <ListItemIcon>
                  {folder.icon()} {/* Call the function to render the icon */}
                </ListItemIcon>
                <ListItemText primary={folder.name} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </SidebarList>
    </Paper>
  );
};

export default MailSidebar;
