import styled from 'styled-components';

const PosterStyl = styled.div`
  width: 12.5rem;
  height: 23.5rem;
  transition: 0.4s all ease-in-out;
  align-items: center;
  border-radius: 3%;
  border: .1rem solid transparent;
  
  &:hover {
    border: 1.5px solid rgb(240, 238, 238);
  }
`;

const PosterStyle = ({ children }) => {
  return <PosterStyl>{children}</PosterStyl>;
};
export default PosterStyle;
