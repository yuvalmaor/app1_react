import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import MyCarousel from './components/carousel/MyCarousel';
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
    <>
    <NavBar/>
    <BigBanner image={banner} link={bannerLink}/>
    <TextComponent text="HOT OFFERS" />
    <MyCarousel/>
    <ImageGridList imageLinkList={imageLinkList} />
    </>
  );
}

export default App;
