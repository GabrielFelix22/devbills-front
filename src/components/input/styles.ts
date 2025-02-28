import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'black' | 'dark';
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;  // 2px
  width: 100%;  

  label {
    color: ${theme.colors.white};
    font-size: 0.625rem;  // 10px
    font-weight: 400;
  }

  input {
    height: 2.25rem;  // 36px
    background-color: ${(props) => theme.colors[props.$variant]};
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
  }

  span {
    margin-top: 0.125rem;
    font-size: 0.625rem;  // 10px
    line-height: 90%;
    color: ${theme.colors.error};
  }
`;
