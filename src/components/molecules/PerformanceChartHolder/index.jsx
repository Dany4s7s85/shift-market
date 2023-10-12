// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import Paragraph from 'components/atoms/Paragraph';
import Loaders from 'components/atoms/Loaders';
import { useContextHook } from 'use-context-hook';
import { PerformanceFiltersContext } from 'context/performanceFiltersContext';
import Button from 'components/atoms/Button';
import { NoRecordFound } from '../Table/Table.styles';
import {
  Chart,
  DetailHolder,
  StyledChartHolder,
  Title,
  Label,
  CustomCheckBox,
  PagingArrows,
  LabelTxt,
} from './PerformanceChartHolder.styles';
import arrowNext from '../../../assets/images/arrow-next.svg';
import arrowPrev from '../../../assets/images/arrow-prev.svg';
import zoom from '../../../assets/images/zoom.svg';

function PerformanceChartHolder({
  zoomModel,
  loading,
  title,
  data,
  noRecord,
  checkboxBtn,
  text,
  children,
  titleChild,
  LegendBottom,
  LegendBlock,
  setOpenModal,
  LegendRetailer,
  toggleBtn,
  hasArrows,
  nextErrowDisable,
  setErrowClick,
  setCheckboxClicked,
  toggle,
  setToggle,
  labelText,
  checkboxClicked,
  errowClick,
  fontSm,
  comparePage,
  ...props
}) {
  const { setCheckBoxData, checkBoxData, comparePageSelection } = useContextHook(PerformanceFiltersContext, v => ({
    setCheckBoxData: v.setCheckBoxData,
    checkBoxData: v.checkBoxData,
    comparePageSelection: v.comparePageSelection,
  }));

  return (
    <StyledChartHolder {...props} fontSm={fontSm}>
      {loading ? (
        <div
          css={`
            padding-top: 200px;
            padding-bottom: 200px;
          `}>
          <Loaders loading />
        </div>
      ) : (
        <>
          <DetailHolder>
            <div className="selection-holder">
              {title && <Title>{title}</Title>}
              {titleChild}
              <CustomCheckBox toggleBtn={toggleBtn}>
                {labelText && <LabelTxt>{labelText}</LabelTxt>}
                <input
                  type="checkbox"
                  onChange={e => {
                    setToggle(e.target.checked);
                  }}
                />
                <span className="fake-checkbox" />
              </CustomCheckBox>
            </div>
            {text && (
              <Paragraph
                css={`
                  color: var(--white);
                `}>
                {text}
              </Paragraph>
            )}
          </DetailHolder>
          {!noRecord ? (
            <>
              <div className="chart-wrap">
                <Chart
                  className="chart-holder"
                  fontSm={fontSm}
                  title={title}
                  LegendBottom={LegendBottom}
                  LegendBlock={LegendBlock}
                  LegendRetailer={LegendRetailer}>
                  {children}
                </Chart>
              </div>
              <PagingArrows hasArrows={hasArrows}>
                <button
                  type="button"
                  disabled={errowClick <= 0}
                  css={
                    errowClick <= 0 &&
                    `
                    opacity: 0.3;
                  `
                  }
                  onClick={() => {
                    setErrowClick(errowClick - 1);
                  }}>
                  <img src={arrowPrev} width="22" alt="img description" />
                </button>
                <button
                  type="button"
                  disabled={nextErrowDisable}
                  css={
                    nextErrowDisable &&
                    `
                    opacity: 0.3;
                  `
                  }
                  onClick={() => {
                    setErrowClick(errowClick + 1);
                  }}>
                  <img src={arrowNext} width="22" alt="img description" />
                </button>
              </PagingArrows>
            </>
          ) : (
            <div
              css={`
                display: flex;
                justify-content: center;
                width: 100%;
              `}>
              <NoRecordFound>No Record Found</NoRecordFound>
            </div>
          )}
          <div
            css={`
              display: flex;
              justify-content: flex-end;
            `}>
            {comparePage ? (
              !zoomModel && (
                <Label>
                  <Button onClick={() => setOpenModal({ graphName: comparePage, model: true })}>
                    <img src={zoom} alt={zoom} />
                  </Button>
                </Label>
              )
            ) : (
              <Label>
                <input
                  disabled={!Object.keys(comparePageSelection).length || checkBoxData?.length === 10}
                  type="checkbox"
                  onChange={e => {
                    const { name } = e.target;
                    const { value } = e.target;
                    if (e.target.checked && checkBoxData.length < 10) {
                      const checkedCard = { name, status: value };
                      checkBoxData.push(checkedCard);
                    }
                    if (!e.target.checked) {
                      checkBoxData.map((element, index) => {
                        if (element.name === name) {
                          checkBoxData.splice(index, 1);
                        }
                        return '';
                      });
                    }
                    setCheckBoxData(checkBoxData);
                  }}
                  onClick={() => {
                    setCheckboxClicked(checkboxClicked + 1);
                  }}
                  name={title}
                  checked={checkBoxData.length && checkBoxData.find(ele => ele.name === title)}
                />
                <span className="fake-radio" />
              </Label>
            )}
          </div>
        </>
      )}
    </StyledChartHolder>
  );
}

export default PerformanceChartHolder;
