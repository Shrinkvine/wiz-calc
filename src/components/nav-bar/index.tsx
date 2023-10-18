import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<HomeIcon />}
          color="inherit"
          style={{ marginRight: 15 }}
        >
          Wizard101 Spell Damage Calculator
        </Button>
        </Typography>

        <Button
          component={RouterLink}
          to="/other-projects"
          startIcon={<FolderSpecialIcon />}
          color="inherit"
        >
          Other Projects
        </Button>

        <Button
          component={RouterLink}
          to="/contact"
          startIcon={<ContactMailIcon />}
          color="inherit"
          style={{ marginRight: 15 }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
