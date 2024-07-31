import Dropdown from './component/dropdown';
import Box from './component/box';
import ReactDOM from 'react-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className='heading'>
        <div className='header'>
            <img src = "https://res.cloudinary.com/dcggiwav8/image/upload/v1721997901/btxhxlpgfeae66wozpb5.png" className='logo' />
            <h1 className='h11'>GITAM DINING</h1>
        </div>
        <div className='dropdown '>
          <Dropdown />
          <Dropdown />
        </div>
        <div className='meal'>
          <h1 className='h11'>BREAKFAST</h1>
          <img src = "https://res.cloudinary.com/dcggiwav8/image/upload/v1722112553/nzsumxtpagcghj7jpxt3.png" className='logo' />
        </div>
        <div className='text'>
        <Box text="Idlli" />
        <Box text="Tomato Bath" />
        <Box text="Oats" />
        <Box text="Sweet Potato"/>
        <Box text="Milk"/>
        <Box text="Tea"/>
        
        </div>
        
      </header>
    </div>
  );
}

export default App;
