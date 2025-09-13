import {
  Experimental_CssVarsProvider as CssVarsProvider,
  extendTheme,
  InitColorSchemeScript,
} from '@mui/material';
import { SiteTheme } from '../theme';

const Root = ({ children }) => {
  return (
    <>
      <InitColorSchemeScript />
      <CssVarsProvider theme={extendTheme(SiteTheme)}>{children}</CssVarsProvider>
    </>
  );
};
export default Root;
