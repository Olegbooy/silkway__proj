import React, { memo } from 'react';
import classes from '../style.module.scss';
import Container from "../../../Components/Container";
import HeadingOne from "../../../Components/HeadingOne/HeadingOne";

import parner1 from '../../../assets/img/community/partner_1.png';
import parner2 from '../../../assets/img/community/partner_2.png';

import picture1 from '../../../assets/img/community/partner_article_1.png';
import picture2 from '../../../assets/img/community/partner_article_2.png';

const Partners = () => {
	return (
		<section className={classes.partners}>
			<Container className={classes.container}>
				<HeadingOne
					childrenOne="PARTNERS"
					color={{ color: '#F2AB4C' }}
					className={classes.title}
				/>
				<div className={classes.partners__block}>
					<div className={classes.picture__wrapper}>
						<img src={parner1} alt="parner1" />
					</div>
					<div className={classes.picture__wrapper}>
						<img src={parner2} alt="parner2" />
					</div>
				</div>
				<div className={classes.partners__inner}>

					<article className={classes.partners__article}>
						<figure>
							<img src={picture1} alt="hands" />
							<figcaption>
								COMMUNITY
							</figcaption>
						</figure>
						<div className={classes.body__text}>
							<p>
								We are very proud of Silkway Petroleum and love the chance to host visitors including students, neighbours and industry groups for tours of our terminal.
							</p>
						</div>
					</article>

					<article className={classes.partners__article}>
						<figure>
							<img src={picture2} alt="city" />
							<figcaption>
								COMMUNITY PARTNERS
							</figcaption>
						</figure>
						<div className={classes.body__text}>
							<p>
								Silkway Petroleum has a longstanding commitment of supporting organizations that contribute to a strong and healthy Youth Shore community and the well-being of everyone who lives and works here.
							</p>
						</div>
					</article>

				</div>
			</Container>
		</section>
	);
};

export default memo(Partners);
