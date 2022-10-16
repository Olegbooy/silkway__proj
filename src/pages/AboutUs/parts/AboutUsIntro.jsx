import React, { memo } from 'react';
import classes from '../style.module.scss';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';

import ship from '../../../assets/img/about_us/ship.png';

const AboutUsIntro = () => {
	return (
		<div>
			<section className={classes.about__us}>
				<Container className={classes.container}>
					<div className={classes.left}>
						<div className={classes.title__wrapper}>
							<HeadingOne
								color={{ color: '#1B4573' }}
								childrenOne="ABOUT US"
								className={classes.title}
							/>
						</div>
						<p className={classes.subtitle}>
							<span>
								Silkway Petrol was founded in Turkey to capture its position as a bridge between Asia and Europe and streamflow best commodities from East to West, bringing Silkway concept ahead.
							</span>
							<span>
								The company’s structure allows it to utilize its resources to be stable and efficient, to develop actively, to be in touch with the world’s markets, and to adapt to their rapid changes.
							</span>
						</p>
					</div>
					<div className={classes.right}>
						<figure>
							<img src={ship} alt="ship" />
						</figure>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default memo(AboutUsIntro);
