import React from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import {
  FirstContantHolder,
  ImageHolder,
  Image,
  FirstScreen,
  DashboardBodyHolder,
  Heading,
  Paragraph,
  SecondScreen,
  SecondHeading,
  CardHolder2,
  CardText,
  IconHolder,
  SingleCard,
  CardHeading,
  ThirdScreen,
  ThirdHeading,
  CardHolder3,
  SingleCard3,
  FourthScreen,
  ParagraphHolder,
  FourthImageHolder,
  FourthHeading,
} from './DashboardBody.styles';

export default function DashboardBody() {
  const cardData = [
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      icon: 'menu',
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
  ];

  const secondCardData = [
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
    {
      heading: 'there is heading',
      text: `Align digital asset infrastructure functionality smoothly and securely with your existing systems. Initiate easily and safely with single sign-on compatible API integrations, granular security controls, and legal and regulatory assistance from the Shift team.`,
    },
  ];

  return (
    <DashboardBodyHolder>
      <FirstScreen>
        <FirstContantHolder>
          <Heading>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
              Enterprise Solutions
            </motion.span>
          </Heading>
          <Paragraph>
            Build a strong digital asset foundation for your tech stack and sales flows, with our flexible, secure, and
            customizable infrastructure.
          </Paragraph>
        </FirstContantHolder>
        <ImageHolder>
          <Image src="/shiftImage.png" alt="My Image" />
        </ImageHolder>
      </FirstScreen>
      <SecondScreen>
        <SecondHeading>there is section heading</SecondHeading>
        <CardHolder2>
          {cardData?.map(ele => (
            <SingleCard>
              <IconHolder className="material-icons-outlined" style={{ fontSize: '60px' }}>
                {ele?.icon}
              </IconHolder>
              <CardHeading>{ele?.heading}</CardHeading>
              <CardText>{ele?.text}</CardText>
            </SingleCard>
          ))}
        </CardHolder2>
      </SecondScreen>
      <ThirdScreen>
        <ThirdHeading>there is section heading</ThirdHeading>
        <CardHolder3>
          {secondCardData?.map(ele => (
            <SingleCard3>
              <CardHeading>{ele?.heading}</CardHeading>
              <CardText>{ele?.text}</CardText>
            </SingleCard3>
          ))}
        </CardHolder3>
      </ThirdScreen>
      <FourthScreen>
        <FourthImageHolder>
          <Image src="/shiftImage2.png" alt="My Image" />
        </FourthImageHolder>

        <ParagraphHolder>
          <FourthHeading>The future is here. Let us show you the possibilities.</FourthHeading>
          <Paragraph>
            Whether you’re eager for seamless crypto capabilities today, or just want to learn what Shift can do for
            your business, let us save your time and walk you through everything we offer.
          </Paragraph>
        </ParagraphHolder>
      </FourthScreen>
    </DashboardBodyHolder>
  );
}
