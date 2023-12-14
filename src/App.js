
import './App.css';
import MainSection from './section/MainSection';
import Header from './components/Header';
import CheckoutBar from './components/CheckoutBar';
function App() {
  return (
    <CheckoutBar active={true}>
    <div className='bg-indigo-500 w-100 h-full mx-20 pt-8'>  
      <Header/>
      <MainSection></MainSection>    
    </div>
    </CheckoutBar>
  );
}

export default App;
