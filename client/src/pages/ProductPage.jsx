import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../components/side-bar/SideBar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PostAddIcon from "@mui/icons-material/PostAdd";
import useMenu from "../hooks/useMenu";
import products from "../components/products";
import { Box } from "@mui/system";

export default function ProductPage() {
  const [productData, setProductData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productCategory: "",
  });

  // const products = products();
  // console.log(products);

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
      minWidth="100%"
      minHeight="100vh"
    >
      <SideBar indexSideBar={1} menuList={backOfficeMenus} />
      <Stack
        width={"100%"}
        minHeight="100%"
        backgroundColor="#F7F8FC"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={4}
        marginLeft={10}
      >
        <Typography variant="h6">Products Page</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {products.map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                {/* <Button variant="contained" fullWidth>
                  xs=6 md=8
                </Button> */}
                <Stack
                  maxWidth={270}
                  height={"auto"}
                  backgroundColor="#FFFFFF"
                  borderRadius={2}
                  overflow="hidden"
                  direction="column"
                  justifyContent={"center"}
                  alignItems="center"
                  sx={{}}
                >
                  <Box
                    width={"100%"}
                    height={270}
                    overflow="hidden"
                    borderRadius={2}
                  >
                    <img
                      alt={product.name}
                      src={product.cover}
                      width="100%"
                      height="auto"
                    />
                  </Box>

                  <Typography textAlign={"center"}>{product.name}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}
