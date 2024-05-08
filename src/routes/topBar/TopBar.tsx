import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.css';

const TopBar = () => {

	return (
		<>
			<div className={styles.fondo}>
				<div className={styles.container}>
					<Link to="/" className={styles.button}>
						<div className={styles.logoText}>
							1
						</div>
					</Link>
					<Link to="/" className={styles.button}>
						<div className={styles.logoText}>
							2
						</div>
					</Link>
					<Link to="/" className={styles.button}>
						<div className={styles.logoText}>
							3
						</div>
					</Link>
					<Link to="/" className={styles.button}>
						<div className={styles.logoText}>
							4
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default TopBar;
