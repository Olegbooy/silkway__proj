import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../style.module.scss';
import { newsData } from '../newsData/NewsData';


const NewsSlots = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const data = newsData;
		setPosts(data);
	}, []);

	return (
		<div className={classes.news__slots}>
			{
				posts.map((post) => (
					<Link key={post.name} className={classes.news__btn} to={`/news/${post.name}`}>
						<figure>
							<img src={post.picture} alt={post.name} />
						</figure>
						<div className={classes.info}>
							<p className={classes.description}>
								{post.description}
							</p>
							<p className={classes.date}>
								{post.date}
							</p>
						</div>
					</Link>
				))
			}
		</div>
	);
};

export default memo(NewsSlots);
