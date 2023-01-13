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

export default function AccountPage() {
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
  });

  const { getBackOfficeMenus, backOfficeMenus } = useMenu();

  const handlerInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(productData);
  };

  useEffect(() => {
    getBackOfficeMenus();
  }, []);

  return (
    <Stack
      id="Dashboard-Container"
      direction={"row"}
      justifyContent="space-between"
      width="100%"
      height="100vh"
    >
      <SideBar indexSideBar={3} menuList={backOfficeMenus} />
      <Stack
        width={"100%"}
        backgroundColor="#F7F8FC"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={4}
      >
        <Typography variant="h6">My Account Page</Typography>
        <Stack component="form" onSubmit={handleSubmit}>
          <Grid container maxWidth={"sm"}>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Name</Typography>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Please Enter Your Name"
                //   helperText="Please Enter Product Name"
                size="small"
                name="name"
                onChange={handlerInputChange}
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Email</Typography>
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Please Enter Your Email"
                //   helperText="Please Enter Product Name"
                name="email"
                onChange={handlerInputChange}
                size="small"
                multiline
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Phone Number</Typography>
              <TextField
                id="outlined-textarea"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Phone Number"
                placeholder="Please Enter Your Phone Number"
                //   helperText="Please Enter Product Name"
                name="phoneNumber"
                onChange={handlerInputChange}
                size="small"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} margin={1}>
              <Typography marginBottom={0.5}>Role</Typography>
              <Stack direction={"row"}>
                <TextField
                  id="outlined-select-category"
                  select
                  label="Select Your Role"
                  //   defaultValue="EUR"
                  //   helperText="Please select Product Category"
                  name="role"
                  onChange={handlerInputChange}
                  required
                  fullWidth
                  size="small"
                >
                  <MenuItem key={1} value={"Senior"}>
                    Lead
                  </MenuItem>
                  <MenuItem key={1} value={"Senior"}>
                    Senior
                  </MenuItem>
                  <MenuItem key={2} value={"Junior"}>
                    Junior
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
                  CONFIRM
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}
