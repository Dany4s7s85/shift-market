import React from 'react';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import ModalContainer from 'components/molecules/ModalContainer';
import Loaders from 'components/atoms/Loaders';
import { ImgHolder, Delete, PreviewBtn, BtnsHolder, StyledImg } from './ImgPreview.styles';
import PdfIcon from '../../../assets/images/pdfdemo.png';
import ConfirmationModal from '../ConfirmationModal';

function ImgPreview({
  src,
  alt,
  pdf,
  onDelete,
  profile,
  withDelete,
  withEdit,
  rounded,
  size,
  previewedImgSize,
  fullWidth,
  noOverlay,
  loading,
  ...props
}) {
  return pdf ? (
    <ImgHolder size={size} $pdf {...props} rounded={rounded} fullWidth={fullWidth} noOverlay={noOverlay}>
      <PreviewBtn as="a" href={src} type="button" target="_blank" download rel="noreferrer" withDelete={withDelete}>
        <span className="material-icons-outlined">file_download</span>
      </PreviewBtn>
      <img src={PdfIcon} alt="pdf icon" />
      {withDelete && (
        <ConfirmationModal
          title="Are you sure you want to Delete this document?"
          onOk={onDelete}
          confirmationModal="yes"
          btnComponent={({ onClick }) => (
            <Delete type="button" onClick={onClick}>
              <span className="material-icons-outlined">delete</span>
            </Delete>
          )}
        />
      )}
    </ImgHolder>
  ) : (
    <ModalContainer
      lg
      imgPreview
      btnComponent={({ onClick }) => (
        <ImgHolder
          profile={profile}
          size={size}
          rounded={rounded}
          fullWidth={fullWidth}
          noOverlay={noOverlay}
          {...props}>
          <Loaders loading={loading}>
            <img src={src} alt={alt || 'product image'} />
          </Loaders>
          <BtnsHolder>
            {!profile && (
              <PreviewBtn type="button" onClick={onClick} withDelete={withDelete}>
                <span className="material-icons-outlined">visibility</span>
              </PreviewBtn>
            )}

            {withDelete && (
              <ConfirmationModal
                title="Are you sure you want to Delete this document?"
                onOk={onDelete}
                deleteModal
                btnComponent={({ onClick: newClick }) => (
                  <Delete type="button" onClick={newClick}>
                    <span className="icon-trashcan" />
                  </Delete>
                )}
              />
            )}
            {withEdit && (
              <ConfirmationModal
                title="Are you sure you want to upload another image?"
                onOk={onDelete}
                confirmationModal="yes"
                btnComponent={({ onClick: newClick }) => (
                  <Delete type="button" onClick={newClick}>
                    <span className="text">CHANGE IMAGE</span>
                  </Delete>
                )}
              />
            )}
          </BtnsHolder>
        </ImgHolder>
      )}
      content={() => <StyledImg previewedImgSize={previewedImgSize} src={src} alt={alt || 'image'} />}
    />
  );
}

export default ImgPreview;
