import styles from '../../../styles/layout/Loader.module.css';

export type LoaderInnerProps = {
	lightColor?: boolean;
	alwaysShown?: boolean;
};

export default function LoaderInner(props: LoaderInnerProps) {
	const classes = [
		styles["loader__track"],
		props.lightColor && styles["loader__track--light"],
		props.alwaysShown && styles["loader__track--always-shown"],
	].filter(c => c);

	return (
		<span className={classes.join(' ')}>
			<span className={styles["loader__bar"]}></span>
		</span>
	);
}