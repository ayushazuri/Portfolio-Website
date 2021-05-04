//Home Page
const greeting = {
	title: "Ayush Singh",
	logo_name: "AshutoshHathidara",
	subTitle:
		"A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/file/d/1XjFLW-pYzVrkwhvsoELtodBwQuG4bAkc/view?usp=sharing",
	portfolio_repository: "https://github.com/ayushazuri/portfolio-webiste",
};

const socialMediaLinks = [
	{
		name: "Github",
		link: "https://github.com/ayushazuri",
		backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/ayush-singh1998/",
		backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
	},
	{
		name: "Gmail",
		link: "mailto:ayushazuri@gmail.com",
		backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
	},
	{
		name: "Twitter",
		link: "https://twitter.com/ayushazuri",
		backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/ayushazuri/",
		backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/chandler__uchiha/",
		backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
	},
];

const competitiveLinks = [
	{
		name: "HackerRank",
		link: "https://www.hackerrank.com/ayushazuri",
		backgroundColor: "#2bbf5f",
	},
	{
		name: "GeeksForGeeks",
		link: "https://auth.geeksforgeeks.org/user/ayushazuri/profile",
		backgroundColor: "black",
	},
	{
		name: "Leetcode",
		link: "https://leetcode.com/ayushazuri/",
		backgroundColor: "#008001",
	},
];

const skills = {
	descriptions: [
		"Web developer who loves to explore and try different tech stacks and use them to make highly interactive and responsive Front-end / User interface for every web application",
		"Loves coding and programming and using my knowledge of Data Structures and Algorithms to solve different problems.",
	],
	skills: [
		{
			name: "ReactJs",
			style: {
				color: "#61DAFB",
			},
		},
		{
			name: "Javascript",
			style: {
				backgroundColor: "#000000",
				color: "#F7DF1E",
			},
		},
		{
			name: "Java",
			style: {
				color: "#5382A1",
			},
		},
		{
			name: "CSS",
			style: {
				color: "#1572B6",
			},
		},
		{
			name: "SASS",
			style: {
				color: "#CC6699",
			},
		},
		{
			name: "Bootstrap",
			style: {
				color: "#563d7c",
			},
		},
		{
			name: "Material UI",
			style: {
				color: "#2596be",
			},
		},
		{
			name: "HTML",
			style: {
				color: "#E34F26",
			},
		},
		{
			name: "GatsbyJS",
			style: {
				color: "#663399",
			},
		},
		{
			name: "NodeJs",
			style: {
				color: "#339933",
			},
		},
		{
			name: "express.js",
		},
		{
			name: "npm",
			style: {
				color: "#CB3837",
			},
		},
		{
			name: "Git",
			style: {
				color: "#F1502F",
			},
		},
		{
			name: "Firebase",
			style: {
				color: "#F6820D",
			},
		},
		{
			name: "Adobe Xd",
			style: {
				color: "#FF2BC2",
			},
		},
		{
			name: "Python",
			style: {
				backgroundColor: "transparent",
				color: "#3776AB",
			},
		},
		{
			name: "MySQL",
			style: {
				color: "#00758F",
			},
		},
	],
	proficiency: [
		{
			skills: "ReactJS | GatsbyJS",
			proficiency: "75%",
		},
		{
			skills: "Javascript",
			proficiency: "70%",
		},
		{
			skills: "Java",
			proficiency: "75%",
		},
		{
			skills: "CSS | SASS | Bootstrap | HTML",
			proficiency: "75%",
		},
		{
			skills: "NPM | Git | Github",
			proficiency: "60%",
		},
		{
			skills: "NodeJS | ExpressJS",
			proficiency: "50%",
		},
		{
			skills: "Python | Firebase",
			proficiency: "50%",
		},
		{
			skills: "SQL | MySQL",
			proficiency: "60%",
		},
	],
};

const rewfaLogo = require("./assets/Images/rewfa_logo.svg");
const orcipLogo = require("./assets/Images/orcip_logo.png");
const experience = {
	descriptions: [
		"I have worked for various startups as a Web Developer to use my skills for the company's growth and development. Because of this I have learnt alot as well and increased my knowledge and improved my skills ",
	],
	works: [{}],
	internships: [
		{
			name: "REWFA Ecommerce Pvt. Ltd.",
			role: "SDE Intern",
			image: rewfaLogo,
			tasks: [
				"Built a fully responsive website of the E-Commerce Startup catering to various business needs from scratch using ReactJS.",
				"Designed the UI/UX of the website using Adobe Xd.",
			],
			link: "https://rewfa.com/",
			timeline: "12/2020 - Present",
			location: "Mumbai",
			technologies: [
				"ReactJS",
				"Javascript",
				"CSS",
				"Bootstrap",
				"HTML",
				"Adobe Xd",
			],
		},
		{
			name: "Orcip Systems Pvt. Ltd.",
			role: "Web Developer Intern",
			image: orcipLogo,
			tasks: [
				"Worked on companies website",
				"Worked on some open source projects like custom-react-select",
			],
			link: "https://orcip.com/",
			timeline: "03/2020 - 04/2020",
			location: "Mumbai",
			technologies: [
				"ReactJS",
				"GatsbyJS",
				"Javascript",
				"SASS",
				"GraphQl",
				"CSS",
			],
		},
	],
};

const education = [
	{
		name: "Sardar Patel Institute of Technology",
		timeline: "08/2017 - 06/2021",
		pointer: "8.36",
		branch: "Electronics and Telecommunication Engineering - B.Tech",
		location: "Mumbai",
	},
	{
		name: "Chandrabhan Sharma College",
		timeline: "2014 - 2016",
		pointer: "85.38%",
		branch: "Higher Secondary Degree",
		location: "Mumbai",
	},
	{
		name: "St. Joseph's School",
		timeline: "2002 - 2014",
		pointer: "91.16%",
		branch: "ICSE",
		location: "Gorakhpur",
	},
];
export {
	greeting,
	socialMediaLinks,
	skills,
	experience,
	competitiveLinks,
	education,
};
