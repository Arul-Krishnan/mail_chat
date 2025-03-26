import React from "react";
import { Autocomplete, Box, Chip, TextField, Avatar, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnTotalSilenceIcon from "@mui/icons-material/DoNotDisturbOnTotalSilence";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";
import OutboundIcon from "@mui/icons-material/Outbound";
import CircleIcon from "@mui/icons-material/Circle";

const emailList = [
  {
    email: "arul@example.com",
    name: "Arul Krishnan",
    status: "Away",
    profileImage: "https://mui.com/static/images/avatar/1.jpg",
  },
  {
    email: "john@example.com",
    name: "John Doe",
    status: "Active",
    profileImage: "../assets/images/profile.jpg",
  },
  {
    email: "jane@example.com",
    name: "Jane Smith",
    status: "Offline",
    profileImage: "../assets/images/profile.jpg",
  },
  {
    email: "mike@example.com",
    name: "Mike Johnson",
    status: "Out of Office",
    profileImage: "../assets/images/profile.jpg",
  },
];

const MultiEmailInput = ({ label, onChange }) => {
  const [emails, setEmails] = React.useState([]);
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false; // Prevent updates when unmounted
    };
  }, []);

  const handleEmailSelect = (event, newValue) => {
    if (isMounted.current) {
      console.log("New Value: ", newValue);
      setEmails(newValue);
      onChange(newValue);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2px",
          borderRadius: "4px",
          alignItems: "center",
        }}
      >
        <Autocomplete
          multiple
          fullWidth
          options={emailList}
          getOptionLabel={(option) => `${option.name} <${option.email}>`}
          value={emails}
          onChange={handleEmailSelect}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index }); // Extract key separately
              let icons = "";
              if (option.status === "Active") {
                icons = <CheckCircleIcon color="success" />;
              } else if (option.status === "Away") {
                icons = <AccessTimeFilledIcon color="warning" />;
              } else if (option.status === "Offline") {
                icons = <CancelIcon color="action" />;
              } else if (option.status === "Out of Office") {
                icons = <OutboundIcon color="secondary" />;
              } else if (option.status === "Busy") {
                icons = <CircleIcon color="error" />;
              } else if (option.status === "Do not Disturb") {
                icons = <DoNotDisturbOnTotalSilenceIcon color="error" />;
              } else {
                icons = <CancelIcon color="action" />;
              }
              return <Chip icon={icons} key={key} label={option.name} {...tagProps} />;
            })
          }
          renderOption={(props, option) => (
            <li {...props} style={{ display: "flex", alignItems: "center", padding: "8px" }}>
              <Avatar alt={option.name} src={option.profileImage} sx={{ marginRight: 1 }}>
                {option.name.charAt(0)} {/* Show first letter if no profile image */}
              </Avatar>
              <div>
                <Typography variant="body1">{option.name}</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 1.2 }}>
                  {option.email}
                </Typography>
              </div>
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} placeholder={label} variant="standard" fullWidth />
          )}
        />
      </Box>
    </Box>
  );
};

export default MultiEmailInput;
