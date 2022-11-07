import Filters from './Filters';
import Loading from './Loading';

const TimeOut = ({item}) => {
  const [loading, setLoading] = useState(false);

  changeState()
  
  const changeState = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

if(loading){
    return(<Loading />)
} else {
    return (<Filters param={item}/>)
}
  //   loading ? <Loading /> : <Filters param={item}/>
};

export default TimeOut;
