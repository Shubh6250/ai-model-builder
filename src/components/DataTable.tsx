import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DataTableProps {
  rows: any[];
  columns: GridColDef[];
}

const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
        style={{
          border: "none",
        }}
      />
    </div>
  );
};

export default DataTable;
