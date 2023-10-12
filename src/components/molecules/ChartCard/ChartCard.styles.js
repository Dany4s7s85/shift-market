import styled from 'styled-components/macro';

export const StyledChartCard = styled.div`
  background: var(--bg-primary);
  border-radius: 20px;
  padding: 20px;
`;

export const TitleHolder = styled.div`
  font-weight: bold;
`;

export const Title = styled.span`
  font-size: var(--font-size-sm);
  line-height: calc(var(--font-size-sm) + 3px);
  display: block;
`;

export const CardHead = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Value = styled.span`
  font-size: var(--font-size-lg);
  line-height: calc(var(--font-size-lg) + 3px);
`;
export const ToggleHolder = styled.div`
  display: flex;
  align-items: center;
  background: var(--dark-blue);
  border-radius: 67px;
  padding: 4px;
  flex-shrink: 0;
  min-width: 206px;
`;

export const OptionMenuHolder = styled.div`
  min-width: 200px;
`;
