import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const CreateModelDialog = ({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: { modelName: string; modelType: string; description: string }) => void;
}) => {
  const [formData, setFormData] = useState({
    modelName: "",
    modelType: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({ modelName: "", modelType: "", description: "" });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create New Model</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Model Name"
          name="modelName"
          value={formData.modelName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Model Type"
          name="modelType"
          value={formData.modelType}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateModelDialog;
