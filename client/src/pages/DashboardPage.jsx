import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/side-bar/SideBar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PostAddIcon from "@mui/icons-material/PostAdd";
import useMenu from "../hooks/useMenu";

export default function AddProductPage() {
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
  });

  const { getBackOfficeMenus, backOfficeMenus } = useMenu();

  useEffect(() => {
    getBackOfficeMenus();
  }, []);

  const handlerInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productData);
  };
  return (
    <Stack
      id="Dashboard-Container"
      direction={"row"}
      justifyContent="space-between"
      width="100%"
      height="100vh"
    >
      <SideBar indexSideBar={0} menuList={backOfficeMenus} />
      <Stack
        width={"100%"}
        backgroundColor="#F7F8FC"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={4}
      >
        <Typography variant="h6">Overview Page</Typography>
      </Stack>
    </Stack>
  );
}
