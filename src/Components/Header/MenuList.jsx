import React, { memo } from 'react';
import clsx from 'clsx';
import { Link, NavLink } from "react-router-dom";
import { books } from '../../Constans/books';
import classes from './styles.module.scss';


const MenuList = ({ activeMenu, setActiveMenu, activeLink, setActiveLink }) => {
	const links = [
		{ title: 'About us', link: books.aboutUs },
		{ title: 'News', link: books.news },
		{ title: 'Community', link: books.community },
		{ title: 'Environment', link: books.environment },
		{ title: 'Safety', link: books.safety },
		{ title: 'Careers', link: books.careers },
		{ title: 'Contact', link: books.contact }
	];
	const handleClickHome = () => {
		setActiveMenu(false);
		setActiveLink(true);
	};

	const handleClickItem = () => {
		setActiveMenu(false);
		setActiveLink(false);
	};
	return (
		<nav className={clsx(classes.menu__list, {
			[classes.active]: activeMenu
		})}
		>
			<ul>
				<li>
					<Link
						to={books.home}
						onClick={() => handleClickHome()}
						className={activeLink ? 'active' : ''}
					>
						Home
					</Link>
				</li>
				{links.map((item) => (
					<li
						key={item.title}
					>
						<NavLink
							to={item.link}
							onClick={() => handleClickItem()}
						>
							{item.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default memo(MenuList);
