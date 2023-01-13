import {
  Avatar,
  Box,
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
import { randomProductImage } from "../utils/randomAvatar";

export default function AddProductPage() {
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
  });

  const { getBackOfficeMenus, backOfficeMenus } = useMenu();
  const [productImage, setProductImage] = useState("");

  const handlerInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productData);
  };

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    setProductImage(URL.createObjectURL(file));
  };

  useEffect(() => {
    getBackOfficeMenus();
    const productImage = randomProductImage();
    setProductImage(productImage);
  }, []);

  return (
    <Stack
      id="Dashboard-Container"
      direction={"row"}
      justifyContent="space-between"
      width="100%"
      height="100vh"
    >
      <SideBar indexSideBar={2} menuList={backOfficeMenus} />
      <Stack
        width={"100%"}
        backgroundColor="#F7F8FC"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={4}
      >
        <Typography variant="h6">Add Product Page</Typography>
        <Stack component="form" onSubmit={handleSubmit}>
          <Stack
            direction="column"
            justifyContent={"center"}
            alignItems="center"
          >
            <Box
              variant="contained"
              component="label"
              sx={{ width: 100, height: 100, cursor: "pointer" }}
            >
              <Avatar
                alt="Profile Picture"
                src={productImage}
                sx={{ width: "100%", height: "100%" }}
              />
              <input
                hidden
                id="upload"
                accept="image/*"
                type="file"
                name="avatar"
                onChange={handleAvatar}
              />
            </Box>
            <Typography variant="subtitle2" margin={1}>
              เลือกรูปภาพ
            </Typography>
          </Stack>
          <Grid container maxWidth={"sm"}>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Product Name</Typography>
              <TextField
                id="outlined-textarea"
                label="Product Name"
                placeholder="Please Enter Product Name"
                //   helperText="Please Enter Product Name"
                size="small"
                name="productName"
                onChange={handlerInputChange}
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Description</Typography>
              <TextField
                id="outlined-textarea"
                label="Product Description"
                placeholder="Please Enter Product Description"
                //   helperText="Please Enter Product Name"
                name="productDescription"
                onChange={handlerInputChange}
                size="small"
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Product Price</Typography>
              <TextField
                id="outlined-textarea"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Product Price"
                placeholder="Please Enter Product Price"
                //   helperText="Please Enter Product Name"
                name="productPrice"
                onChange={handlerInputChange}
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Category</Typography>
              <Stack direction={"row"}>
                <TextField
                  id="outlined-select-category"
                  select
                  label="Select Product Category"
                  //   defaultValue="EUR"
                  //   helperText="Please select Product Category"
                  name="productCategory"
                  onChange={handlerInputChange}
                  required
                  fullWidth
                  size="small"
                >
                  <MenuItem key={"option.value"} value={"option.value"}>
                    List
                  </MenuItem>
                </TextField>
                <IconButton aria-label="delete">
                  <DeleteForeverIcon />
                </IconButton>
                <IconButton aria-label="add">
                  <PostAddIcon />
                </IconButton>
              </Stack>
            </Grid>

            <Grid item xs={12} margin={1}>
              <Stack
                width={"100%"}
                direction="row"
                justifyContent={"center"}
                alignItems="center"
              >
                <Button
                  size="medium"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  ADD PRODUCT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}
