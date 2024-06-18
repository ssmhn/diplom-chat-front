import PropTypes from 'prop-types';
import {m, AnimatePresence, Variants} from 'framer-motion';
// @mui
import {Dialog, Box, Paper, SxProps} from '@mui/material';
//
import { varFade } from './variants';
import {FC, PropsWithChildren} from "react";
import {Theme} from "@mui/material/styles";

// ----------------------------------------------------------------------

interface DialogAnimateProps extends PropsWithChildren {
  open: boolean
  onClose: (event: Object, reason: string) => void
  variants?: Variants
  sx?: SxProps<Theme>
}

export const DialogAnimate: FC<DialogAnimateProps> = ({ open = false, variants, onClose, children, sx, ...other }) => {
  // @ts-ignore
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={onClose}
          PaperComponent={(props) => (
            <Box
              component={m.div}
              {...(variants ||
                varFade({
                  distance: 120,
                  durationIn: 0.32,
                  durationOut: 0.24,
                  easeIn: 'easeInOut'
                }).inUp)
              }
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* @ts-ignore */}
              <Box onClick={onClose} sx={{ width: '100%', height: '100%', position: 'fixed' }} />
              <Paper sx={sx} {...props}>
                {props.children}
              </Paper>
            </Box>
          )}
          {...other}
        >
          {children}
        </Dialog>
      )}
    </AnimatePresence>
  );
}
