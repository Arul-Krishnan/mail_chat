import React from "react";
import { Box, Paper, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import ArchiveIcon from "@mui/icons-material/Archive";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FilterListIcon from "@mui/icons-material/FilterList";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FocusedMail from "./FocusedMail";
import OtherMail from "./OtherMail";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const MailBox: React.FC = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [menuState, setMenuState] = React.useState<{ [key: string]: HTMLElement | null }>({});

  // 🟢 Generic Click Handler
  const handleClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setMenuState((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  // 🔴 Generic Close Handler
  const handleClose = (menu: string) => {
    setMenuState((prev) => ({ ...prev, [menu]: null }));
  };

  return (
    <Paper sx={{ height: "100%", overflowY: "auto", p: 2 }}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="mail_head_tab"
              mr={1}
            >
              <Tab label="Focused" className="mail_head_tab" value="1" />
              <Tab label="Other" className="mail_head_tab" value="2" />
            </TabList>
            <Button
              id="new_mail_btn"
              aria-controls={menuState["new_mail"] ? "new_mail_menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuState["new_mail"] ? "true" : undefined}
              startIcon={<LibraryAddCheckIcon />}
              variant="outlined"
              disableElevation
              onClick={(e) => handleClick(e, "new_mail")}
              className="mail_select_btn"
            ></Button>
            <StyledMenu
              id="new_mail_menu"
              anchorEl={menuState["new_mail"]}
              open={Boolean(menuState["new_mail"])}
              onClose={() => handleClose("new_mail")}
            >
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <EditIcon />
                Mail
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <FileCopyIcon />
                Event
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <ArchiveIcon />
                Group
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <MoreHorizIcon />
                Storyline Post
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <ArchiveIcon />
                Document
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <ArchiveIcon />
                Spreadsheet
              </MenuItem>
              <MenuItem onClick={() => handleClose("new_mail")} disableRipple>
                <ArchiveIcon />
                Presentation
              </MenuItem>
            </StyledMenu>

            {/* ✅ Trash Menu */}
            <Button
              id="trash_mail"
              aria-controls={menuState["trash"] ? "trash_menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuState["trash"] ? "true" : undefined}
              startIcon={<FilterListIcon />}
              variant="outlined"
              disableElevation
              onClick={(e) => handleClick(e, "trash")}
              className="mail_select_btn"
            ></Button>
            <StyledMenu
              id="trash_menu"
              anchorEl={menuState["trash"]}
              open={Boolean(menuState["trash"])}
              onClose={() => handleClose("trash")}
            >
              <MenuItem onClick={() => handleClose("trash")} disableRipple>
                <DeleteOutlineIcon />
                Delete
              </MenuItem>
              <MenuItem onClick={() => handleClose("trash")} disableRipple>
                <VolumeOffIcon />
                Ignore
              </MenuItem>
            </StyledMenu>
            {/* ✅ Sort Menu */}
            <Button
              id="sort_mail"
              aria-controls={menuState["sort"] ? "sort_menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuState["sort"] ? "true" : undefined}
              startIcon={<SwapVertIcon />}
              variant="outlined"
              disableElevation
              onClick={(e) => handleClick(e, "sort")}
              className="mail_select_btn"
            ></Button>
            <StyledMenu
              id="sort_menu"
              anchorEl={menuState["sort"]}
              open={Boolean(menuState["sort"])}
              onClose={() => handleClose("sort")}
            >
              <MenuItem onClick={() => handleClose("sort")} disableRipple>
                <DeleteOutlineIcon />
                Delete
              </MenuItem>
              <MenuItem onClick={() => handleClose("sort")} disableRipple>
                <VolumeOffIcon />
                Ignore
              </MenuItem>
            </StyledMenu>
          </Box>
          <TabPanel value="1" className="panel_custom_design">
            <FocusedMail />
          </TabPanel>
          <TabPanel value="2" className="panel_custom_design">
            <OtherMail />
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
  );
};

export default MailBox;
