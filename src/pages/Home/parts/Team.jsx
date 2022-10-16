import React, { memo, useEffect } from 'react';
import AOS from 'aos';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';
import classes from '../style.module.scss';
import TeamHumans from './TeamHumans';

const Team = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			startEvent: 'DOMContentLoaded',
			delay: 500,
			once: false,
			disableMutationObserver: true,
			throttleDelay: 100,
			delayTime: 100
		});
	}, []);
	return (
		<section className={classes.team}>
			<Container className={classes.container}>
				<HeadingOne
					childrenOne="TEAM"
					className={classes.title}
				/>
				<TeamHumans />
			</Container>
		</section>
	);
};

export default memo(Team);
