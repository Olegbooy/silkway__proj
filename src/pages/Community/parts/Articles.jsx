import React, { memo } from 'react';
import classes from "../style.module.scss";

import article1 from '../../../assets/img/community/article_1.png';
import article2 from '../../../assets/img/community/article_2.png';
import article3 from '../../../assets/img/community/article_3.png';

const articleData = [
	{
		image: article1,
		key: 'article1',
		title: 'Health & Safety',
		subtitle: 'Programs and services that enhancesafety, physical and mental health',
		route: 'safety'
	},
	{
		image: article2,
		key: 'article2',
		title: 'Environment',
		subtitle: 'Initiatives that protect or enhance local species and envonments, reduce pollution or encourage recycling.',
		route: 'environment'
	},
	{
		image: article3,
		key: 'article3',
		title: 'Community',
		subtitle: 'Events and volunteer-driven organizations that unite our community: procurement from local businesses; engagement with our neighbours',
		route: 'community'
	}
];

const Articles = () => {
	return (
		<div className={classes.cards__inner}>
			{
				articleData.map(({ image, key, title, subtitle, route }) => (
					<article key={key} className={classes.community__article} to={route}>
						<figure className={classes.card__figure}>
							<img src={image} alt={key} />
						</figure>
						<div className={classes.block__body}>
							<h3>{title}</h3>
							<p>{subtitle}</p>
						</div>
					</article>
				))
			}
		</div>
	);
};

export default memo(Articles);
