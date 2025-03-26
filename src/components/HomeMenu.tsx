import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

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

const HomeMenu = () => {
  // 🔥 Dynamic State Object to Store Multiple Menus
  const [menuState, setMenuState] = useState<{ [key: string]: HTMLElement | null }>({});

  // 🟢 Generic Click Handler
  const handleClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setMenuState((prev) => ({ ...prev, [menu]: event.currentTarget }));
  };

  // 🔴 Generic Close Handler
  const handleClose = (menu: string) => {
    setMenuState((prev) => ({ ...prev, [menu]: null }));
  };

  return (
    <div className="menu_btn_container">
      {/* ✅ New Mail Menu */}
      <Button
        id="new_mail_btn"
        aria-controls={menuState["new_mail"] ? "new_mail_menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuState["new_mail"] ? "true" : undefined}
        startIcon={<MailOutlineIcon />}
        variant="outlined"
        disableElevation
        onClick={(e) => handleClick(e, "new_mail")}
        endIcon={<KeyboardArrowDownIcon />}
      >
        New Mail
      </Button>
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
        startIcon={<DeleteIcon />}
        variant="outlined"
        disableElevation
        onClick={(e) => handleClick(e, "trash")}
        endIcon={<KeyboardArrowDownIcon />}
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

      {/* Other Buttons */}
      <Button startIcon={<DeleteIcon />} variant="outlined">
        Reply
      </Button>
      <Button startIcon={<MailOutlineIcon />} variant="outlined">
        Delete
      </Button>
    </div>
  );
};

export default HomeMenu;
