import React, { memo, useState } from 'react';
import clsx from "clsx";
import gif from '../assets/media/silkway.gif';
import classes from './style.module.scss';

const LoadingGif = () => {
	const [loading, setLoading] = useState(false);
	const [closeModal, setCloseModal] = useState(false);

	function gifLife() {
		setTimeout(() => {
			setLoading(true);
		}, 4000);
	}

	if (loading) {
		setTimeout(() => {
			setCloseModal(true);
		}, 1000);
	}
	gifLife();


	return (
		<div
			style={closeModal ? { display: 'none' } : { display: "flex" }}
			className={clsx(classes.gif__block, {
				[classes.gif__block__close]: loading
			})}
		>
			<img src={gif} alt="gif silkway" />
		</div>
	);
};

export default memo(LoadingGif);
