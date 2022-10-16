import React, { memo } from 'react';
import classes from "../style.module.scss";
import Container from "../../../Components/Container";
import HeadingOne from "../../../Components/HeadingOne/HeadingOne";
import Articles from "./Articles";

const Intro = () => {
	return (
		<section className={classes.community__intro}>
			<Container className={classes.container}>
				<HeadingOne
					childrenOne="COMMUNITY"
					className={classes.title}
					color={{ color: "#1B4573" }}
				/>
				<div className={classes.text__wrapper}>
					<p>
						Silkway Petroleum has a longstanding commitment to supporting organizations that contribute to a strong and healthy North Shore community and the well-being of everyone who lives and works here.
					</p>
					<p>
						The foundation of our community support is outlined in our community partner strategy. Our partnerships vary but typically include a range of donations, volunteerism and in-kind contributions such as our tent loaner program.
					</p>
				</div>
				<Articles />
			</Container>
		</section>
	);
};

export default memo(Intro);
