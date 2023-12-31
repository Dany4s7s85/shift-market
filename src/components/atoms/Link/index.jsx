import styled from 'styled-components/macro';
import { Link as ReactLink } from 'react-router-dom';
import { styles } from './Link.styles';

const StyledLink = styled(({ ...props }) => <ReactLink {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

function Link({ ...props }) {
  const { to, underline } = props;
  if (to) {
    return <StyledLink $underline={underline} {...props} />;
  }
  return <Anchor $underline={underline} {...props} />;
}

export default Link;
