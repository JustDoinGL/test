import { Box, SxProps, Theme, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface CustomErrorProps {
  errorText?: string;
  errorType?: 'info' | 'warning' | 'error';
  sx?: SxProps<Theme>;
}

const StyledBox = styled(Box)<{ type: 'info' | 'warning' | 'error' }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ type }) =>
    type === 'info' ? '#d0e7ff' : type === 'warning' ? '#fff3cd' : '#f8d7da'};
  color: ${({ type }) =>
    type === 'info' ? '#0c5460' : type === 'warning' ? '#856404' : '#721c24'};
  border: 1px solid
    ${({ type }) => (type === 'info' ? '#bee5eb' : type === 'warning' ? '#ffeeba' : '#f5c6cb')};
`;

export const CustomError = ({ errorText, errorType = 'error', sx }: CustomErrorProps) => {
  return (
    <StyledBox type={errorType} sx={sx}>
      {errorType === 'error' && (
        <Typography variant='h6'>
          Очень жаль, произошла ошибка, попробуйте позже или перезагрузите страницу.
        </Typography>
      )}
      {errorText && <Typography variant='body1'>{errorText}</Typography>}
    </StyledBox>
  );
};
