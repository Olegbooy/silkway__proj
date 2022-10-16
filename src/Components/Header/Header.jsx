import React, { memo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../Container';
import classes from './styles.module.scss';
import Logo from '../../assets/img/svg/Logo';
import { books } from '../../Constans/books';
import MenuList from './MenuList';

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeLink, setActiveLink] = useState(true);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== books.home) {
			setActiveLink(false);
		}
	}, [location.pathname]);

	const handleClickLogo = () => {
		setActiveMenu(false);
		setActiveLink(true);
	};

	return (
		<header className={classes.header}>
			<Container className={classes.container}>
				  <Link to={books.home} className={classes.nav__logo} onClick={() => handleClickLogo()}>
					<Logo />
				  </Link>
				<MenuList
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
					activeLink={activeLink}
					setActiveLink={setActiveLink}
				/>
				<div
					className={clsx(classes.mobile__menu, {
						[classes.active]: activeMenu
					})}
					onClick={() => setActiveMenu(!activeMenu)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</Container>
		</header>
	);
};

export default memo(Header);
