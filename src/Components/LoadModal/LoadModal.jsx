import React, { memo } from 'react';
import { HandySvg } from "handy-svg";
import classes from './style.module.scss';
import loadBtn from '../../assets/img/svg/download_btn.svg';
import Container from "../Container";

const LoadModal = ({ icon, title, subtitle, file }) => {
	return (
		<Container className={classes.container}>
			<div className={classes.module}>
				<div className={classes.ilust__wrapper}>
					<HandySvg
						width="90"
						height="100"
						src={icon}
					/>
				</div>
				<div className={classes.col}>
					<h3>{ title }</h3>
					<p>{ subtitle }</p>
				</div>
				<a href={file} download>
					<HandySvg
						src={loadBtn}
						width="20"
						height="20"
					/>
				</a>
			</div>
		</Container>
	);
};

export default memo(LoadModal);
