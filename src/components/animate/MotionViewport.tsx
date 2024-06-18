import { m } from 'framer-motion';
import {Box, BoxProps} from '@mui/material';
import {useResponsive} from '../../hooks/useResponsive';
import { varContainer } from '.';
import {FC} from "react";

interface MotionViewportProps extends BoxProps {
  disableAnimatedMobile: boolean
}

export const MotionViewport: FC<MotionViewportProps> = ({ children, disableAnimatedMobile = false, ...other }) => {
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
