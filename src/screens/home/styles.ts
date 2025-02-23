import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem; // 24px
  width: 100%;

  >div {
    display: flex;
    align-items: center;
    gap: 0.5rem;  // 8px
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;  // 12px
  width: 100%;
  padding: 0 1.5rem;  // 24px
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;  // 12px
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 22.5rem;  // 3600px
  width: 100%;
  gap: 0.5rem;  // 8px
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;  // 12px
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;  // 16px
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;  // 4px
  gap: 0.75rem;  // 12px

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ChartContent = styled.div`
  height: 14.5rem;  // 232px
`;

export const ChartAction = styled.div`
  display: flex;
  align-items: flex-end;
  width: 8rem;  // 128px
  gap: 0.5rem;  // 8px
`;
