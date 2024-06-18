import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import {FC, forwardRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes, RefObject} from 'react';
// @mui
import {Box, BoxProps, IconButton, IconButtonProps} from '@mui/material';
import {ColorEnum} from "../../enums/color.enum";

// ----------------------------------------------------------------------

export const IconButtonAnimate: FC<IconButtonProps> = ({ children, size = 'medium', ref, ...other }) => (
  <AnimateWrap size={size}>
    <IconButton size={size} ref={ref} {...other}>
      {children}
    </IconButton>
  </AnimateWrap>
);

// ----------------------------------------------------------------------

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 }
};

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 }
};

interface AnimateWrapProps extends BoxProps{
  size: 'small' | 'medium' | 'large'
}

const AnimateWrap: FC<AnimateWrapProps> = ({ size, children }) => {
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <Box
      component={m.div}
      whileTap="tap"
      whileHover="hover"
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex'
      }}
    >
      {children}
    </Box>
  );
}
