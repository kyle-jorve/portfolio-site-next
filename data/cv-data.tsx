import { Fragment } from "react";
import * as cvTypes from "../types/cv-types";

export const bio: cvTypes.BioType = {
	title: "About the Artist",
	content: (
		<Fragment>
			<p className="large-text">
				Illustrator and designer Kyle Jorve has always been drawn to
				stories of fantasy and science fiction.
			</p>
			<p>
				Today, he expresses his love for these genres by dreaming up new
				worlds and characters and illustrating them into life.
			</p>
			<p>
				As a teenager, Jorve discovered the medium of digital art online
				and quickly fell in love. He taught himself to draw and paint
				digitally, and used these skills to create original stories and
				characters.
			</p>
			<p>
				Currently, Jorve works as a front end developer for a
				destination marketing company. In his free time he writes and
				illustrates his fictional worlds into life.
			</p>
		</Fragment>
	),
	img: {
		sources: [
			{
				url: "/images/portrait/portrait-1920.jpg",
				minScreenWidth: 1440,
			},
			{
				url: "/images/portrait/portrait-1440.jpg",
				minScreenWidth: 1024,
			},
			{
				url: "/images/portrait/portrait-1024.jpg",
				minScreenWidth: 640,
			},
		],
		mobileSource: "/images/portrait/portrait-square.jpg",
		alt: "A photograph of Kyle Jorve smiling at the camera, a blurred scene of lush plant life behind him",
		width: 640,
		height: 640,
	},
};

export const resume: cvTypes.ResumeType = {
	docUrl: "/documents/resume_kyle-jorve.pdf",
	items: [
		{
			name: "experience",
			heading: "Experience",
			subItems: [
				{
					period: "2021-Present",
					position: "Front End Developer",
					company: "Simpleview",
					content: (
						<Fragment>
							<p>
								Build front end components for a myriad of
								destination websites. Write performant,
								sustainable code and undergo regular peer
								review.
							</p>
						</Fragment>
					),
				},
				{
					period: "2015-2021",
					position: "Graphic and Web Designer, Front End Developer",
					company: "Simply Bits / Desert Lab Studio",
					content: (
						<Fragment>
							<p>
								Created print, web, and electronic marketing
								materials for Simply Bits/Desert Lab Studio, its
								clients, and its various software products.
							</p>
							<p>
								Did front end development and implementation of
								web designs in a variety of code languages,
								including JavaScript, CSS, SCSS, HTML, CSHTML,
								and more.
							</p>
							<p>
								Created custom graphic and illustration work for
								a large variety of purposes including, but not
								limited to, marketing, web design, advertising,
								and product development.
							</p>
							<p>
								Worked for many clients of differing types, such
								as charity organizations, family-owned and small
								businesses, ecommerce businesses, and software
								companies, to meet a variety of design needs and
								challenges, including web design, graphic
								design, packaging design, and illustration.
							</p>
							<p>
								Attended trade shows to promote and sell Simply
								Bits&apos;/Desert Lab Studio&apos;s software
								products.
							</p>
						</Fragment>
					),
				},
				{
					period: "2015",
					position: "Writer, Illustrator",
					company: "New Nebula Comic Anthology",
					content: (
						<p>
							Wrote and illustrated an original story titled
							&quot;Ivory and Sinew&quot; for the comic book
							anthology New Nebula Volume 1.
						</p>
					),
				},
				{
					period: "2013-2015",
					position: "Designer",
					company: "Zarpara Vineyard",
					content: (
						<p>
							Created print marketing materials for Zarpara
							Vineyard. Did custom illustration work and graphic
							design.
						</p>
					),
				},
				{
					period: "2013",
					position: "Intern",
					company: "University of Arizona Digital Print Studio",
					content: (
						<p>
							Was responsible for printing in multiple formats and
							assisting customers in the digital print studio.
							Worked with a team to manage a steady flow of
							customers. Edited files to ensure optimum print
							quality. Helped maintain the functionality of large
							format printers.
						</p>
					),
				},
			],
		},
		{
			name: "exhibitions",
			heading: "Group and Juried Exhibitions",
			subItems: [
				{
					period: "2016",
					title: "Mesa Community College Alumni Exhibition",
					content: <p>Exhibited three works of digital painting.</p>,
				},
				{
					period: "2013",
					title: "University of Arizona Annual VisCom Show",
					content: (
						<p>
							Exhibited in the Lionel Rombach Gallery in Tucson,
							Arizona.
						</p>
					),
				},
				{
					period: "2012",
					title: "University of Arizona Annual VisCom Show",
					content: (
						<p>
							Exhibited in the Lionel Rombach Gallery in Tucson,
							Arizona.
						</p>
					),
				},
				{
					period: "2012",
					title: "Student Art Exhibition in Orvieto, Italy",
					content: (
						<p>
							Exhibited book and sequential art in the Fondazione
							Centro Studi in Orvieto, Italy.
						</p>
					),
				},
				{
					period: "2011",
					title: "Figure Illustration Exhibition",
					content: (
						<p>
							Exhibited in the 5th on 6th Gallery in Tucson,
							Arizona.
						</p>
					),
				},
				{
					period: "2009",
					title: "Mesa Community College Student Art Show",
				},
				{
					period: "2008",
					title: "Mesa Community College Student Art Show",
				},
				{
					period: "2008",
					title: `"Go Figure" Juried Exhibition`,
					content: (
						<p>
							Exhibited in the Brio Fine Arts Center in
							Scottsdale, Arizona.
						</p>
					),
				},
			],
		},
		{
			name: "awards",
			heading: "Awards",
			subItems: [
				{
					period: "2013",
					title: "Silver for Color Illustration",
					content: <p>University of Arizona Student VisCom show.</p>,
				},
				{
					period: "2012",
					title: "Bronze for Character Design",
					content: <p>University of Arizona Student VisCom show.</p>,
				},
				{
					period: "2012",
					title: "Gold for Black and White Illustration",
					content: <p>University of Arizona Student VisCom show.</p>,
				},
				{
					period: "2010",
					title: "Best of Mesa Arts and Cultural Festival",
				},
				{
					period: "2009",
					title: "Wacom Award for Digital Art",
					content: <p>Mesa Community College Student Art Show</p>,
				},
			],
		},
		{
			name: "skills",
			heading: "Special Skills",
			subItems: [
				{
					title: "Illustration, Design, Front End Development",
					content: (
						<ul>
							<li>
								<strong>Languages and Frameworks:</strong>{" "}
								React, NextJS, HTML, CSS, SCSS, JavaScript
							</li>
							<li>
								<strong>Software:</strong> Adobe CC, ProCreate
							</li>
						</ul>
					),
				},
			],
		},
		{
			name: "education",
			heading: "Education",
			subItems: [
				{
					period: "2013",
					title: `Bachelors of Fine Arts, Emphasis in Visual Communication`,
					content: (
						<p>
							University of Arizona&mdash;graduated Summa Cum
							Laude.
						</p>
					),
				},
				{
					period: "2012",
					title: "Studied Abroad in Orvieto, Italy",
				},
				{
					period: "2009",
					title: "Associates of Fine Art",
					content: <p>Mesa Community College</p>,
				},
			],
		},
		{
			name: "collections",
			heading: "Public Collections",
			subItems: [
				{
					title: "Mesa Community College Life Sciences Building",
					content: <p>Anatomy drawing on permanent display.</p>,
				},
			],
		},
	],
};
