import styled from 'styled-components/macro';

export const MonthHolder = styled.div`
  width: 235px;
  padding: 10px 20px;
  position: relative;
  border-radius: 10px;
  background: #25214f;

  .btnPrev,
  .btnNext {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%) rotate(90deg);
    font-size: 12px;
    line-height: 1;
    color: var(--white);
  }
  .btnNext {
    left: auto;
    right: 10px;
    transform: translateY(-50%) rotate(-90deg);
  }

  .react-datepicker__input-container input {
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: var(--white);
    text-align: center;
    width: 100%;
    height: 24px;
    border: 0;
    outline: none;
    background: none;
  }

  .react-datepicker {
    width: 235px;
    margin-top: 5px;
    right: 19px;
    color: var(--white);
    background: #25214f;
  }

  .react-datepicker__header {
    padding-bottom: 4px;
    padding-top: 9px;
    color: var(--white);
  }

  .react-datepicker__month-wrapper {
    display: flex;
  }

  .react-datepicker__month .react-datepicker__month-text {
    width: 33%;
    padding: 5px;
    font-weight: 500;
  }
  .react-datepicker__month .react-datepicker__month-text:hover {
    background: #14b1e6;
  }
`;
