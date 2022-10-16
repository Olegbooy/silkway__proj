import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import Intro from "./parts/Intro";
import Partners from "./parts/Partners";

const Community = () => {
	return (
		<>
			<Helmet>
				<title>Silkway Community</title>
			</Helmet>
			<Intro />
			<Partners />
		</>
	);
};

export default memo(Community);
