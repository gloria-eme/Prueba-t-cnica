import styled from 'styled-components';

const SectioStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-column-gap: 1em;
  grid-row-gap: 3em;
  margin: 7em 4em;
  justify-items: center;
  min-height: 31rem;
`;

const SectionStyle = ({ children }) => {
  return <SectioStyle>{children}</SectioStyle>;
};

export default SectionStyle;
