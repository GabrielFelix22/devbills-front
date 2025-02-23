import styled from 'styled-components';
import { theme } from '../../styles/theme';

type ContentType = {
  $variant: 'income' | 'expense';
  $tagColor: string;
};

const variantColorMap = {
  income: theme.colors.success,
  expense: theme.colors.error,
};

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  padding: 0.75rem 0;  // 12px

  span {
    font-size: 0.75rem;  // 12px
    font-weight: 300;
    color: ${theme.colors.neutral};
    line-height: 110%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 5%;
    background-color: ${theme.colors.neutral};
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;  // 8px

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;  // 8px
  }

  strong {
    font-size: 1rem;  // 16px
    font-weight: 500;
    color: ${theme.colors.light};
  }

  span {
    font-size: 0.875rem;  // 14px
    font-weight: 400;
    color: ${theme.colors.neutral};
  }
`;

export const Content = styled.div<ContentType>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;  // 4px

  strong {
    font-size: 0.875rem;  // 14px
    font-weight: 700;
    color: ${(props) => variantColorMap[props.$variant]};
  }

  span {
    font-size: 0.625;  
    font-weight: 400;
    border: 1px solid ${(props) => props.$tagColor};
    color: ${(props) => props.$tagColor};
    padding: 0.25rem;  // 4px
    border-radius: 0.125rem;  // 2px
  }
`;
