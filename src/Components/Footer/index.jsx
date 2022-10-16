import React, { memo } from 'react';
import classes from './style.module.scss';
import Container from '../Container';
import Form from "../Form/Form";

const Index = () => {
	return (
		<footer className={classes.footer}>
			<Container className={classes.container}>
				<div className={classes.left}>
					<h2>
						Contact
					</h2>
					<div className={classes.addresses}>
						<div className={classes.post}>
							<p>info@silkwaypetroleum.com</p>
							<p>TRADE@SILKWAYPETROLEUM.COM</p>
							<p>SHIPPING@SILKWAYPETROLEUM.COM</p>
						</div>
						<div className={classes.post}>
							<p>ATAKENT MAHALLESI, 243 SOKAK NO:6, TEMA ISTANBUL, 2A 171 / KUCUKCEKMECE / ISTANBUL / TURKEY</p>
						</div>
					</div>
				</div>
				<Form />
			</Container>
			<p className={classes.end__text}>SILKWAY PETROL KIMYA URUNLERI LOJISTIK GIDA SANAYI VE TICARET LIMITED SIRKETI</p>
		</footer>
	);
};

export default memo(Index);
