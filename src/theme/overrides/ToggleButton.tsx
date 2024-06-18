import {alpha, Theme} from '@mui/material/styles';

export const ToggleButton = (theme: Theme) => {
  const style = (color: keyof typeof theme.palette) => ({
    props: { color },
    style: {
      '&:hover': {
        // @ts-ignore
        borderColor: alpha(theme.palette[color].main, 0.48),
        // @ts-ignore
        backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
      },
      '&.Mui-selected': {
        // @ts-ignore
        borderColor: alpha(theme.palette[color].main, 0.48),
      },
    },
  });

  return {
    MuiToggleButton: {
      variants: [
        {
          props: { color: 'standard' },
          style: {
            '&.Mui-selected': {
              backgroundColor: theme.palette.action.selected,
            },
          },
        },
        style('primary'),
        style('secondary'),
        style('info'),
        style('success'),
        style('warning'),
        style('error'),
      ],
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
          // @ts-ignore
          border: `solid 1px ${theme.palette.grey[500_12]}`,
          '& .MuiToggleButton-root': {
            margin: 4,
            borderColor: 'transparent !important',
            borderRadius: `${theme.shape.borderRadius}px !important`,
          },
        },
      },
    },
  };
}
