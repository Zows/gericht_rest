import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Reservation.css';

const Reservation = () => (
	<div className="app__reservation section__padding">
		<div className="app__logo-right">
			<img src={images.logo} alt="app_logo"/>
		</div>
			<div className="app__reservation-container">
				<div className="app__reservation-heading">
					<SubHeading title="Reservation"/>
					<h1 className="headtext__cormorant">Book A Table</h1>
				</div>
				<div className="app__reservation-select">
					<div className="app__reservation-select_items app__reservation-select_person">
						<select name="person[]">
							<option value="1_person">1 person</option>
							<option value="2_person">2 person</option>
							<option value="3_person">3 person</option>
							<option value="4_person">4 person</option>
							<option value="5_person">5 person</option>
							<option value="6_person">6 person</option>
						</select>
					</div>
					<div className="app__reservation-select_items app__reservation-select_date">
						<input type="date" value="2022-07-09" max="2022-12-31"/>
					</div>
					<div className="app__reservation-select_items app__reservation-select_time">
						<input type="time" value="10:00" max="19:00" required/>
					</div>
				</div>
	      <button type="button" className="custom__button">Book Now</button>
			</div>
	</div>
);

export default Reservation;