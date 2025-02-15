import { Box, SxProps, Theme } from '@mui/material';
import styled from '@emotion/styled';
import NoPhoto from '/NoPhoto.png';
import React from 'react';

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
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || 'auto')};
  aspect-ratio: 1 / 1;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CustomImage: React.FC<CustomImageProps> = ({ src, width, height, alt, sx }) => {
  const [imageSrc, setImageSrc] = React.useState(src?.trim() ? src : NoPhoto);

  const handleImageError = () => {
    setImageSrc(NoPhoto);
  };

  return (
    <StyledImageContainer width={width} height={height} sx={sx}>
      <StyledImage
        src={imageSrc}
        onError={handleImageError}
        alt={imageSrc === NoPhoto ? 'Нету фото' : alt || 'Изображение'}
      />
    </StyledImageContainer>
  );
};
