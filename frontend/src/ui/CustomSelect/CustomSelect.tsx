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
  options: { value: string | number; label: string }[];
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
          <InputLabel shrink>{label}</InputLabel>
          <Select {...field} label={label} {...rest} defaultValue={options[0].value}>
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
