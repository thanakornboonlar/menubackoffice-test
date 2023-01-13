import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    action: {
      active: "rgba(0, 0, 0, 0.6)",
      hover: "rgba(0, 0, 0, 0.3)",
      hoverOpacity: 0.5,
      selected: "rgba(0, 0, 0, 0.8)",
      selectedOpacity: 0.6,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.5)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.26)",
      focusOpacity: 0.3,
      activatedOpacity: 0.3,
    },
  },
  typography: {
    h1: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "97px",
    },
    h2: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "61px",
    },
    h3: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "400",
      fontSize: "48px",
    },
    h4: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "34px",
    },
    h5: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "300",
      fontSize: "24px",
    },
    h6: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "500",
      fontSize: "20px",
    },
    caption: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "12px",
    },
    overline: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "10px",
    },
    button: {
      fontFamily: "var(--inter-font)",
      fontWeight: "500",
      fontSize: "14px",
    },
    body2: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "14px",
    },
    body1: {
      fontFamily: "var(--inter-font)",
      fontWeight: "500",
      fontSize: "16px",
    },
    subtitle2: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "500",
      fontSize: "14px",
    },
    subtitle1: {
      fontFamily: "var(--inter-font)",
      fontWeight: "400",
      fontSize: "16px",
    },
    findYouJob: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "400",
      fontSize: "20px",
    },
    meetTeam: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "400",
      fontSize: "20px",
    },
    underLine: {
      fontFamily: "var(--montserrat-font)",
      fontWeight: "500",
      fontSize: "14px",
    },
  },
});
