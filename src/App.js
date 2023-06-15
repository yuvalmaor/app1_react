
import React from 'react';
import { useState } from "react";
import NavBar from './components/NavBar';
import MyCarousel from './components/carousel/MyCarousel';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGridList from './components/ImageGridList/ImageGridList';
import BigBanner from './components/BigBanner/BigBanner';
import TextComponent from './components/TextComponent';
import Footer from './components/Footer';
import NewGridList from './components/NewGridList/NewGridList';
import './App.css';
import banner from './Bigbanner.png';
import BetMGMC from './images/BETMGM5.png'
import BorgataC from './images/Borgata-Casino5.png'
import BorgataS from './images/Borgata_Sport5.png'
import CaesarsS from './images/Caesars_S&C5.png'
import CaesarsC from './images/Caesars_S&C5.png'

import PointsS from './images/Pointsbet125.png'

import SIC from './images/SI CASINO5.png'
import unibetC from './images/unibet casino5.png'
import unibetS from './images/unibet sport5.png'
import partyC from './images/Party Casino5.png'
import WynnBetC from './images/WynnBet Casino35.png'

import BetMGMS from './images/BetMGM Sport5.png'
import WynnBetS from './images/WynnBet Sport5.png'
















function App() {
  const bannerLink='http://imperialbonusclub.com/Winter/IBC-EON-1250WB-EN-001.php?snippet=_empireonet'
  
  const imageListCasino = [
    {
      
      name: 'BetMGM Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676299&tdpeh=XXXXX',
      offer:'100% DEPOSIT MATCH (UP TO 1000$) PLUS $25 ON THE HOUSE',
      image: BetMGMC
    },
    {
     
      name: 'Party Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676304&tdpeh=XXXXX',
      offer:'100% DEPOSIT MATCH (UP TO $500) AND 100 FREE SPINS',
      image: partyC
    },
    {
      
      name: 'Borgata Casino',
      link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676301&tdpeh=XXXXX',
      offer:'',
      image: BorgataC
    },
    {
      
      name: 'Wynnbet Casino',
      link: 'https://wlwsiusllcwynnbet.adsrv.eacdn.com/C.ashx?btag=a_377b_176c_&affid=126&siteid=377&adid=176&c=XXXXX',
      offer:'',
      image: WynnBetC
    },
    {
      
        name: 'Caesars Casino',
        link: 'https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_7249b_2341c_&affid=249&siteid=7249&adid=2341&c=XXXXX',
        offer:'',
        image: CaesarsC
    },
    {
      
        name: 'SICasino',
        link: 'https://ic.aff-handler.com/C/48127?sr=1824505&anid=XXXXX',
        offer:'',
        image: SIC
    },
    {
      
        name: 'Unibet Casino',
        link: 'https://www.arpasivut.com/C.ashx?btag=a_4558b_567c_&affid=564&siteid=4558&adid=567&c=XXXXX',
        offer:'',
        image: unibetC
    },
  ]



const imageListSport = [
    {
      
        name: 'BetMGM Sport',
        link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676308&tdpeh=XXXXX',
        offer:'',
        image: BetMGMS
      },
      {
       
        name: 'Borgata Sport',
        link: 'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1676306&tdpeh=XXXXX',
        offer:'',
        image: BorgataS
      },
      {
        
        name: 'Caesars Sport',
        link: 'https://wlwilliamhillus.adsrv.eacdn.com/C.ashx?btag=a_6684b_2486c_&affid=249&siteid=6684&adid=2486&c=XXXXX',
        offer:'',
        image: CaesarsS
      },
      {
        
        name: 'Wynnbet Sport',
        link: 'https://wlwsiusllcwynnbet.adsrv.eacdn.com/C.ashx?btag=a_377b_100c_&affid=126&siteid=377&adid=100&c=XXXXX',
        offer:'',
        image: WynnBetS 
      },
      {
        
          name: 'PointsBet Sport',
          link: 'https://record.pointsbetpartners.com/_orB-OfF7jVxLjTu7CWcLIGNd7ZgqdRLk/1/?payload=XXXXX&s2s.req_id=XXXXX',
          offer:'',
          image: PointsS
      },
      {
        
          name: 'Unibet Sport',
          link: 'https://www.arpasivut.com/C.ashx?btag=a_4558b_299c_&affid=564&siteid=4558&adid=299&c=XXXXX',
          offer:'',
          image: unibetS
      },
      
  ]

  const imageLinkList=imageListCasino.concat(imageListSport)
  return (
    
    <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={
        <>
        
        <BigBanner image={banner} link={bannerLink}/>
        <TextComponent text="HOT OFFERS" />
        <MyCarousel props={imageLinkList } />
        {/*<ImageGridList imageLinkList={imageLinkList} />*/}
        <NewGridList imageLinkList={imageLinkList} />
        </>
      }/>

      <Route path="/casino" element={
        <>
      
        <BigBanner image={banner} link={bannerLink}/>
        <TextComponent text="HOT OFFERS" />
        <MyCarousel props={imageListCasino} />
        <ImageGridList imageLinkList={imageListCasino} />
        </>
      }/>

      <Route path="/sport" element={
        <>
        
        <BigBanner image={banner} link={bannerLink}/>
        <TextComponent text="HOT OFFERS" />
        <MyCarousel props={imageListSport} />
        <ImageGridList imageLinkList={imageListSport} />
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
    <Footer/>
  </Router>
   
  );
}

export default App;
