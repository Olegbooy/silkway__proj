import React, { memo, useEffect } from 'react';
import clsx from 'clsx';
import AOS from "aos";
import classes from './style.module.scss';

const HeadingOne = ({ color, className, childrenOne, childrenTwo }) => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			startEvent: 'DOMContentLoaded',
			delay: 500,
			once: true,
			throttleDelay: 10,
			delayTime: 10
		}, []);
	});
	return (
		<h1 className={clsx(classes.root, className)}>
			<span data-aos="zoom-out-right" data-aos-delay="200" style={color}>
				{childrenOne}
			</span>
			<span data-aos="zoom-out-right"style={color}>
				{childrenTwo}
			</span>
		</h1>
	);
};

export default memo(HeadingOne);
