import React, { memo } from 'react';
import { Helmet } from "react-helmet";
import Intro from "./parts/Intro";
import Stewardship from "./parts/Stewardship";
import LoadModal from "../../Components/LoadModal/LoadModal";

import ilustration from '../../assets/img/svg/OurCommitmets/environment.svg';
// download
import file from '../../assets/img/news/article_1.png';

const Environment = () => {
	return (
		<>
			<Helmet>
				<title>Silkway Environment</title>
			</Helmet>
			<Intro />
			<Stewardship />
			<LoadModal
				icon={ilustration}
				title="Ecological policy"
				subtitle="The foundation of our community support is outlined in our community partner strategy. Our partnerships vary but typically include a range of donations, volunteerism and in-kind contributions such as our tent loaner program."
				file={file}
			/>
		</>
	);
};

export default memo(Environment);
