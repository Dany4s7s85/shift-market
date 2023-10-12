import styled, { css } from 'styled-components/macro';

const BtnStyles = css`
  color: var(--white);
  font-size: var(--font-size-xxl);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  display: flex;
`;

export const Delete = styled.button`
  ${BtnStyles}
  color: var(--danger);
`;

export const PreviewBtn = styled.button`
  ${BtnStyles}
`;

export const ImgHolder = styled.div`
  border-radius: 10px;
  width: ${({ size }) => (size ? `${size}px` : '250px')};
  height: ${({ size }) => (size ? `${size}px` : '250px')};
  overflow: hidden;
  position: relative;
  ${({ profile }) =>
    !profile &&
    css`
      border: 1px solid var(--light-gray);
      padding: 10px;
    `}
  cursor: pointer;
  &:hover {
    &:after,
    ${Delete},${PreviewBtn} {
      opacity: 1;
      visibility: visible;
    }
  }
  &:after {
    transition: all 0.3s ease-in-out;
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    visibility: hidden;
    z-index: 1;
  }
  ${({ noOverlay }) =>
    noOverlay &&
    css`
      cursor: auto;
      &:hover {
        &:after {
          display: none;
          opacity: 0;
          visibility: hidden;
          content: '';
        }
      }
    `}
  img {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      height: auto;

      img {
        height: 327px;
        object-fit: fill;
      }
    `}
`;

export const BtnsHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 30px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  .text {
    display: block;
    font-size: 16px;
    line-height: 18px;
    margin: 0 -10px;
    color: white;
    font-weight: 800;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  display: block;
  max-width: ${({ previewedImgSize }) => (previewedImgSize ? `${previewedImgSize}px` : '70%')};
`;
