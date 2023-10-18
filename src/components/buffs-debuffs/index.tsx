import React from "react";
import {
  Grid,
  Avatar,
  TextField,
  IconButton,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Effect, buffs, debuffs, wizardStats, Titles } from "../../helpers/constants";

interface BuffsDebuffsProps {
  title: string;
  currentInputs: Effect[];
  handleChange: (
    id: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteClick: (id: string) => void;
}

const BuffDebuff: React.FC<BuffsDebuffsProps> = ({
  title,
  currentInputs,
  handleChange,
  handleDeleteClick,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" mt={3} mb={3}>
          <Divider style={{ width: "100%" }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
      </Grid>
      {currentInputs
        .filter((input) =>
          (title === Titles.BUFFS
            ? buffs
            : title === Titles.DEBUFFS
            ? debuffs
            : wizardStats
          ).some((item) => item.text === input.text)
        )
        .map((input, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box display="flex" alignItems="center">
              <Avatar src={input.icon} alt={input.text} />
              <TextField
                fullWidth
                margin="dense"
                label={input.text}
                variant="outlined"
                type="number"
                onChange={handleChange(input.id as string)}
              />
              {!input.required && (
                <IconButton
                  onClick={() => handleDeleteClick(input.id as string)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          </Grid>
        ))}
    </>
  );
};

export default BuffDebuff;
