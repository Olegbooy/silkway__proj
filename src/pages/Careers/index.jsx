import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import classes from './style.module.scss';
import Container from "../../Components/Container";
import HeadingOne from "../../Components/HeadingOne/HeadingOne";

import picture1 from '../../assets/img/carrers/picture_1.png';
import picture2 from '../../assets/img/carrers/picture_2.png';


const Carrers = () => {
	return (
		<>
			<Helmet>
				<title>Silkway Carrers</title>
			</Helmet>
			<section className={classes.carrer}>
				<Container className={classes.container}>
					<HeadingOne
						childrenOne="CARRERS"
						color={{ color: '#1B4573' }}
						className={classes.title}
					/>
					<div className={classes.block__photos}>
						<div className={classes.image__wrapper}>
							<img src={picture1} alt="picture1" />
						</div>
						<div className={classes.image__wrapper}>
							<img src={picture2} alt="picture2" />
						</div>
					</div>
				</Container>
			</section>
		</>
	);
};

export default memo(Carrers);
