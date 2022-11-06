import styled from 'styled-components';

const SectioStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 4em;
  margin: 7em 4em;
`;

const SectionStyle = ({ children }) => {
  return <SectioStyle>{children}</SectioStyle>;
};
export default SectionStyle;
