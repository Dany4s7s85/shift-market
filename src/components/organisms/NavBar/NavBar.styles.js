import styled from 'styled-components/macro';

export const Nav = styled.nav`
  margin: 30px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    display: none;
  }
}
`;

export const IconWrapper = styled.div`
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  background-color: rgba(255, 255, 255, 0.14);
  padding: 20px 25px 20px 25px;
  border-radius: 40px;
`;

export const Li = styled.li`
  list-style: none;
  color: white;
  position: relative;
  cursor: pointer;
  margin: 10px 20px 10px 20px;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.375rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  white-space: nowrap;
  width: fit-content;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.2s ease;
  }

  &:hover:before {
    width: 100%;
  }
`;

export const NavIconHolder = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: block;
  }
`;

export const Nav2 = styled.nav`
  visibility: hidden;
  position: relative;
  background-color: var(--secondary);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 700px) {
    visibility: visible;
  }
`;

export const Ul2 = styled.ul`
  padding: 20px 25px 20px 25px;
`;

export const Li2 = styled.li`
  list-style: none;
  color: white;
  cursor: pointer;
  position: relative;
  margin-bottom: 40px;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2rem;
  text-decoration: none;
  letter-spacing: 0.02em;
  white-space: nowrap;
  width: fit-content;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.2s ease;
  }

  &:hover:before {
    width: 100%;
  }
`;
