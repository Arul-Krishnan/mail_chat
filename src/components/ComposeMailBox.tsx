import * as React from "react";
import {
  Paper,
  Typography,
  Stack,
  Divider,
  IconButton,
  Button,
  ButtonGroup,
  Grow,
  Popper,
  Chip,
  Input,
  //   InputAdornment,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useDropzone } from "react-dropzone";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MultiEmailInput from "./MultiEmailInput";

const options = ["Send", "Schedule send", "Start mail merge"];

const ComposeMailBox: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  const [to, setTo] = React.useState("");
  const [cc, setCc] = React.useState("");
  const [bcc, setBcc] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [attachments, setAttachments] = React.useState([]);

  const onDrop = (acceptedFiles) => {
    setAttachments([...attachments, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Send Mail Handler (Mock)
  const handleClick = () => {
    const emailData = {
      to,
      cc,
      bcc,
      subject,
      body,
      attachments,
    };
    // const emailData = {
    //   sender: {
    //     email: "user@example.com", // Replace with sender's email
    //     name: "Sender Name", // Replace with sender's name
    //     type: "personal", // or "business"
    //   },
    //   recipients: [
    //     {
    //       email: to, // Replace with recipient email from state
    //       name: "Recipient Name", // Replace with recipient's name
    //       type: "to", // or "cc" / "bcc"
    //     },
    //   ],
    //   subject,
    //   body_plain: body,
    //   body_html: `<p>${body}</p>`, // Convert to HTML if needed
    //   attachments,
    //   status: "sent", // "draft" or "sent"
    //   labels: [],
    //   is_read: false,
    //   is_starred: false,
    //   thread_id: "thread-12345", // Generate dynamically if needed
    //   created_at: new Date().toISOString(),
    //   updated_at: new Date().toISOString(),
    // };
    console.log("Sending Email:", emailData);
    alert("Email Sent Successfully!");
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };
  const handleEmailsChange = (emails, field) => {
    if (field === "To") {
      setTo(emails);
    }

    if (field === "Cc") {
      setCc(emails);
    }

    if (field === "Bcc") {
      setBcc(emails);
    }

    console.log(`${field}:`, emails);
  };

  return (
    <Paper sx={{ height: "100%", p: 2, display: "flex", flexDirection: "column" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="Button group with a nested menu"
          >
            <Button
              variant="contained"
              onClick={handleClick}
              startIcon={<SendIcon fontSize="inherit" />}
              size="small"
            >
              {options[selectedIndex]}
            </Button>
            <Button
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="subtitle1" color="textSecondary" mb={1}>
        <MultiEmailInput label="To" onChange={(emails) => handleEmailsChange(emails, "To")} />
        <MultiEmailInput label="Cc" onChange={(emails) => handleEmailsChange(emails, "Cc")} />
        <MultiEmailInput label="Bcc" onChange={(emails) => handleEmailsChange(emails, "Bcc")} />
        <Input
          placeholder="add subject"
          value={subject}
          fullWidth
          aria-label="add subject"
          onChange={(e) => setSubject(e.target.value)}
          margin="dense"
          className="mb-2"
        />
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
        />
        {/* File Upload Section */}
        <div
          {...getRootProps()}
          style={{
            padding: "10px",
            border: "1px dashed gray",
            cursor: "pointer",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag & Drop or Click to Upload Attachments</p>
          <IconButton color="primary">
            <AttachFileIcon />
          </IconButton>
        </div>
      </Typography>
      <Typography variant="body1">
        {/* Display Attachments */}
        {attachments.length > 0 && (
          <div style={{ marginBottom: "10px" }}>
            {attachments.map((file, index) => (
              <Chip
                key={index}
                label={file.name}
                onDelete={() => setAttachments(attachments.filter((_, i) => i !== index))}
                style={{ margin: "5px" }}
              />
            ))}
          </div>
        )}
      </Typography>
    </Paper>
  );
};

export default ComposeMailBox;
