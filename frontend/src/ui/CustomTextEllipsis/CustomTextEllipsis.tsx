import { Box, SxProps, Theme } from '@mui/material';

interface CustomTextEllipsisProps {
  predText?: string;
  text: string;
  lines?: number;
  sx?: SxProps<Theme>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
}

export const CustomTextEllipsis = ({
  text,
  lines = 2,
  sx,
  component,
  predText,
}: CustomTextEllipsisProps) => {
  return (
    <Box
      component={component ? component : 'p'}
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        ...sx,
      }}
    >
      {predText ? predText : ''} {text}
    </Box>
  );
};
