import React from 'react';
import starIco from '../../../assets/images/star-ico.png';
import { ChartTooltipBlock, TextBox } from './ChartTooltip.styles';

function ChartTooltip({ title, paragraph, rightalign, showList, ...props }) {
  return (
    <ChartTooltipBlock {...props}>
      <span className="material-icons-outlined icon">question_mark</span>
      <TextBox rightalign={rightalign}>
        <strong className="title">
          {title} <img src={starIco} width="14" alt="img description" />
        </strong>
        <p>{paragraph}</p>
        {showList && (
          <ul className="purchase-list">
            <li>1st Purchase</li>
            <li>2nd Purchase</li>
          </ul>
        )}
      </TextBox>
    </ChartTooltipBlock>
  );
}

export default ChartTooltip;
