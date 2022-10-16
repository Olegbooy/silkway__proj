import React, { memo } from 'react';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';

import classes from '../style.module.scss';
import OurComminmentsArticles from './OurComminmentsArticles';

const OurCommitments = () => {
	return (
		<section className={classes.our__commitments}>
			<Container className={classes.container}>
				<HeadingOne
					color={{ color: '#1B4573' }}
					childrenOne="OUR"
					childrenTwo="COMMITMENTS"
					className={classes.title}
				/>
				<p className={classes.comments}>
					It is our priority to ensure operations follow rigorous standards of safety for our employees, minimize impact on the environment, and demonstrate care for our neighbours and the community in which we operate.
				</p>
				<OurComminmentsArticles />
			</Container>
		</section>
	);
};

export default memo(OurCommitments);
