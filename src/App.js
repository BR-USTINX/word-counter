
import './App.css';

import Navbar from './components/Navbar';
// import Bon from './components/Bon';


import Textform from './components/Textform'
function App() {
  return (
    <>

      <Navbar title="toda"/>
      <div className='container my-3'>
        <Textform heading="Enter the text to analyze" />
       {/* <Bon/> */}
      </div>
    </>
  );
}

export default App;
