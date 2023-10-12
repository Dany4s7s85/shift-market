import Link from 'components/atoms/Link';

import { QrInstructions, QrHolder, List, ListItem } from './QrModal.styles';

function QrModal({ qrImg }) {
  return (
    <QrInstructions>
      <QrHolder>
        <img src={qrImg} alt="qr" />
      </QrHolder>
      <span className="title">Steps you need to do :</span>
      <List>
        <ListItem>
          Download the authenticator app from{' '}
          <Link href="https://play.google.com/store/apps/details?id=com.azure.authenticator" target="_blank">
            Google play store
          </Link>{' '}
          /{' '}
          <Link href="https://apps.apple.com/us/app/microsoft-authenticator/id983156458" target="_blank">
            {' '}
            Apple Store.{' '}
          </Link>
        </ListItem>
        <ListItem>Select add account with qr code to scan the qr code given here. </ListItem>
        <ListItem>Use the token generated by the app in the code section. </ListItem>
      </List>
      <span className="text-center d-block">Stay Safe, Stay Blessed </span>
    </QrInstructions>
  );
}

export default QrModal;