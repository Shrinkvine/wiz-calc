import React, { useState } from "react";
import {
  TextField,
  Paper,
  Box,
  Typography,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  wizardStats,
  buffs,
  debuffs,
  Effect,
  EffectType,
} from "../../helpers/constants";
import BuffDebuff from "../buffs-debuffs";
import "./index.css";

const Home: React.FC = () => {
  const [currentInputs, setCurrentInputs] = useState<Effect[]>(wizardStats);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange =
    (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseFloat(event.target.value) || 0;
      const updatedValues = currentInputs.map((a) =>
        a.id === id ? { ...a, value } : { ...a }
      );
      setCurrentInputs(updatedValues);
    };

  const handleAddClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteClick = (id: string) => {
    setCurrentInputs((prevInputs) =>
      prevInputs.filter((input) => input.id !== id)
    );
  };

  const handleMenuItemClick = (
    text: string,
    icon: string,
    type: EffectType
  ) => {
    setAnchorEl(null);
    setCurrentInputs([
      ...currentInputs,
      { text, icon, type, id: `${text}-${type}-${Date.now()}` },
    ]);
  };

  const calculate = () => console.log(currentInputs);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hasBuffs = currentInputs.some((input) =>
    buffs.some((buff) => buff.text === input.text)
  );
  const hasDebuffs = currentInputs.some((input) =>
    debuffs.some((debuff) => debuff.text === input.text)
  );

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper elevation={3} style={{ padding: "20px", width: "60%" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Wizard101 Spell Damage Calculator
        </Typography>
        <Grid container spacing={3}>
          <BuffDebuff
            title="Wizard Stats"
            currentInputs={currentInputs}
            handleChange={handleChange}
            handleDeleteClick={handleDeleteClick}
          />

          {hasBuffs && (
            <BuffDebuff
              title="Buffs"
              currentInputs={currentInputs}
              handleChange={handleChange}
              handleDeleteClick={handleDeleteClick}
            />
          )}
          {hasDebuffs && (
            <BuffDebuff
              title="Debuffs"
              currentInputs={currentInputs}
              handleChange={handleChange}
              handleDeleteClick={handleDeleteClick}
            />
          )}
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Button onClick={handleAddClick} className="button-div add-button">
              <AddIcon />
              Buff/Debuff
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {[...buffs, ...debuffs].map(({ text, icon, type }, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleMenuItemClick(text, icon, type)}
                >
                  <Avatar src={icon} alt={text} />
                  {text}
                </MenuItem>
              ))}
            </Menu>
            <Button className="calc-button button-div" onClick={calculate}>
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
