import PropTypes from 'prop-types';
// icons
import {Icon, IconifyIcon} from '@iconify/react';
// @mui
import {Box, BoxProps, SxProps} from '@mui/material';
import {FC} from "react";
import {Theme} from "@mui/material/styles";

// ----------------------------------------------------------------------

interface IconifyProps extends BoxProps {
  icon: IconifyIcon | string
}

export const Iconify: FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
