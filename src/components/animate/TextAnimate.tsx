import PropTypes from 'prop-types';
import {m, Variants} from 'framer-motion';
// @mui
import {Box, BoxProps} from '@mui/material';
//
import { varFade } from './variants';
import {FC} from "react";

// ----------------------------------------------------------------------

interface TextAnimateProps extends BoxProps{
    text: string
    variants?: Variants
}

export const TextAnimate: FC<TextAnimateProps> = ({ text, variants, sx, ...other }) => {
  return (
    <Box
      component={m.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx
      }}
      {...other}
    >
      {text.split('').map((letter, index) => (
        <m.span key={index} variants={variants || varFade().inUp}>
          {letter}
        </m.span>
      ))}
    </Box>
  );
}
