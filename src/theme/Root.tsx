import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  getInitColorSchemeScript,
} from "@mui/material";
import React from "react";
import { SiteTheme } from "../theme";

const Root = ({ children }) => {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={extendTheme(SiteTheme)}>{children}</CssVarsProvider>
    </>
  );
};
export default Root;
