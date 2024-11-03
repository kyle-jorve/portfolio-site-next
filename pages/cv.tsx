import { Fragment } from "react";
import Head from "next/head";
import Bio from "../components/cv/Bio";
import Resume from "../components/cv/Resume";
import bioStyles from "../styles/components/Bio.module.css";

export default function CV() {
	return (
		<>
			<Head>
				<title key="title">
					Curriculum Vitae | Kyle Jorve | Illustration and Design
				</title>
			</Head>

			<Bio
				className={bioStyles["bio--hero"]}
				useH1={true}
				showButton={false}
			/>

			<Resume />
		</>
	);
}
