import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardMedia,
  Modal,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { projects } from "../../helpers/constants";

const OtherProjects: React.FC = () => {
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleOpenModal = (image: string) => {
    setModalImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImage(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        align="center" 
        style={{ margin: "20px 0" }}
      >
        Other Projects
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          width: '100%',
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            style={{
              width: 400,
              margin: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              avatar={<Avatar src={project.avatar} />}
              title={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography variant="h6" component="div" fontWeight="bold">
                    {project.title}
                  </Typography>
                  {project.new && (
                    <span
                      style={{
                        marginTop: 5,
                        padding: "2px 6px",
                        borderRadius: "12px",
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        fontSize: "12px",
                      }}
                    >
                      New
                    </span>
                  )}
                </div>
              }
            />
            <CardContent style={{ flex: "1" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
              </Typography>

              {project.contentImage && (
                <CardMedia
                  component="img"
                  height="200"
                  image={project.contentImage}
                  alt={project.title}
                  style={{ marginTop: "10px", cursor: "zoom-in" }}
                  onClick={() => handleOpenModal(project.contentImage ?? "")}
                />
              )}
            </CardContent>
            <CardActions style={{ padding: "16px", justifyContent: "center" }}>
              <Button
                size="medium"
                color="primary"
                variant="contained"
                onClick={() => window.open(project.link, "_blank")}
                fullWidth
                style={{ margin: "0 8px" }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", outline: "none" }}>
            <IconButton
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "#fff",
                zIndex: 1000,
              }}
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </IconButton>
            {modalImage && (
              <img
                src={modalImage}
                alt="Full View"
                style={{ maxWidth: "80vw", maxHeight: "80vh" }}
              />
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default OtherProjects;
