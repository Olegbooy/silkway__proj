import React, { memo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsData } from '../newsData/NewsData';

import classes from '../style.module.scss';
import Container from '../../../Components/Container';

const ArticlePage = () => {
	const { id } = useParams();
	const [post, setPost] = useState(newsData);
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	useEffect(() => {
		const currentPost = post.filter((item) => id === item.name);
		setPost(currentPost);
	}, [id]);


	return (
		<div>
			{
				post.map((item) => (
					 <section key={item.name} className={classes.article__hero}>
						 <div className={classes.article__wrapper}>
							 <div className={classes.bg__image}>
								 <img src={item.pictureBackground} alt={item.picture} />
							 </div>
							 <h2 className={classes.title}>{item.description}</h2>
						 </div>
						 <div className={classes.article__text}>
							 <Container className={classes.container}>
								 <p className={classes.date}>
									 { item.date }
								 </p>
								 <div className={classes.text__block}>
									 <p>
										 { item.article }
									 </p>
								 </div>
								 <img className={classes.article__image} src={item.pictureBackground} alt={item.name} />
								 <div className={classes.text__block}>
									 <p>
										 { item.afterPictureArticle }
									 </p>
								 </div>
								 <button className={classes.go__back} type="button" onClick={() => goBack()}>
									 <span>ALL NEWS</span>
								 </button>
							 </Container>
						 </div>
					 </section>
				))
			}
		</div>
	);
};

export default memo(ArticlePage);
