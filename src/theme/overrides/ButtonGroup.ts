import {Theme} from "@mui/material/styles";

export default function ButtonGroup(theme: Theme) {
  const styleContained = (color: string) => ({
    props: { variant: 'contained', color },
    //@ts-ignore
    style: { boxShadow: theme.customShadows[color] },
  });

  return {
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: 'contained', color: 'inherit' },
          //@ts-ignore
          style: { boxShadow: theme.customShadows.z8 },
        },
        styleContained('primary'),
        styleContained('secondary'),
        styleContained('info'),
        styleContained('success'),
        styleContained('warning'),
        styleContained('error'),

        {
          props: { disabled: true },
          style: {
            boxShadow: 'none',
            '& .MuiButtonGroup-grouped.Mui-disabled': {
              color: theme.palette.action.disabled,
              borderColor: `${theme.palette.action.disabledBackground} !important`,
              '&.MuiButton-contained': {
                backgroundColor: theme.palette.action.disabledBackground,
              },
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  };
}
