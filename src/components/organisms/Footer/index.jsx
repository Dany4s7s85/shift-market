import React from 'react';
import { FooterHolder, Icon, TextOne, TextTwo, TextThree, CellNumber } from './Footer.styles';

export default function Footer() {
  return (
    <FooterHolder>
      <Icon>Icon</Icon>
      <TextOne>295 MADISON AVENUE</TextOne>
      <TextTwo>30th FLOOR</TextTwo>
      <TextThree>NEW YORK, NY 10017</TextThree>
      <CellNumber>+1 (646) 926-7005</CellNumber>
    </FooterHolder>
  );
}
