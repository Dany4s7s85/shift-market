import styled from 'styled-components/macro';

export const DayList = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 315px;
  padding: 3px;
  margin: 0 auto;
  border-radius: 5px;
  background: #272350;

  button {
    display: block;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    color: var(--white);
    border: 0;
    padding: 5px 8px;
    border-radius: 3px;
    outline: none;
    box-shadow: none;
    background: none;

    &:hover {
      color: var(--black);
      background: #23c1ef;
    }
  }
`;
