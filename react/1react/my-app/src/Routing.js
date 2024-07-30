import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Store from './Pages/Store';
import UseState from './default_function/AAUseState';
import UseEffect from './default_function/ABUseEffect';
import UseRef from './default_function/ACUseRef';
import UseRef2 from './default_function/ACUseRef2';
import Props from './default_function/ADProps';
import Reducer from './toy/Reducer';
import Reducer2 from './toy/Reducer2';
import SectionComponent from "./default_function/L-react/Agreen/SectionComponent";
import Wrapcomponent from "./default_function/L-react/Bgreen/WrapComponent";

  // ㄴ ex) UseState

function Routing() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          {/* path가 아무것도 없을때 App로 가라 */}
          <Route path='/Store' element={<Store />} />
          {/* path가 Store일때 Sotre로 가라 */}
          <Route path='/UseState' element={<UseState />} />
          <Route path='/UseEffect' element={<UseEffect />} />
          <Route path='/UseRef' element={<UseRef />} />
          <Route path='/UseRef2' element={<UseRef2 />} />
          <Route path='/Props' element={<Props />} />
          <Route path='/Reducer' element={<Reducer />} />
          <Route path='/Reducer2' element={<Reducer2 />} />
          <Route path='/SectionComponent' element={<SectionComponent />} />
          <Route path='/Wrapcomponent' element={<Wrapcomponent />} />
          
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default Routing;

