import { Box, SxProps, Theme } from '@mui/material';
import styled from '@emotion/styled';
import NoPhoto from '@/../public/NoPhoto.png';

interface CustomImageProps {
  src?: string | undefined;
  width?: string | number;
  height?: string | number;
  alt?: string;
  sx?: SxProps<Theme>;
}

const StyledImageContainer = styled(Box)<{
  width?: string | number;
  height?: string | number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  aspect-ratio: 1 / 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CustomImage: React.FC<CustomImageProps> = ({ src, width, height, alt, sx }) => {
  return (
    <StyledImageContainer width={width} height={height} sx={sx}>
      <StyledImage
        src={src?.trim() ? src : NoPhoto}
        alt={src?.trim() ? alt || 'Нету фото' : 'Нету фото'}
      />
    </StyledImageContainer>
  );
};
