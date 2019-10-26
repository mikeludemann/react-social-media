import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

class YoutubeVideo extends Component {
	render() {
		return (
			<iframe 
				src={"https://www.youtube.com/embed/" + this.props.videoID} 
				width={this.props.width} 
				height={this.props.height} 
				frameborder="0" 
				allow="autoplay; encrypted-media" 
				allowfullscreen
			>
			</iframe>
		);
	}
}

YoutubeVideo.propTypes = {
	videoID: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string
}

// ------------------------------------------------------------------------------------

class YoutubeVideoList extends Component {
	render() {
		return (
			<iframe 
				src={"https://www.youtube.com/embed/videoseries?list=" + this.props.videoListID} 
				width={this.props.width} 
				height={this.props.height} 
				frameborder="0" 
				allow="autoplay; encrypted-media" 
				allowfullscreen
			>
			</iframe>
		);
	}
}

YoutubeVideoList.propTypes = {
	videoListID: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string
}

// ------------------------------------------------------------------------------------

class WhatsApp extends Component {

	render() {
		return (
			<div id="whatsapp">
				<a href={"https://api.whatsapp.com/send?phone=" + this.props.tel + "&text=" + this.props.text + "&source=" + this.props.source + "&data=" + this.props.data} target="_blank">
					<div>
						<i class="fab fa-whatsapp fa-2x">{this.props.defaultText}</i>
					</div>
				</a>
			</div>
		)
		}

}

WhatsApp.propTypes = {
	tel: PropTypes.string.isRequired,
	text: PropTypes.string,
	source: PropTypes.string,
	data: PropTypes.string,
	defaultText: PropTypes.string
}

// ------------------------------------------------------------------------------------

class Vimeo extends Component {
	render() {
		return (
			<iframe 
				src={"https://player.vimeo.com/video/" + this.props.videoID} 
				width={this.props.width} 
				height={this.props.height} 
				frameborder="0" 
				webkitallowfullscreen mozallowfullscreen allowfullscreen
			>
			</iframe>
		);
	}
}

Vimeo.propTypes = {
	videoID: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string
}

// ------------------------------------------------------------------------------------

class Twitter extends Component {

	componentDidMount() {

		var js = document.createElement("script");
		js.setAttribute("src", "https://platform.twitter.com/widgets.js");
		js.setAttribute("async", "true");
		js.setAttribute("charset", "utf-8");
		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<a
				class={"twitter-" + this.props.style}
				href={"http://twitter.com/" + this.props.twitterID}
			>
				Tweets by {this.props.twitterID}
			</a>
		)
	}
}

Twitter.propTypes = {
	twitterID: PropTypes.string.isRequired,
	style: PropTypes.oneOf(["grid", "timeline"]).isRequired
}

// ------------------------------------------------------------------------------------

class Instagram extends Component {

	componentDidMount() {

		var js = document.createElement("script");
		js.setAttribute("src", "https://www.instagram.com/embed.js");
		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<blockquote
				class="instagram-media"
				data-instgrm-captioned
				data-instgrm-permalink={"https://www.instagram.com/p/" + this.props.instagramPostID}
				data-instgrm-version="9"
				style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
			>
			</blockquote>
		)
	}
}

Instagram.propTypes = {
	instagramPostID: PropTypes.string.isRequired
}

// ------------------------------------------------------------------------------------

class GooglePlus extends Component {

	componentDidMount() {

		var js = document.createElement("script");
		js.setAttribute("type", "text/javascript");
		js.setAttribute("src", "https://apis.google.com/js/platform.js");
		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("charset", "utf-8");
		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div class="g-post" data-href={"https://plus.google.com/" + this.props.googlePlusID + "/posts/" + this.props.postID}></div>
		)
	}
}

GooglePlus.propTypes = {
	googlePlusID: PropTypes.string.isRequired,
	postID: PropTypes.string.isRequired
}

// ------------------------------------------------------------------------------------

class Facebook extends Component {
	componentDidMount(){
		var js = document.createElement("script");

			js.innerHTML= `
				(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v3.1';
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
			`;

			document.getElementsByTagName("body").item(0).appendChild(js);
	}
	render() {
		return (
			<div id="facebook--container">
				<div id="fb-root"></div>
				<div class="fb-post" data-href={this.props.postURL} data-show-text="true"></div>
			</div>
		);
	}
}

Facebook.propTypes = {
	postURL: PropTypes.string.isRequired
}

// ------------------------------------------------------------------------------------

class FacebookMessenger extends Component {

	render() {
		return (
			<div id="facebookMessenger">
				<a href={"https://m.me/" + this.props.username} target="_blank">
					<div>
						<i class="fab fa-facebook-messenger fa-2x">{this.props.text}</i>
					</div>
				</a>
			</div>
		)
		}

}

FacebookMessenger.propTypes = {
	username: PropTypes.string.isRequired,
	text: PropTypes.string
}

