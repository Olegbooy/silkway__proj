import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HandySvg } from 'handy-svg';
import classes from '../style.module.scss';
import { books } from '../../../Constans/books';

import environmentSvg from '../../../assets/img/svg/OurCommitmets/environment.svg';
import communitySvg from '../../../assets/img/svg/OurCommitmets/community.svg';
import safetySvg from '../../../assets/img/svg/OurCommitmets/safety.svg';

import arrowBtn from '../../../assets/img/svg/arrow_btn.svg';

const articles = [
	{
		image: <HandySvg src={communitySvg} />,
		title: 'Community',
		subtitle: 'Silkway petroleum has a longstanding commitment to supporting organizations that contribute to a strong and healthy South Shore community.',
		route: books.community
	},
	{
		image: <HandySvg src={environmentSvg} />,
		title: 'Environment',
		subtitle: 'Silkway petroleum is committed to protecting the environment and minimizing the impact of our operations',
		route: books.environment
	},
	{
		image: <HandySvg src={safetySvg} />,
		title: 'Safety',
		subtitle: 'Safe operations are our number one priority. Our goal is that all employees, contractors and visitors to our terminal return home safe and healthy to their families each night.',
		route: books.safety
	}
];

const OurComminmentsArticles = () => {
	return (
		<div className={classes.advantages__inner}>
			{
				articles.map(({ image, title, subtitle, route }) => (
					<article className={classes.article} key={title}>
						<div>
							{ image }
							<h3>
								{ title }
							</h3>
							<p>
								{ subtitle }
							</p>
						</div>
						<div>
							<Link to={route} className={classes.link__arrow}>
								<HandySvg
									src={arrowBtn}
									width="14"
									height="21"
								/>
							</Link>
						</div>
					</article>
				))
			}
		</div>
	);
};

export default memo(OurComminmentsArticles);
