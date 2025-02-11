import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface CustomErrorProps {
  errorText: string;
  errorType?: 'info' | 'warning' | 'error';
}

const StyledBox = styled(Box)<{ errorType: 'info' | 'warning' | 'error' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ errorType }) =>
    errorType === 'info' ? '#d0e7ff' : errorType === 'warning' ? '#fff3cd' : '#f8d7da'};
  color: ${({ errorType }) =>
    errorType === 'info' ? '#0c5460' : errorType === 'warning' ? '#856404' : '#721c24'};
  border: 1px solid
    ${({ errorType }) =>
      errorType === 'info' ? '#bee5eb' : errorType === 'warning' ? '#ffeeba' : '#f5c6cb'};
`;

export const CustomError = ({ errorText, errorType = 'error' }: CustomErrorProps) => {
  return (
    <StyledBox errorType={errorType}>
      <Typography variant='h6'>Очень жаль, что так случилось.</Typography>
      <Typography variant='body1'>{errorText}</Typography>
    </StyledBox>
  );
};
