import SectionStyle from '../../ui/SectionStyle';
import Poster from './Poster';

const Filters = ({ param }) => {
  return (
    <SectionStyle>
      {param
        .filter((item) => item.releaseYear >= 2010)
        .filter((item, i) => item && i < 20)
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map((item) => (
          <Poster item={item} key={item.title} />
        ))}
    </SectionStyle>
  );
};

export default Filters;
