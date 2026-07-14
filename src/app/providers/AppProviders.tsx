import { CssBaseline, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";

import theme from "../../theme";

interface AppProvidersProps {
  children: ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppProviders;