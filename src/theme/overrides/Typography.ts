import {Theme} from "@mui/material/styles";

export const Typography = (theme: Theme) => {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
        article: {
          fontWeight: 700
        }
      },
    },
  };
}
