import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import {Box, BoxProps} from '@mui/material';
//
import { varContainer } from './variants';
import {FC} from "react";

// ----------------------------------------------------------------------

interface MotionContainerProps extends BoxProps {
  action: boolean,
  animate: boolean
}

export const MotionContainer: FC<MotionContainerProps> = ({ animate, action = false, children, ...other }) => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box component={m.div} initial="initial" animate="animate" exit="exit" variants={varContainer()} {...other}>
      {children}
    </Box>
  );
}
