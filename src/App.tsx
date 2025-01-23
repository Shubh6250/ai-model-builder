import { useState } from "react";
import DataTable from "./components/DataTable";
import CreateModelDialog from "./components/CreateModelDialog";
import { Button, TextField } from "@mui/material";

const rows = [...Array(97)].map((_, index) => ({
  id: index + 1,
  modelName: `Model ${index + 1}`,
  modelType: "Extraction",
  description: "Edit Customer",
  createdOn: "23/01/2025",
  lastTrainedOn: "29/01/2025",
  status: "Active",
}));

const columns = [
  { field: "modelName", headerName: "Model Name", flex: 1, sortable: true },
  { field: "modelType", headerName: "Model Type", flex: 1 },
  { field: "description", headerName: "Description", flex: 1 },
  { field: "createdOn", headerName: "Created On", flex: 1 },
  { field: "lastTrainedOn", headerName: "Last Trained On", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params: any) => (
      <span style={{ color: "#4caf50", fontWeight: "bold" }}>{params.value}</span>
    ),
  },
];

const App = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredRows, setFilteredRows] = useState(rows); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (data: any) => {
    console.log("Saved Data:", data);
  };

  const handleSearch = (event:any) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filteredData = rows.filter((row) =>
      row.modelName.toLowerCase().includes(searchValue)
    );
    setFilteredRows(filteredData);
  };

  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#4F46E5]">AI/ML Model Builder</h1>
        <Button
          variant="contained"
          style={{ backgroundColor: "#4F46E5", color: "#fff" }}
          onClick={handleOpen}
        >
          Create New Model
        </Button>
      </header>

     
      <div className="mb-4">
        <TextField
          label="Search Models"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          style={{ width: 250 }} 
          size="small" 
        />
      </div>

     
      <DataTable rows={filteredRows} columns={columns} />

  
      <CreateModelDialog open={open} onClose={handleClose} onSave={handleSave} />
    </div>
  );
};

export default App;
