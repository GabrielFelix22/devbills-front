import { InputNumberFormat } from '@react-input/number-format';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;  // 24px

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;  // 16px
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;  // 
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;  // 12px
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;  // 16px

  > label {
    color: ${theme.colors.white};
    font-size: 0.625rem;  // 
  }

  select {
    height: 2.25rem;  //
    border-radius: 0.25rem;  //
    padding: 0 0.75rem;  //
    background-color: ${theme.colors.black};
    color: ${theme.colors.neutral};
    border: 1px solid transparent;
    transition: all 0.2s ease-in;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  }
`;

export const CurrencyInput = styled(InputNumberFormat)`
  height: 2.25rem;  // 36px
  background-color: ${theme.colors.black};
  border: 0;
  border-radius: 0.25rem;  // 4px
  padding: 0 0.75rem;  // 12px
  color: ${theme.colors.neutral};
  font-size: 1rem;  // 16px
  width: 100%;
  border: 1px solid transparent;
  transition: all 0.2s ease-in;

  &:focus {
    border-color: ${theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.neutral};
  }
`;

export const RadioForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;  // 12px
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;  // 8px

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${theme.colors.primary};
  }

  label {
    color: ${theme.colors.white};
    font-size: 0.875rem;  // 14px
  }
`;

export const ErrorMessage = styled.span`
  margin-top: 0.25rem;  // 4px
  font-size: 0.625rem;  // 10px
  line-height: 80%;
  color: ${theme.colors.error};
`;
