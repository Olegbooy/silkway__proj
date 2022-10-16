import React, { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import classes from '../style.module.scss';
import person1 from '../../../assets/img/team/human1.png';
import person2 from '../../../assets/img/team/human2.png';
import person3 from '../../../assets/img/team/human3.png';
import person4 from '../../../assets/img/team/human4.png';
import person5 from '../../../assets/img/team/human5.png';

// swiper styles

import "swiper/css";
import "swiper/css/navigation";



const TeamHumans = () => {
	const person = [
		{
			name: 'person1',
			firstName: 'Cristofer',
			lastName: 'Siphron',
			postNameOne: 'CEO',
			postNameTwo: '',
			image: person1,
		},
		{
			name: 'person2',
			firstName: 'Kadin',
			lastName: 'Geidt',
			postNameOne: 'Client’s',
			postNameTwo: 'Support',
			image: person2,
		},
		{
			name: 'person3',
			firstName: 'Ruben',
			lastName: 'Stanton',
			postNameOne: 'Logistics',
			postNameTwo: 'Manager',
			image: person3,
		},
		{
			name: 'person4',
			firstName: 'James',
			lastName: 'Korsgaard',
			postNameOne: 'Trader',
			postNameTwo: '',
			image: person4,
		},
		{
			name: 'person5',
			firstName: 'Kadin',
			lastName: 'Korsgaard',
			postNameOne: 'Lawyer',
			postNameTwo: '',
			image: person5,
		}
	];
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={60}
			pagination={{ clickable: true }}
			centeredSlides={true}
			centerInsufficientSlides={true}
			centeredSlidesBounds={true}
			className={classes.swiper__team}
			modules={[Navigation]}
			navigation={true}
			allowTouchMove={true}
			slideToClickedSlide={true}
			breakpoints={{
				1210: {
					spaceBetween: 70
				},
				992: {
					spaceBetween: 100
				},
				320: {
					slidesPerView: 1
				},
				620: {
					slidesPerView: 3
				}
			}}
		>
			{
				person.map(({ name, firstName, lastName, postNameOne, postNameTwo, image }) => (
					<SwiperSlide key={name} className={classes.swiper__slide}>
						<div className={classes.col}>
							<figure>
								<img src={image} alt="name" />
							</figure>
							<p className={classes.name}>
								<span>{firstName}</span>
								<span>{lastName}</span>
							</p>
							<p className={classes.post}>
								<span>{postNameOne}</span>
								<span>{postNameTwo}</span>
							</p>
						</div>
					</SwiperSlide>
				))
			}
		</Swiper>
	);
};

export default memo(TeamHumans);
