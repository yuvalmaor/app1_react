import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MyCarousel from './components/carousel/MyCarousel';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGridList from './components/ImageGridList/ImageGridList';
import BigBanner from './components/BigBanner/BigBanner';
import TextComponent from './components/TextComponent';
import shot from './Screenshot.png';
import shot2 from './Screenshot2.png';
import banner from './Bigbanner.png';
function App() {
  const bannerLink='http://imperialbonusclub.com/Winter/IBC-EON-1250WB-EN-001.php?snippet=_empireonet'
  
  const imageLinkList = [
    {
      id: '1',
      name: 'BetMGM Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676299&tdpeh=XXXXX',
      image: shot
    },
    {
      id: '2',
      name: 'BetMGM Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676301&tdpeh=XXXXX',
      image: shot2
    },
    {
      id: '3',
      name: 'BetMGM Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676299&tdpeh=XXXXX',
      image: shot
    },
    {
      id: '4',
      name: 'BetMGM Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676299&tdpeh=XXXXX',
      image: shot
    },
  ]
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={
        <>
        <BigBanner image={banner} link={bannerLink}/>
        <TextComponent text="HOT OFFERS" />
        <MyCarousel  />
        <ImageGridList imageLinkList={imageLinkList} />
        </>
      }/>

    {/*
      <Route path="/page2">
        <BigBanner {...page2Props.banner} />
        <TextComponent text="HOT OFFERS" />
        <MyCarousel {...page2Props.carousel} />
        <ImageGridList {...page2Props.gridList} />
      </Route>

      <Route path="/page3">
        <BigBanner {...page3Props.banner} />
        <TextComponent text="HOT OFFERS" />
        <MyCarousel {...page3Props.carousel} />
        <ImageGridList {...page3Props.gridList} />
      </Route>
  */}
    </Routes>
  </Router>
   
  );
}

export default App;
