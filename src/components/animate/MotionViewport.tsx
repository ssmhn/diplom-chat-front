import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import {Box, BoxProps} from '@mui/material';
// hooks
import {useResponsive} from '../../hooks/useResponsive';
//
import { varContainer } from '.';
import {FC} from "react";

// ----------------------------------------------------------------------

interface MotionViewport extends BoxProps {
  disableAnimatedMobile: boolean
}

export const MotionViewport: FC<MotionViewport> = ({ children, disableAnimatedMobile = false, ...other }) => {
  const isMobile = useResponsive('down', 'sm');

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
