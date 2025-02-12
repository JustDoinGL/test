import { Box } from '@mui/material';
import styled from '@emotion/styled';

interface CustomImageProps {
  src?: string;
  width?: string | number;
  height?: string | number;
  alt?: string;
}

const StyledImageContainer = styled(Box)<{ width?: string | number; height?: string | number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width || '100%')};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height || '200px')};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CustomImage: React.FC<CustomImageProps> = ({ src, width, height, alt }) => {
  return (
    <StyledImageContainer width={width} height={height}>
      <StyledImage src={src || './NoPhoto.png'} alt={alt || 'Нету фото'} />
    </StyledImageContainer>
  );
};
