import React from "react";
import { Button, Container, Typography, Link } from "@mui/material";

const DISCORD_URL = "https://discord.gg/Hzrmf9WeKQ";

const Contact: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", padding: "2em 0" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" paragraph>
        To contact us, please join our Discord server:
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Discord
      </Button>
    </Container>
  );
};

export default Contact;
