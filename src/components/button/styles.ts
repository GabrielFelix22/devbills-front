import { css, styled } from 'styled-components';
import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'default' | 'outline';
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;  // 36px de altura
  border-radius: 0.25rem;  // 4px
  background-color: ${(props) => (props.$variant === 'default' ? theme.colors.primary : 'transparent')};
  color: ${(props) => (props.$variant === 'default' ? theme.colors.black : theme.colors.primary)};
  border: 0;
  padding: 0 0.75rem;  // 12px
  transition: all 0.2s ease-in;

  ${(props) =>
    props.$variant === 'outline' &&
    css`
    border: 1px solid ${theme.colors.primary};
    `}

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