// ------------------------------------------------------------------------------------

class PinterestBookmark extends Component {

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");


		if (this.props.round == true) {

			pin.setAttribute("data-pin-round", "true");

		}

		if (this.props.large == true) {

			pin.setAttribute("data-pin-tall", "true");

		}


		if (this.props.language != "" || this.props.language != null) {

			pin.setAttribute("data-pin-lang", + this.props.language);

		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="buttonBookmark" data-pin-lang={this.props.language} href="https://www.pinterest.com/pin/create/button/"></a>
			</div>
		)
	}
}

PinterestBookmark.propTypes = {
	round: PropTypes.bool,
	large: PropTypes.bool,
	language: PropTypes.string
}

// ------------------------------------------------------------------------------------

class PinterestButtonFollow extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");
		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a data-pin-do="buttonFollow" href={"https://www.pinterest.com/" + this.props.follow}>{this.props.fullName}</a>
			</div>
		)
	}
}

PinterestButtonFollow.propTypes = {
	follow: PropTypes.string.isRequired,
	fullName: PropTypes.string
}

// ------------------------------------------------------------------------------------

class PinterestPin extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedPin" data-pin-width={this.props.size} data-pin-terse={this.props.descriptionHide} href={"https://www.pinterest.com/pin/" + this.props.pinID}></a>
			</div>
		)
	}
}

PinterestPin.propTypes = {
	size: PropTypes.oneOf(["","small","medium","large"]).isRequired,
	descriptionHide: PropTypes.oneOf(["","true","false"])
}

// ------------------------------------------------------------------------------------

class PinterestBoard extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		if (this.props.format == "square") {
			pin.setAttribute("data-pin-board-width", "400");
			pin.setAttribute("data-pin-scale-height", "240");
			pin.setAttribute("data-pin-scale-width", "80");
		}

		if (this.props.format == "sidebar") {
			pin.setAttribute("data-pin-board-width", "150");
			pin.setAttribute("data-pin-scale-height", "800");
			pin.setAttribute("data-pin-scale-width", "60");
		}

		if (this.props.format == "header") {
			pin.setAttribute("data-pin-board-width", "900");
			pin.setAttribute("data-pin-scale-height", "120");
			pin.setAttribute("data-pin-scale-width", "115");
		}

		if (this.props.format == "custom") {
			pin.setAttribute("data-pin-board-width", + this.props.boardWidth);
			pin.setAttribute("data-pin-scale-height", + this.props.scaleHeight);
			pin.setAttribute("data-pin-scale-width", + this.props.scaleWidth);


		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedBoard" href={"https://www.pinterest.com/" + this.props.boardUrl}></a>
			</div>
		)
	}
}

PinterestBoard.propTypes = {
	format: PropTypes.oneOf(["square","sidebar","header","custom"]).isRequired,
	boardWidth: PropTypes.string,
	scaleHeight: PropTypes.string,
	scaleWidth: PropTypes.string,
	boardUrl: PropTypes.string,
}

// ------------------------------------------------------------------------------------

class PinterestProfile extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {

		var js = document.createElement("script"),
			pin = document.getElementById("pinterest");

		js.setAttribute("async", "true");
		js.setAttribute("defer", "true");
		js.setAttribute("src", "//assets.pinterest.com/js/pinit.js");

		if (this.props.format == "square") {
			pin.setAttribute("data-pin-board-width", "400");
			pin.setAttribute("data-pin-scale-height", "240");
			pin.setAttribute("data-pin-scale-width", "80");
		}

		if (this.props.format == "sidebar") {
			pin.setAttribute("data-pin-board-width", "150");
			pin.setAttribute("data-pin-scale-height", "800");
			pin.setAttribute("data-pin-scale-width", "60");
		}

		if (this.props.format == "header") {
			pin.setAttribute("data-pin-board-width", "900");
			pin.setAttribute("data-pin-scale-height", "120");
			pin.setAttribute("data-pin-scale-width", "115");
		}

		if (this.props.format == "custom") {
			pin.setAttribute("data-pin-board-width", + this.props.boardWidth);
			pin.setAttribute("data-pin-scale-height", + this.props.scaleHeight);
			pin.setAttribute("data-pin-scale-width", + this.props.scaleWidth);


		}

		document.getElementsByTagName("head").item(0).appendChild(js);

	}

	render() {
		return (
			<div id="container">
				<a id="pinterest" data-pin-do="embedUser" href={"https://www.pinterest.com/" + this.props.userName}></a>
			</div>
		)
	}
}

PinterestProfile.propTypes = {
	format: PropTypes.oneOf(["square","sidebar","header","custom"]).isRequired,
	boardWidth: PropTypes.string,
	scaleHeight: PropTypes.string,
	scaleWidth: PropTypes.string,
	userName: PropTypes.string,
}

// ------------------------------------------------------------------------------------

export {
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
}
