import { FormInputLabel, Input, Group } from './form-input.styles';
import { InputHTMLAttributes } from 'react';

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...inputProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...inputProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputProps.value &&
              typeof inputProps.value === 'string' &&
              inputProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
