import "./datatable.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector } from "react-redux";

const DataTable = () => {
  const [Assets, setAssets] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const clientIDRoute = useSelector((state) => state.client);

  console.log(clientIDRoute);

  const columns = [
    { field: "AssetID", headerName: "AssetID ", width: 100 },
    { field: "ClientID", headerName: "ClientID", width: 100 },
    { field: "AssetName", headerName: "Asset Name", width: 100 },
    {
      field: "AssetSerialNumber",
      headerName: "Asset Serial Number",
      width: 100,
    },
    { field: "AssetType", headerName: "Asset Type", width: 100 },
  ];

  useEffect(() => {
    async function getAllAssets() {
      setisLoading(true);
      const Assets = await axios.get(
        // `https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/clientassets?ClientID=${clientID}`
        "https://x6fxeu21qb.execute-api.ap-south-1.amazonaws.com/test/clientassets?ClientID=1"
      );
      setAssets(Assets.data);
      setisLoading(false);
    }
    getAllAssets();
  }, []);

  //  handle delelte function

  const handleDelete = async (assetSerialNumber, assetName) => {
    await axios.delete(
      `https://4n53lh55nc.execute-api.ap-south-1.amazonaws.com/prod/asset?assetSerialNumber=${assetSerialNumber}&assetName=${assetName}`
    );

    var remainingAssets = Assets.filter((item) => {
      console.log(item);
      return item.assetSerialNumber !== assetSerialNumber;
    });

    setAssets(remainingAssets);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              // How to access every single member from this list  ?
              to={`/home/assetList/${params.row.AssetID}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() =>
                handleDelete(params.row.assetSerialNumber, params.row.assetName)
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return isLoading ? (
    <div className="loader">
      <Box sx={{ display: "flex" }}>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  ) : (
    <div className="datatable">
      <div className="datatableTitle">
        Asset List
        <Link to="/home/assetList/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row.AssetID}
        className="datagrid"
        components={{
          LoadingOverlay: LinearProgress,
        }}
        rows={Assets}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        loading={isLoading}
      />
    </div>
  );
};

export default DataTable;
