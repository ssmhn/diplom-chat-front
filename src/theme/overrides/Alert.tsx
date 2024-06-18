import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from './CustomIcons';
import {Theme} from "@mui/material/styles";

export default function Alert(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const standardStyle = (color: string) => ({
    //@ts-ignore
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    //@ts-ignore
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      //@ts-ignore
      color: theme.palette[color][isLight ? 'main' : 'light'],
    },
  });

  const filledStyle = (color: string) => ({
    //@ts-ignore
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color: string) => ({
    //@ts-ignore
    color: theme.palette[color][isLight ? 'darker' : 'lighter'],
    //@ts-ignore
    border: `solid 1px ${theme.palette[color][isLight ? 'light' : 'dark']}`,
    //@ts-ignore
    backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
    '& .MuiAlert-icon': {
      //@ts-ignore
      color: theme.palette[color][isLight ? 'main' : 'light'],
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          info: <InfoIcon />,
          success: <SuccessIcon />,
          warning: <WarningIcon />,
          error: <ErrorIcon />,
        },
      },

      styleOverrides: {
        message: {
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(0.5),
          },
        },
        action: {
          '& button:not(:first-of-type)': {
            marginLeft: theme.spacing(1),
          },
        },

        standardInfo: standardStyle('info'),
        standardSuccess: standardStyle('success'),
        standardWarning: standardStyle('warning'),
        standardError: standardStyle('error'),

        filledInfo: filledStyle('info'),
        filledSuccess: filledStyle('success'),
        filledWarning: filledStyle('warning'),
        filledError: filledStyle('error'),

        outlinedInfo: outlinedStyle('info'),
        outlinedSuccess: outlinedStyle('success'),
        outlinedWarning: outlinedStyle('warning'),
        outlinedError: outlinedStyle('error'),
      },
    },
  };
}
