import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import {FC, forwardRef} from 'react';
// @mui
import {Theme, useTheme} from '@mui/material/styles';
import {Box, BoxProps, Fab, FabProps, SxProps} from '@mui/material';

// ----------------------------------------------------------------------

interface FabButtonAnimateProps extends FabProps {
    sxWrap: SxProps<Theme> | undefined
}

const FabButtonAnimate: FC<FabButtonAnimateProps> = (
    {
        color = 'primary',
        size = 'large',
        children,
        sx,
        sxWrap,
        ref,
        ...other
    }) => {
  const theme = useTheme();

  if (color === 'default' || color === 'inherit' || color === 'primary' || color === 'secondary') {
    return (
      <AnimateWrap size={size} sxWrap={sxWrap}>
        <Fab ref={ref} size={size} color={color} sx={sx} {...other}>
          {children}
        </Fab>
      </AnimateWrap>
    );
  }

    return (
    <AnimateWrap size={size} sxWrap={sxWrap}>
      <Fab
        ref={ref}
        size={size}
        sx={{
            // @ts-ignore
          boxShadow: theme.customShadows[color],
          color: theme.palette[color].contrastText,
          bgcolor: theme.palette[color].main,
          '&:hover': {
            bgcolor: theme.palette[color].dark
          },
          ...sx
        }}
        {...other}
      >
        {children}
      </Fab>
    </AnimateWrap>
  );
};

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.07 },
  tap: { scale: 0.97 }
};

const varMedium = {
  hover: { scale: 1.06 },
  tap: { scale: 0.98 }
};

const varLarge = {
  hover: { scale: 1.05 },
  tap: { scale: 0.99 }
};

interface AnimateWrapProps extends BoxProps {
    size: 'small' | 'medium' | 'large'
    sxWrap: SxProps<Theme> | undefined
}

const AnimateWrap: FC<AnimateWrapProps> = ({ size, children, sxWrap }) => {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex',
        ...sxWrap
      }}
    >
      {children}
    </Box>
  );
}
