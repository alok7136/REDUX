import './App.css';
// import UseEffectcleanup from './useeffect/cleanup';
// import UseEffectApi from './useeffect/useeffectapi';
// import UseReducer from './UseReducer/Reducer';
// import CompA from './useContext/compA';
import {incNumber,decNumber} from "./redux/Action/action";
import {useSelector,useDispatch} from 'react-redux';
function App() {
const myfirststate = useSelector((state)=>state.ChangeTheNumber);
const dispatch = useDispatch()
  return (
    <div className="App">
    {/* <UseEffectdemo/> */}
    {/* {<UseEffectcleanup/>}
    {<UseEffectApi/>}
    {<UseReducer/>}
    {<CompA/>} */}
    <h1> INCREMENT AND DECREMENT COUNTER USING REDUX </h1>
    <div className='display'>
  <button type="button" onClick={()=>dispatch(incNumber())}>INCREMENT</button>&nbsp;
    <input type="text" className='display' value={myfirststate}/>&nbsp;
    <button type="button" onClick ={()=>dispatch(decNumber())}>DECREMENT</button>
    </div>
    </div>
  )
};
export default App;
