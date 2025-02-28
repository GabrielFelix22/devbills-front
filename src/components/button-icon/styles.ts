import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;  // 36px
  height: 2.25rem;  // 36px
  border-radius: 0.25rem;  // 4px
  background-color: ${theme.colors.primary};
  border: 0;
  padding: 0;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
  svg {
    fill: ${theme.colors.black};
    height: 1.25rem;  // 36px
    width: 3rem;  // 48px
  }
`;
