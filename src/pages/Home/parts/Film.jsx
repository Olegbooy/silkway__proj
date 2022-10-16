import React, { memo } from 'react';
import film from "../../../assets/media/silkway1var.mp4";
import classes from '../style.module.scss';
import VideoJs from "./VideoJS";

import posterImg from '../../../assets/img/bg__intro.png';

const Film = () => {
	const videoJsOptions = {
		autoplay: false,
		controls: true,
		poster: posterImg,
		sources: [{
			src: film,
			type: 'video/mp4',
		}]
	};
	return (
		<section className={classes.film}>
			<VideoJs options={videoJsOptions} />
		</section>
	);
};

export default memo(Film);
