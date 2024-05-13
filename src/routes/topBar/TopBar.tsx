import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import OpacityIcon from '@mui/icons-material/Opacity';

const TopBar = () => {

	return (
		<>
			<div className={styles.fondo}>
				<div className={styles.container}>
					<Link to="/in" className={styles.button}>
						<HomeIcon />
					</Link>
					<Link to="/in/shopping" className={styles.button}>
						<ShoppingCartIcon />
					</Link>
					<Link to="/in/refill" className={styles.button}>
						<OpacityIcon fontSize="large"/>
					</Link>
					<Link to="/in/mail" className={styles.button}>
						<MailIcon />
					</Link>
					<Link to="/in/user" className={styles.button}>
						<AccountCircleIcon/>
					</Link>
				</div>
			</div>
		</>
	);
};

export default TopBar;
