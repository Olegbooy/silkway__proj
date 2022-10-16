import React, { memo } from 'react';
import parse from "html-react-parser";
import { Helmet } from "react-helmet";
import Container from '../../Components/Container';
import HeadingOne from '../../Components/HeadingOne/HeadingOne';

import classes from './style.module.scss';
import NewsSlots from './Parts/NewsSlots';



const News = () => {
	return (
		<>
			<Helmet>
				<title>Silkway News</title>
			</Helmet>
			<section className={classes.news}>
				<Container className={classes.container}>
					<HeadingOne
						color={{ color: '#1B4573' }}
						childrenOne={parse("NEWS <span data-aos=\"zoom-out-right\" data-aos-delay=\"150\">FROM</span>")}
						childrenTwo="US"
						className={classes.title}
						numberClass={classes.word}
					/>
					<NewsSlots />
				</Container>
			</section>
		</>
	);
};

export default memo(News);
