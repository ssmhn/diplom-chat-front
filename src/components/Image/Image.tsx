import {FC} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// @mui
import {Box, BoxProps} from '@mui/material';

// ----------------------------------------------------------------------

interface ImageProps extends BoxProps {
    disabledEffect?: boolean,
    effect?: string
}

export const Image: FC<ImageProps> = ({ disabledEffect = false, effect = 'blur', sx, ref, ...other }) => {
    const content = (
        <Box
            component={LazyLoadImage}
            wrapperClassName="wrapper"
            effect={disabledEffect ? undefined : effect}
            placeholderSrc={disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'}
            sx={{ width: 1, height: 1, objectFit: 'cover' }}
            {...other}
        />
    );

    return (
        <Box
            ref={ref}
            component="span"
            sx={{
                lineHeight: 1,
                display: 'block',
                overflow: 'hidden',
                position: 'relative',
                '& .wrapper': {
                    width: 1,
                    height: 1,
                    backgroundSize: 'cover !important',
                },
                ...sx,
            }}
        >
            {content}
        </Box>
    );
};