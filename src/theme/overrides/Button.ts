import {Theme} from "@mui/material/styles";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          //@ts-ignore
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          //@ts-ignore
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          //@ts-ignore
          boxShadow: theme.customShadows.secondary,
        },
        containedInfo: {
          //@ts-ignore
          boxShadow: theme.customShadows.info,
        },
        containedSuccess: {
          //@ts-ignore
          boxShadow: theme.customShadows.success,
        },
        containedWarning: {
          //@ts-ignore
          boxShadow: theme.customShadows.warning,
        },
        containedError: {
          //@ts-ignore
          boxShadow: theme.customShadows.error,
        },
        // outlined
        outlinedInherit: {
          //@ts-ignore
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
