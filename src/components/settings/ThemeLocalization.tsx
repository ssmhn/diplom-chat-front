// @mui
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
// hooks
import {useLocales} from '../../hooks/useLocales';
import {FC, PropsWithChildren} from "react";

// ----------------------------------------------------------------------

export const ThemeLocalization: FC<PropsWithChildren> = ({ children }) => {
  const defaultTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(defaultTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
