import React, { memo, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../aos__custom.scss';
import clsx from 'clsx';
import classes from '../style.module.scss';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';
import ServiceArticle from './ServiceArticle';

import pictureOne from '../../../assets/img/services/one.png';
import pictureTwo from '../../../assets/img/services/two.png';
import pictureThree from '../../../assets/img/services/three.png';
import pictureFour from '../../../assets/img/services/four.png';

const Services = ({ servicesClassName, servicesConteinerClassName }) => {
	useEffect(() => {
		AOS.init({
			duration: 1500,
			startEvent: 'DOMContentLoaded',
			delay: 500,
			once: true,
			disableMutationObserver: true,
			throttleDelay: 10,
			delayTime: 10
		});
	}, []);
	return (
		<section className={clsx(classes.services, servicesClassName)}>
			<Container className={clsx(classes.container, servicesConteinerClassName)}>
				<HeadingOne
					color={{ color: '#1B4573' }}
					childrenOne="SERVICES"
					className={classes.heading}
				/>
				<div data-aos="right-to-left" className={classes.cards}>
					<ServiceArticle
						picture={pictureOne}
						name="ItemOne"
						title="Logistic solutions"
						subtitle="Logistic solutions to oil, diesel, bio ethanol transportation, packless and general cargoes"
					/>
					<ServiceArticle
						picture={pictureTwo}
						name="ItemTwo"
						title="Storage in tankers and containers"
						subtitle="Storage of petrochemical products in tankers and containers"
					/>
					<ServiceArticle
						picture={pictureThree}
						name="ItemThree"
						title="Storage and processing"
						subtitle="Storage and processing of petrochemical products"
					/>
					<ServiceArticle
						picture={pictureFour}
						name="ItemFour"
						title="Manufacturing and distribution"
						subtitle="Logistic solutions to oil, diesel, bio ethanol transportation, packless and general cargoes"
					/>
				</div>
			</Container>
		</section>
	);
};

export default memo(Services);
