import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import Container from "../../Components/Container";
import classes from './style.module.scss';
import HeadingOne from "../../Components/HeadingOne/HeadingOne";

import picture1 from '../../assets/img/safety/article_1.png';
import picture2 from '../../assets/img/safety/article_2.png';
import LoadModal from "../../Components/LoadModal/LoadModal";

import ilustration from '../../assets/img/svg/OurCommitmets/safety.svg';

// donwload file
import file from '../../assets/img/news/article_2.png';

const Safety = () => {
	return (
		<>
			<Helmet>
				<title>Silkway Safety</title>
			</Helmet>
			<section className={classes.safety__intro}>
				<Container className={classes.container}>
					<div className={classes.left}>
						<HeadingOne
							childrenOne="SAFETY"
							className={classes.title}
						/>
						<div className={classes.block__text}>
							<p>
								Safe operations are our number one priority.
							</p>
							<p>
								Our goal is that all employees, contractors and visitors to our terminal return home safe and healthy to their families each night.
							</p>
						</div>
					</div>
					<div className={classes.right}>
						<figure>
							<img src={picture1} alt="picture1" />
						</figure>
					</div>
				</Container>
			</section>
			<section className={classes.safety__leadership}>
				<Container className={classes.container}>
					<HeadingOne
						childrenOne="SAFETY LEADERSHIP"
						className={classes.title}
					/>
					<div className={classes.leaderhip__inner}>
						<div className={classes.left}>
							<p>
								Silkway Petroleum strives to be a safety leader. We are committed to establishing and maintaining a safe and healthy workplace and an environment in which people demonstrate a strong commitment to the safety, health and well-being of themselves and those around them.
							</p>
							<p>
								To achieve this, we work in close partnership with our workforce to enhance the culture of safety in our workplace, and with our peers in the waterfront sector to share best practices and continuously improve our safety standards. A Joint Occupational Health and Safety Committee, made up of ILWU employees and Silkway Petroleum management, meets regularly to review safety matters and make recommendations for continuously improving our safety management systems.
							</p>
						</div>
						<div className={classes.right}>
							<figure>
								<img src={picture2} alt="picture2" />
							</figure>
						</div>
					</div>
				</Container>
			</section>
			<Container>
				<LoadModal
					icon={ilustration}
					title="Safety policy"
					subtitle="The foundation of our community support is outlined in our community partner strategy. Our partnerships vary but typically include a range of donations, volunteerism and in-kind contributions such as our tent loaner program."
					file={file}
				/>
			</Container>
		</>
	);
};

export default memo(Safety);
