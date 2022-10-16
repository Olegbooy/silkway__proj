import React, { memo } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import classes from '../style.module.scss';
import Container from '../../../Components/Container';
import HeadingOne from '../../../Components/HeadingOne/HeadingOne';
import "swiper/css";
import "swiper/css/pagination";
import Film from "./Film";


const Intro = () => {
	return (
		<section className={classes.intro}>
			<Swiper
				slidesPerView={1}
				modules={[Pagination]}
				pagination={{ clickable: true }}
				allowTouchMove={true}
				slideToClickedSlide={true}
				centeredSlidesBounds={true}
				centeredSlides={true}
				className={classes.intro__swiper}
			>
				<SwiperSlide>
					<div className={classes.first_slide}>
						<Container className={classes.container}>
							<HeadingOne
								color={{ color: '#fff' }}
								childrenOne="SILKWAY"
								childrenTwo="PETROL"
								className={classes.hero__title}
							/>
							<p data-aos="fade-up" className={classes.title}>
								Proudly South Shore
							</p>
							<p data-aos="fade-up" data-aos-delay="300" className={classes.subtitle}>
								Connecting Asian commodities to world markets from the South Shore for more than 30 years.
							</p>
						</Container>
					</div>
				</SwiperSlide>

				<SwiperSlide className={classes.second__slide}>
					<Film />
				</SwiperSlide>
			</Swiper>

		</section>
	);
};

export default memo(Intro);
