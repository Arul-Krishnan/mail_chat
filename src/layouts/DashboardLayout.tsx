import { useState, useContext, React } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  Avatar,
  Tooltip,
  Divider,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { ThemeContext } from "../theme/ThemeContext"; // Import theme context
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import RuleIcon from "@mui/icons-material/Rule";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import AppsIcon from "@mui/icons-material/Apps";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import HelpIcon from "@mui/icons-material/Help";
import { useNavigate, Outlet } from "react-router-dom";
import "../style/LayoutStyles.scss";
import HomeMenu from "../components/HomeMenu";

const drawerWidth = 280;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Mail", icon: <MailIcon />, path: "/mail" },
  { text: "Calendar", icon: <CalendarMonthIcon />, path: "/products" },
  { text: "People", icon: <PeopleIcon />, path: "/settings" },
  { text: "Groups", icon: <Diversity2Icon />, path: "/settings" },
  { text: "ToDo", icon: <RuleIcon />, path: "/settings" },
  { text: "OneDrive", icon: <CloudDoneIcon />, path: "/settings" },
  { text: "More Apps", icon: <AppsIcon />, path: "/settings" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { toggleTheme, mode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [value, setValue] = useState("home");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 64,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : 64,
            transition: "width 0.3s ease-in-out",
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>
          <IconButton className="btn-outline-none" onClick={toggleDrawer}>
            <MenuIcon className="menu-cus-size" />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding onClick={() => navigate(path)}>
              <ListItemButton className="pl-0">
                <IconButton className="custom-menu-icon-size" sx={{ ml: open ? 0 : 1 }}>
                  {icon}
                </IconButton>
                {open && <ListItemText primary={text} sx={{ ml: 2 }} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "background.default",
          transition: "margin-left 0.3s ease-in-out",
          // ml: open ? `${drawerWidth}px` : "64px",
        }}
      >
        {/* Header */}
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1300,
            width: `calc(100% - ${open ? drawerWidth : 64}px)`,
            transition: "width 0.3s ease-in-out",
          }}
        >
          <Toolbar>
            <Typography className="text-align-justify" variant="h6" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>

            {/* Icons */}
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Messages">
              <IconButton color="inherit">
                <EmailIcon />
              </IconButton>
            </Tooltip>

            {/* Theme Toggle Button */}
            <Tooltip title="Toggle Light/Dark Mode">
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>

            {/* Profile Avatar */}
            <Avatar sx={{ ml: 2 }} alt="User" src="/profile.jpg" />
          </Toolbar>
        </AppBar>

        {/* Page Content */}
        <Toolbar className="custom-toolbar">
          <Box sx={{ width: "100%" }}>
            {/* Tabs Navigation */}
            <Tabs value={value} onChange={handleChange}>
              <Tab icon={<HomeIcon />} value="home" />
              <Tab value="view" icon={<ScreenshotMonitorIcon />} />
              <Tab value="help" icon={<HelpIcon />} />
            </Tabs>

            {/* Outlook-Style Menu (Toolbar) */}
            <Toolbar sx={{ backgroundColor: "background.paper", minHeight: "48px", mt: 1 }}>
              {value === "home" && <HomeMenu />}

              {value === "view" && (
                <>
                  <Button startIcon={<MailOutlineIcon />} variant="outlined">
                    Reading Pane
                  </Button>
                  <Button startIcon={<MailOutlineIcon />} variant="outlined">
                    Sort By
                  </Button>
                </>
              )}

              {value === "help" && (
                <>
                  <Button startIcon={<MailOutlineIcon />} variant="outlined">
                    Help Topics
                  </Button>
                  <Button startIcon={<MailOutlineIcon />} variant="outlined">
                    Contact Support
                  </Button>
                </>
              )}
            </Toolbar>
          </Box>
        </Toolbar>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
