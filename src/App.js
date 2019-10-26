import React from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  YoutubeVideo,
  YoutubeVideoList,
  WhatsApp,
  Vimeo,
  Twitter,
  Instagram,
  GooglePlus,
  Facebook,
  FacebookMessenger,
  PinterestBookmark,
  PinterestButtonFollow,
  PinterestPin,
  PinterestBoard,
  PinterestProfile
} from './components/social-media';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				...
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
  );
}

export default App;
