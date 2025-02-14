import {
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectProps,
  FormHelperText,
} from '@mui/material';
import { Control, Controller, FieldValues, FieldErrors, Path } from 'react-hook-form';

interface CustomSelectProps<T extends FieldValues> extends Omit<SelectProps, 'name'> {
  name: Path<T>;
  label: string;
  options: { value: string; label: string }[];
  errors: FieldErrors<T>;
  control: Control<T>;
}

export const CustomSelect = <T extends FieldValues>({
  name,
  label,
  options,
  errors,
  control,
  ...rest
}: CustomSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl fullWidth error={!!errors[name]} sx={{ minWidth: 120 }}>
          <InputLabel id='demo-controlled-open-select-label'>
            {label} {field.value ? '' : 'не выбраны'}
          </InputLabel>
          <Select {...field} label={label} value={field.value || ''} {...rest}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {errors[name] && <FormHelperText>{errors[name]?.message?.toString()}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
