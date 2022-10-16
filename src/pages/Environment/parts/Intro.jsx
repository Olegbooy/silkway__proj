import React, { memo } from 'react';
import classes from '../style.module.scss';
import Container from "../../../Components/Container";
import HeadingOne from "../../../Components/HeadingOne/HeadingOne";

import picture1 from '../../../assets/img/environment/picture_1.png';

const Intro = () => {
	return (
		<section className={classes.intro}>
			<Container>
				<HeadingOne
					childrenOne="ENVIRONMENT"
					className={classes.title}
				/>
				<div className={classes.about_inner}>
					<div className={classes.left}>
						<p>
							Silkway Petroleum is committed to protecting the environment and minimizing the impact of our operations.
						</p>
						<p>
							This includes managing emissions, mitigating dust and reducing noise, as well as treating and recycling water used on our site. We are proud that our measures and performance meet or exceed all standards set by our regulators – the Port of Vancouver, Metro Vancouver (air quality), the City of North Vancouver (noise), the BC Ministry of the Environment (water quality) and others.
						</p>
					</div>
					<div className={classes.right}>
						<figure>
							<img src={picture1} alt="picture1" />
						</figure>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default memo(Intro);
