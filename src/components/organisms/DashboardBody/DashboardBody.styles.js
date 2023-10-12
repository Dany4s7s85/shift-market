import styled from 'styled-components/macro';

export const DashboardBodyHolder = styled.div``;

export const FirstScreen = styled.div`
  display: flex;
  margin: 70px 70px 0px 70px;
  @media screen and (max-width: 700px) {
    flex-flow: row wrap;
    margin: 10px 10px 0px 10px;
  }
`;

export const FirstContantHolder = styled.div`
  width: 30%;
  @media screen and (max-width: 700px) {
    width: auto;
    min-width: 40px;
  }
`;

export const Heading = styled.h1`
  font-size: 80px;
  font-weight: normal;
  color: rgb(155, 248, 244);

  @media screen and (max-width: 700px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
  line-height: 2;
`;

export const ImageHolder = styled.div``;

export const Image = styled.img`
  padding-top: 120px;
  @media screen and (max-width: 700px) {
    padding-top: 20px;
  }
`;

export const SecondScreen = styled.div`
  background-color: #2b2859;
  border-radius: 50px;
  padding: 200px 20px 200px 20px;
  text-align: center;
  @media screen and (max-width: 700px) {
    padding: 80px 10px 80px 10px;
  }
`;

export const SecondHeading = styled.div`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 40px;
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For Safari support */
  color: transparent; /* Make the text transparent */
  background-image: linear-gradient(90deg, rgb(155, 248, 244) 0%, rgb(111, 123, 247) 93.17%);
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
export const CardHolder2 = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 40px;
`;

export const SingleCard = styled.div`
  display: block;
  width: 400px;
  padding: 80px 10px 80px 10px;

  @media screen and (max-width: 700px) {
    padding: 30px 10px 30px 10px;
  }
`;

export const CardHeading = styled.h1`
  margin: 30px 0px 30px 0px;
  font-size: 20px;
  line-height: 2;
  font-weight: normal;
  font-size: min(5.33vw, 1.5rem);
  letter-spacing: normal;
  line-height: 2.5rem;
`;

export const CardText = styled.p`
  text-align: justify;
  font-size: 15px;
  letter-spacing: normal;
  line-height: 1.75rem;
  color: rgb(145, 156, 189);
`;

export const IconHolder = styled.span`
  background-color: var(--dark);
  border-radius: 50%;
  padding: 20px;
  color: rgb(155, 248, 244);
`;

export const ThirdScreen = styled.div`
  padding: 150px 10px 150px 10px;
`;

export const ThirdHeading = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 100px;
  text-align: center;
  background-clip: text; /* Clip the background to the text */
  -webkit-background-clip: text; /* For Safari support */
  color: transparent; /* Make the text transparent */
  background-image: linear-gradient(90deg, rgb(155, 248, 244) 0%, rgb(111, 123, 247) 93.17%);
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

export const CardHolder3 = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  gap: 30px;

  @media screen and (max-width: 700px) {
    margin-top: 100px;
  }
`;

export const SingleCard3 = styled.div`
  background-color: #2e2b4f;
  width: 400px;
  border-radius: 10px;
  padding: 0px 40px 40px 40px;
`;

export const FourthScreen = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-radius: 40px;
  background-image: linear-gradient(90deg, rgb(16, 90, 134) 0%, rgb(23, 31, 78) 93.17%);
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const ParagraphHolder = styled.div`
  width: 50%;
  padding: 100px 100px 100px 100px;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 20px 20px 50px 20px;
  }
`;

export const FourthHeading = styled.h1`
  font-weight: normal;
  color: rgb(155, 248, 244);
  @media screen and (max-width: 700px) {
    font-size: 40px;
  }
`;

export const FourthImageHolder = styled.div`
  width: 50%;

  @media screen and (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
`;
