
import './App.css';
import MainSection from './section/MainSection';
import Header from './components/Header';
import CheckoutBar from './components/CheckoutBar';
import HistorySection from './section/HistorySection';
import FaqSection from './section/FaqSection';
import FooterSection from './section/FooterSection';
function App() {
  return (
    <CheckoutBar active={true}>
      <div>
      <div className='bg-[] w-full h-full  pt-8'>  
      <Header/>
      <MainSection></MainSection>   
      <HistorySection/>
      <FaqSection/> 
     
    </div>
    <FooterSection/>
      </div>
    
    </CheckoutBar>
  );
}

export default App;
