import { Outlet } from 'react-router-dom';
import styles from './root.module.css';
import TopBar from './topBar/TopBar';
//import React from 'react';

const Root = () => {
	return (
		<>
			<div className="">
				<div className={styles.view} id="detail">
					<Outlet />
				</div>

				<div className={styles.top}>
					<TopBar />
				</div>		
			</div>
		</>
	);
};

export default Root;
