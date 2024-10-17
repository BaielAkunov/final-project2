import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Nav } from './Nav';
import { useState, useEffect } from 'react';
import data from './data';
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
const { Header, Content } = Layout;




function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Прокрутка вниз
      setIsHeaderVisible(false);
    } else {
      // Прокрутка вверх
      setIsHeaderVisible(true);
    }
    
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Для мобильных браузеров
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };  }, [lastScrollTop]);
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
          
            <Nav/>

          </Header>
          <Content>
          <Routes>
          {
            data.map((obj, id)=>{
              return(
                <Route key={id} path={obj.route} element={<obj.element/>}/>
              )
            })
          }
        </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
      
        </Layout>
      </Router>
        
    </div>
  );
}

export default App;

