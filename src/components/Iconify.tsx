import {Icon, IconifyIcon} from '@iconify/react';
import {Box, BoxProps} from '@mui/material';
import {FC} from "react";

interface IconifyProps extends BoxProps {
  icon: IconifyIcon | string
}

export const Iconify: FC<IconifyProps> = ({ icon, sx, ...other }) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
