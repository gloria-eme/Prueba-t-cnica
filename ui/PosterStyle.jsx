import styled from 'styled-components';

const PosterStyl = styled.div`
  width: 14em;
  height: 24.5rem;
  transition: 0.3s all ease-in-out;
  align-items: center;

  &:hover {
    opacity: 60%;
    border: 1.5px solid rgb(240, 238, 238);
  }
`;

const PosterStyle = ({ children }) => {
  return <PosterStyl>{children}</PosterStyl>;
};
export default PosterStyle;
