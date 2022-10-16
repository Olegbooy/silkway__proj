import React, { memo } from 'react';
import clsx from 'clsx';
import classes from '../style.module.scss';

const ServiceArticle = ({ picture, name, title, subtitle, aosName }) => {
	return (
		<article
			key={name}
			className={clsx(classes.article)}
			data-aos={aosName}
		>
			<figure className={classes.card__figure}>
				<img src={picture} alt={name} />
			</figure>
			<p className={classes.title}>
				{title}
			</p>
			<div className={classes.reverse__side}>
				<p className={classes.title}>
					{title}
				</p>
				<p className={classes.subtitle}>
					{subtitle}
				</p>
			</div>
		</article>
	);
};

export default memo(ServiceArticle);
