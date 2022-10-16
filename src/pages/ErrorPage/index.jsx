import React, { memo } from 'react';
import { HandySvg } from "handy-svg";
import { Helmet } from "react-helmet";
import sphere from '../../assets/img/svg/sphere.svg';

import classes from './style.module.scss';

const Index = () => {
	return (
		<>
			<Helmet>
				<title>Error 404</title>
			</Helmet>
			<div className={classes.error}>
				<div>
					<p>4</p>
					<HandySvg
						src={sphere}
						width="116"
						height="116"
					/>
					<p>4</p>
				</div>
				<h2>Page not found</h2>
			</div>
		</>
	);
};

export default memo(Index);
