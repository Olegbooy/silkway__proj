import React, { memo } from 'react';
import Container from "../../../Components/Container";
import HeadingOne from "../../../Components/HeadingOne/HeadingOne";
import classes from '../style.module.scss';

import picture2 from '../../../assets/img/environment/picture_2.png';
import picture3 from '../../../assets/img/environment/picture_3.png';

const Stewardship = () => {
	return (
		<section className={classes.stewardship}>
			<Container className={classes.container}>
				<HeadingOne
					childrenOne="ENVIRONMENTAL"
					childrenTwo="STEWARDSHIP"
					className={classes.title}
				/>

				<div className={classes.stewardship__inner}>

					<div className={classes.col}>
						<div className={classes.left}>
							<p>
								<span>
									Environmental stewardship is a core value of Silkway Petroleum and we recognize that environmental excellence is integral to our long-term business success. To support this Core Value, Silkway petroleum has adopted a philosophy of continuous improvement of environmental performance.
								</span>
								<span>
									All members of our senior management team are responsible for environmental management and sign our Environmental Policy.
								</span>
							</p>
						</div>
						<div className={classes.right}>
							<figure>
								<img src={picture2} alt="picture2" />
							</figure>
						</div>
					</div>

					<div className={classes.col}>
						<div className={classes.left}>
							<p>
								Reducing our impacts
							</p>
							<p>
								Silkway petroleum Terminals is committed to protecting the environment and minimizing the impact of our operations on the community. We employ the latest technology and best practices throughout our site to reduce emissions, minimize noise and light impacts on the community and balance water conservation with dust mitigation.
							</p>
						</div>
						<div className={classes.right}>
							<figure>
								<img src={picture3} alt="picture3" />
							</figure>
						</div>
					</div>

				</div>

			</Container>
		</section>
	);
};

export default memo(Stewardship);
