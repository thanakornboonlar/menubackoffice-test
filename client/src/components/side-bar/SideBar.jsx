import React, { useState } from "react";
import { List, ListItemButton, Typography } from "@mui/material";
import { Stack } from "@mui/material";

export default function SideBar({ indexSideBar, menuList }) {
  const [selectedIndex, setSelectedIndex] = useState(indexSideBar);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Stack
        id="Side-Bar-Container"
        width={260}
        minWidth={260}
        backgroundColor="#363740"
        direction={"column"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          justifyContent="center"
          alignItems={"center"}
          padding={2}
          width="100%"
        >
          <Typography variant="h6" color={"white"}>
            Back Office
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          <List
            component="nav"
            aria-label="main mailbox folders"
            sx={{ width: "100%" }}
          >
            {menuList.map((menu, index) => {
              return (
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  href={menu.path}
                >
                  <Typography variant="button" color={"white"}>
                    {menu.menu_name}
                  </Typography>
                </ListItemButton>
              );
            })}
          </List>
        </Stack>
      </Stack>
    </>
  );
}
