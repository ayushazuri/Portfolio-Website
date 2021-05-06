//Home Page

const aboutMe = {
	name: "Ayush Singh",
	email: "ayushazuri@gmail.com",
	phone: "+91 9892770647",
	address: "F-1722, Maple Leaf, Raheja Vihar, Powai, Mumbai, 400072.",
	resumeLink:
		"https://drive.google.com/file/d/1XjFLW-pYzVrkwhvsoELtodBwQuG4bAkc/view?usp=sharing",
	openForOpportunity: "Yes",
	message: "My inbox is open for all. Contact me any time.",
	portfolio_repository: "https://github.com/ayushazuri/portfolio-webiste",
};

const greeting = {
	title: "Ayush Singh",
	logo_name: "AshutoshHathidara",
	subTitle:
		"An Engineering graduate with a keen passion for Software Development to leverage my skills in Web Development, Java, Data Structures, Algorithms and SQL. Having good Programming and Problem-Solving Skills. Willing to learn new technologies with a receptive mind and diligence.",
	resumeLink:
		"https://drive.google.com/file/d/1XjFLW-pYzVrkwhvsoELtodBwQuG4bAkc/view?usp=sharing",
	portfolio_repository: `https://github.com/ayushazuri/Portfolio-Website`,
};

const socialMediaLinks = [
	{
		name: "Github",
		link: "https://github.com/ayushazuri",
		backgroundColor: "#181717",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/ayush-singh1998/",
		backgroundColor: "#0077B5",
	},
	{
		name: "Gmail",
		link: "mailto:ayushazuri@gmail.com",
		backgroundColor: "#D14836",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/ayushazuri",
		backgroundColor: "#1DA1F2",
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/ayushazuri/",
		backgroundColor: "#1877F2",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/chandler__uchiha/",
		backgroundColor: "#E4405F",
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

const certifications = [
	{
		name: "Data Structures & Algorithms!",
		author: "DS Guy",
		source: "Udemy",
		link: "https://www.udemy.com/home/my-courses/learning/",
	},
	{
		name: "SQL for Data Science",
		author: "University of California, Davis",
		source: "Coursera",
		link: "https://www.udemy.com/home/my-courses/learning/",
	},
	{
		name: "Data Structures & Algorithms!",
		author: "DS Guy",
		source: "Udemy",
		link: "https://www.udemy.com/home/my-courses/learning/",
	},
	{
		name: "Java (Basics)",
		author: "HackerRank",
		source: "HackerRank",
		link: "https://www.hackerrank.com/certificates/af3dc76908c1",
	},
	{
		name: "Problem Solving (Basics)",
		author: "HackerRank",
		source: "HackerRank",
		link: "https://www.hackerrank.com/certificates/f2840e54e4b0",
	},
];

const projects = {
	description:
		"My projects makes use of vast variety of latest technology tools. My best experience is to create Web Development projects using ReactJS or other Technologies",
	projects: [
		{
			name: "Portfolio Website",
			githubLink: "https://github.com/ayushazuri/Portfolio-Website",
			image: require("./assets/Images/portfolio.png"),
			technologies: ["ReactJS", "Javascript", "SASS"],
			websiteLink: "www.ayushazuri.com",
			description:
				"This is my portfolio website which you are looking at. I have made this website from scratch by using ReactJS.",
		},
		{
			name: "Amazon Clone",
			githubLink: "https://github.com/ayushazuri/Amazon-Clone",
			image: require("./assets/Images/Amazon.png"),
			technologies: [
				"ReactJS",
				"Javascript",
				"SASS",
				"Node.js",
				"Express.js",
				"Firebase",
			],
			websiteLink: "https://clone-d2903.web.app",
			description:
				"Amazon Website Cloned using ReactJS and Firebase. Authentication, Database, and Deployement has been done with the help of Firebase. Functionalities like, Logging in via your account, Adding you desired items to the cart and buying it, etc are added in this cloned version of Amazon.",
		},
		{
			name: "Netflix Clone",
			githubLink: "https://github.com/ayushazuri/Netflix-Clone",
			image: require("./assets/Images/Netflix.png"),
			technologies: [
				"ReactJS",
				"Javascript",
				"CSS",
				"Node.js",
				"Firebase",
				"TMDB-API",
			],
			websiteLink: "https://netflix-clone-25d79.web.app/",
			description:
				"Cloned Netflix Website using ReactJS and CSS, and used TMDB API for movie database, then deployed the website on Firebase",
		},
		// {
		// 	name: "Zoom Clone",
		// 	githubLink: "https://github.com/ayushazuri/Zoom-Clone",
		// 	image: require("./assets/Images/Amazon.png"),
		// 	technologies: [
		// 		"Node.js",
		// 		"Express.js",
		// 		"Javascript",
		// 		"SASS",
		// 		"Socket.io",
		// 		"PeerJS",
		// 		"EJS",
		// 	],
		// 	websiteLink: "",
		// 	description:
		// 		"A Node.js project, made with the help of various other technologies like express.js, socket.io, ejs, and peerjs.",
		// },
		// {
		// 	name: "REWFA Website",
		// 	githubLink: "",
		// 	image: require("./assets/Images/Amazon.png"),
		// 	technologies: ["ReactJS", "Javascript", "CSS", "Bootstrap", "Adobe Xd"],
		// 	websiteLink: "https://rewfa.com/",
		// 	description:
		// 		"Built this fully responsive website of the E-Commerce Startup catering to various business needs from scratch using ReactJS.",
		// },
		// {
		// 	name: "Hotel Management System",
		// 	githubLink: "https://github.com/ayushazuri/hotel-management-system",
		// 	image: require("./assets/Images/Amazon.png"),
		// 	technologies: ["Java", "OOPS", "Multithreading"],
		// 	websiteLink: "",
		// 	description:
		// 		"A Java-based application for managing daily operations of a Hotel such as booking rooms, maintaining customer details, ordering food, and generating invoices. The app incorporates several concepts of Object- Oriented Programming and Exception Handling.",
		// },
		// {
		// 	name: "Food Recommendation System",
		// 	githubLink: "",
		// 	image: require("./assets/Images/Amazon.png"),
		// 	technologies: ["Python", "Machine Learning", "TF-IDF"],
		// 	websiteLink: "",
		// 	description:
		// 		"A System which predicts various dishes according to the user's past ordering history. It also predicts the best 3 restaurants (based on the restaurants' rating) where the user can find the predicted dish",
		// },
		// {
		// 	name: "Pharmacy Management System",
		// 	githubLink: "",
		// 	image: require("./assets/Images/Amazon.png"),
		// 	technologies: ["Java", "JDBC", "MySQL"],
		// 	websiteLink: "",
		// 	description:
		// 		"A User Friendly Java application interfaced with MySQL database using JDBC connectivity to efficiently perform various tasks for a pharmacy company.",
		// },
	],
};
export {
	greeting,
	aboutMe,
	socialMediaLinks,
	skills,
	experience,
	competitiveLinks,
	education,
	certifications,
	projects,
};
