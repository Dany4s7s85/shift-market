import styled, { css } from 'styled-components/macro';

export const Chart = styled.div`
  .apexcharts-legend {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    justify-content: space-between;
    bottom: 0 !important;
    overflow: visible;
    gap: 18px 20px;
    padding: 20px 5px 5px 10px !important;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    @media (min-width: 600px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media (min-width: 1500px) {
      max-width: 300px;
      margin: 0;
      gap: 23px 22px;
      padding: 20px 5px 5px !important;
      bottom: auto !important;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .apexcharts-legend-series {
    margin: 0 !important;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .apexcharts-legend-marker {
    rotate: 45deg;
    margin-right: 0;
    position: relative;
    border-radius: 0;

    &:before {
      width: 22px;
      height: 22px;
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(210, 255, 233, 0.1);
      border-radius: 100%;
      top: -7px;
      left: -7px;
      transform: none;
    }

    .light & {
      &:before {
        background: rgba(0, 0, 0, 0.15);
      }
    }
  }

  ${({ LegendRetailer }) =>
    LegendRetailer &&
    css`
      .apexcharts-legend {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        max-width: 90%;
        /* visibility: hidden;
        opacity: 0;
        height: 0; */
      }
    `}

  ${({ LegendBottom }) =>
    LegendBottom &&
    css`
      .apexcharts-legend {
        justify-content: center;
        margin: 0 auto;
        left: 50% !important;
        top: auto !important;
        bottom: 0 !important;
        transform: translateX(-50%) !important;
      }
    `}

  ${({ LegendBlock }) =>
    LegendBlock &&
    css`
      .apexcharts-legend-series {
        margin-top: 15px !important;
      }

      .apexcharts-legend {
        display: block;
        margin: 0 auto;
        bottom: 0 !important;
      }
    `}

  ${({ title }) =>
    title === 'Channel' &&
    css`
      .apexcharts-legend {
        justify-content: center;
        margin: 0 auto;
        bottom: 0 !important;
      }
    `}

    ${({ fontSm }) =>
    fontSm &&
    css`
      .apexcharts-legend {
        max-width: 240px;
        margin: 0;
        gap: 18px 18px;
        padding: 5px !important;

        .apexcharts-legend-text {
          font-size: 8px !important;
        }
      }

      .apexcharts-legend-marker {
        width: 4px !important;
        height: 4px !important;
        rotate: 45deg;
        margin-right: 0;
        position: relative;
        border-radius: 0;

        &:before {
          width: 15px;
          height: 15px;
          top: -6px;
          left: -6px;
        }
      }
    `}
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: var(--font-size-lg);
  line-height: calc(var(--font-size-lg) + 5px);
  margin-bottom: 10px;
  display: block;
`;
export const DetailHolder = styled.div``;

export const StyledChartHolder = styled.div`
  background: var(--dark-blue);
  border-radius: 18px;
  padding: 15px;

  @media (min-width: 1200px) {
    padding: 20px;
  }
  @media (min-width: 1550px) {
    padding: 30px;
  }

  ${({ fontSm }) =>
    fontSm &&
    css`
      padding: 15px !important;
      border: 1px solid #25214f;
      border-radius: 13px;
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }

      ${Title} {
        font-size: 12px;
        line-height: 15px;
      }
      ${DetailHolder} {
        p {
          font-size: 12px;
          line-height: 15px;
        }
      }
    `}

  .light & {
    p {
      color: var(--black);
    }

    .apexcharts-radialbar {
      circle.apexcharts-radialbar-hollow {
        fill: none !important;
      }
    }
  }

  &.legend-hide {
    .chart-wrap {
      height: 300px;
      overflow: hidden;
    }

    &.legend-active {
      .chart-wrap {
        height: auto;
      }
      .btn-opener {
        transform: scale(-1);
      }
    }
  }

  .selection-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ titleCenter }) =>
      titleCenter &&
      css`
        display: none;
      `}
  }

  .btn-opener {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: var(--white);
    font-size: 16px;
    line-height: 1;
    border-radius: 50px;
    background: #25214f;

    .light & {
      background: var(--sky-blue);
    }
  }
`;

export const Label = styled.label`
  display: inline-block;

  .fake-radio {
    border: 1px solid var(--white);
    width: 24px;
    height: 24px;
    border-radius: 100%;
    display: block;
    cursor: pointer;
    position: relative;

    .light & {
      border: 1px solid var(--black);
    }

    &:after {
      display: none;
      content: '\\e904';
      font-family: 'icomoon';
      font-size: 13px;
      line-height: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .light & {
        color: var(--white);
      }
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked {
      + .fake-radio {
        border-color: #1abbde;
        background: #1abbde;

        &:after {
          display: block;
          background: #1abbde;
        }
      }
    }
  }
`;

export const CustomCheckBox = styled.label`
  display: inline-block;

  ${({ toggleBtn }) =>
    !toggleBtn &&
    css`
      display: none;
    `}

  .fake-checkbox {
    display: block;
    width: 46px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    position: relative;
    box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    background: #25214f;

    .light & {
      border: 1px solid var(--light-gray);
      background: none;

      &:after {
        left: 1px;
        background: var(--light-gray);
      }
    }

    &:after {
      content: '';
      width: 21px;
      height: 21px;
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      transition: all 0.3s;
      border-radius: 100%;
      background: var(--white);
    }
  }
  input[type='checkbox'] {
    display: none;
    &:checked {
      + .fake-checkbox {
        background: #14b1e6;

        &:after {
          left: auto;
          right: 2px;
        }

        .light & {
          border: 1px solid #14b1e6;

          &:after {
            right: 1px;
            background: var(--white);
          }
        }
      }
    }
  }
`;

export const LabelTxt = styled.label`
  display: block;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 5px;
`;
export const PagingArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  position: relative;
  top: 15px;
  ${({ hasArrows }) =>
    !hasArrows &&
    css`
      display: none;
    `}
`;
