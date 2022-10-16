import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import AboutUsIntro from './parts/AboutUsIntro';
import Services from '../Home/parts/Services';
import classes from './style.module.scss';

const AboutUs = () => {
	return (
		<>
			<Helmet>
				<title>Silkway About us</title>
			</Helmet>
			<AboutUsIntro />
			<Services
				servicesClassName={classes.services}
				servicesConteinerClassName={classes.container}
			/>
		</>
	);
};

export default memo(AboutUs);
