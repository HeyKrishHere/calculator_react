import './App.css';
import Display from './components/Display.jsx';
import ButtonsContainer from './components/ButtonsContainer.jsx';
import {useState} from 'react';
function App() {
  let [display, setDisplay] = useState('');
  const onButtonClick = (button) => {
    if (button === 'C') {
      setDisplay('');
    }
    else if (button==='=')
    {
      const result = eval(display);
      setDisplay(result);
    }
    else{
      setDisplay(display+button)
    }
  };
  
  return (
    <div className='calculator'>
      <Display displayvalue={display}/>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
 