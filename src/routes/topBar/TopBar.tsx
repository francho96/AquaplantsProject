import styles from './TopBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import OpacityIcon from '@mui/icons-material/Opacity';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
	const [transition, setTransition] = useState(false);
	const [enterAnimation, setEnterAnimation] = useState(true);
	const [active, setActive] = useState(0);
	const navigate = useNavigate();
	const toggleAnimation = () => {
		setTransition(true);
		setTimeout(() => {
			setTransition(false);
		}, 1000);
	}
	useEffect(() => {
		setTimeout(() => {
			setEnterAnimation(false);
		}, 1000);
	}, [])
	const redirect = (path: string, active: number) => {
		if (transition) return "";
		toggleAnimation();
		setActive(active)
		setTimeout(() => {
			navigate(path);
		}, 500);
	}
	return (
		<>
		{transition && (
          <div className={styles.transitionScreen}></div>
        )}
		{enterAnimation && (
			<div className={styles.enterAnimation}></div>
		)}
			<div className={styles.fondo}>
				<div className={styles.subButton}></div>
				<div className={styles.container}>
					<a className={styles.button} onClick={() => redirect("/in", 0)}>
						<HomeIcon fontSize={active === 0 ? "large" : "medium"} style={{transition: "0.5s"}}/>
					</a>
					<a className={styles.button} onClick={() => redirect("/in/shopping", 1)}>
						<ShoppingCartIcon fontSize={active === 1 ? "large" : "medium"} style={{transition: "0.5s"}}/>
					</a>
					<a className={styles.button} onClick={() => redirect("/in/refill", 2)}>
						<OpacityIcon fontSize={active === 2 ? "large" : "medium"} style={{transition: "0.5s"}}/>
					</a>
					<a className={styles.button} onClick={() => redirect("/in/mail", 3)}>
						<MailIcon fontSize={active === 3 ? "large" : "medium"} style={{transition: "0.5s"}}/>
					</a>
					<a className={styles.button} onClick={() => redirect("/in/user", 4)}>
						<AccountCircleIcon fontSize={active === 4 ? "large" : "medium"} style={{transition: "0.5s"}}/>
					</a>
				</div>
			</div>
		</>
	);
};

export default TopBar;
