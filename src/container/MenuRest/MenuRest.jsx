import React from 'react';

import { images } from '../../constants';
import './MenuRest.css';

const MenuRest = () => (
	<div className="app__bg-menu">
		<div className="app__logo-left">
			<img src={images.logo} alt="app_logo"/>
		</div>
		<div className="app__menu-bar">
			<h1 className="headtext__cormorant-menu"><a href="#" className="underline">Bar Menu</a></h1>
			<h1 className="headtext__cormorant-menu"><a href="#" className="underline">Food Menu</a></h1>
			<h1 className="headtext__cormorant-menu"><a href="#" className="underline">Desserts Menu</a></h1>
		</div>
	</div>
);

export default MenuRest;