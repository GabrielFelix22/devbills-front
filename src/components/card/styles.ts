import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'balance' | 'incomes' | 'expenses';
};

const variantColorMap = {
  balance: theme.colors.info,
  incomes: theme.colors.success,
  expenses: theme.colors.error,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 1rem;  // 16px
  gap: 0.5rem;  // 8px
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;  // 4px
  width: 100%;

  svg {
    width: 1.75rem;  // 28px
    height: 1.75rem;  // 28px
    fill: ${(props) => variantColorMap[props.$variant]};
  }

  span {
    font-size: 1rem;  // 16px
    font-weight: 300;
    color: ${theme.colors.neutral};
  }

  strong {
    font-size: 1.5rem;  // 24px
    font-weight: 500;
    color: ${(props) => variantColorMap[props.$variant]};
  }
`;
