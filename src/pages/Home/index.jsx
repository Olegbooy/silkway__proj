import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import Intro from './parts/Intro';
import Services from './parts/Services';
import Team from './parts/Team';
import OurCommitments from './parts/OurCommitments';

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Silkway Home</title>
			</Helmet>
			<Intro />
			<Services />
			<Team />
			<OurCommitments />
		</>
	);
};

export default memo(Home);
