const greeting = {
	title: "Ayush Singh",
	profilePhoto: require("./assets/Images/profile.jpeg").default,
	logo_name: "AyushSingh",
	subTitle:
		"A Passionate Software Developer having an experience of building web applications using various technologies along with good programming and Problem-Solving Skills. Interested to learn new technologies with a receptive mind and diligence.",
	resumeLink:
		"https://drive.google.com/file/d/1ejPgoDuJcKOIyM7F3wVu3zxAobWkB3Ph/view?usp=sharing",
	portfolio_repository: `https://github.com/ayushazuri/Portfolio-Website`,
};

const aboutMe = {
	name: "Ayush Singh",
	email: "ayushazuri@gmail.com",
	phone: "+91 9892770647",
	address: "Maple Leaf, Raheja Vihar, Powai, Mumbai, 400072.",
	resumeLink:
		"https://drive.google.com/file/d/1ejPgoDuJcKOIyM7F3wVu3zxAobWkB3Ph/view?usp=sharing",
	openForOpportunity: "Yes",
	message: "My inbox is open for all. Feel free to reach out to me any time. ",
	portfolio_repository: "https://github.com/ayushazuri/Portfolio-Website",
	linkedin: "https://www.linkedin.com/in/ayush-singh1998/",
	githubLink: "https://github.com/ayushazuri",
	profilePhoto: require("./assets/Images/profile.jpeg").default,
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
	// {
	// 	name: "Twitter",
	// 	link: "https://twitter.com/ayushazuri",
	// 	backgroundColor: "#1DA1F2",
	// },
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
	{
		name: "Telephone",
		link: "tel:9892770647",
		backgroundColor: "#1180FF",
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
		backgroundColor: "#008001",
	},
	{
		name: "Leetcode",
		link: "https://leetcode.com/ayushazuri/",
		backgroundColor: "black",
	},
];

const skills = {
	descriptions: [
		"A Web Developer who makes highly interactive and responsive web applications using fascinating technologies.",
		"Enthusiastic programmer who loves to solve different problems with a result-oriented approach.",
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
		// {
		// 	name: "express.js",
		// },
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
			skills: "Python | Firebase | Node.js",
			proficiency: "50%",
		},
		{
			skills: "SQL | MySQL",
			proficiency: "60%",
		},
	],
};

const experience = {
	descriptions: [
		"I have taken up various assignments from different startups in different settings as a Web Developer and have used my skills for their growth and development along with increasing my knowledge in various technical domains. Those organizations provided me an opportunity to assimilate the technologies which are used in the practical world.",
	],
	works: [{}],
	internships: [
		{
			name: "REWFA Ecommerce Pvt. Ltd.",
			role: "SDE Intern",
			image: require("./assets/Images/rewfa_logo.svg").default,
			tasks: [
				"Built a fully responsive website of the E-Commerce Startup catering to various business needs from scratch using ReactJS.",
				"Designed the UI of the website using Adobe Xd.",
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
			image: require("./assets/Images/orcip_logo.png").default,
			tasks: [
				"Worked on company's website.",
				"Worked on some open source projects like custom-react-select.",
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
		image: require("./assets/Images/SPIT_logo.png").default,
	},
	{
		name: "Chandrabhan Sharma College",
		timeline: "2014 - 2016",
		pointer: "85.38%",
		branch: "Higher Secondary Degree",
		location: "Mumbai",
		image: require("./assets/Images/csc.png").default,
	},
	{
		name: "St. Joseph's School",
		timeline: "2002 - 2014",
		pointer: "91.16%",
		branch: "ICSE",
		location: "Gorakhpur",
		image: require("./assets/Images/sjic.png").default,
	},
];

const certifications = [
	{
		name: "Data Structures & Algorithms!",
		author: "DS Guy",
		source: "Udemy",
		link: "http://ude.my/UC-73cfcc6c-47c6-4599-8ddc-35c548c0d31c",
		image: require("./assets/Images/udemy.png").default,
	},
	{
		name: "SQL for Data Science",
		author: "University of California, Davis",
		source: "Coursera",
		link: "https://coursera.org/share/b44da8f77e30687fd8a36167c9231f03",
		image: require("./assets/Images/coursera.png").default,
	},
	{
		name: "Java (Basics)",
		author: "HackerRank",
		source: "HackerRank",
		link: "https://www.hackerrank.com/certificates/af3dc76908c1",
		image: require("./assets/Images/hackerrank.png").default,
	},
	{
		name: "Problem Solving (Basics)",
		author: "HackerRank",
		source: "HackerRank",
		link: "https://www.hackerrank.com/certificates/f2840e54e4b0",
		image: require("./assets/Images/hackerrank.png").default,
	},
];

const projects = {
	limit: "6",
	description:
		"My projects utilize a variety of leading technological tools. One of my finest experiences include working on Web Development tasks using trending technologies such as ReactJS and SASS.",
	projects: [
		{
			name: "Portfolio Website",
			githubLink: "https://github.com/ayushazuri/Portfolio-Website",
			image: require("./assets/Images/portfolio.png").default,
			technologies: ["ReactJS", "Javascript", "SASS", "Redux"],
			websiteLink: "https://ayushsingh11.web.app/",
			description:
				"A Portfolio Website to showcase my skills and my works as a Software Developer and which can give you a brief description of me. Made from scratch using ReactJs.",
			timeline: "May 2021",
		},
		{
			name: "Amazon Clone",
			githubLink: "https://github.com/ayushazuri/Amazon-Clone",
			image: require("./assets/Images/Amazon.png").default,
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
			timeline: "April 2021",
		},
		{
			name: "Netflix Clone",
			githubLink: "https://github.com/ayushazuri/Netflix-Clone",
			image: require("./assets/Images/Netflix.png").default,
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
			timeline: "March 2021",
		},
		{
			name: "Zoom Clone",
			githubLink: "https://github.com/ayushazuri/Zoom-Clone",
			image: require("./assets/Images/Amazon.png").default,
			technologies: [
				"Node.js",
				"Express.js",
				"Javascript",
				"SASS",
				"Socket.io",
				"PeerJS",
				"EJS",
			],
			websiteLink: "",
			description:
				"A Node.js project, made with the help of various other technologies like express.js, socket.io, ejs, and peerjs.",
			timeline: "Arpil 2021",
		},
		{
			name: "REWFA Website",
			githubLink: "",
			image: require("./assets/Images/rewfa.png").default,
			technologies: ["ReactJS", "Javascript", "CSS", "Bootstrap", "Adobe Xd"],
			websiteLink: "https://rewfa.com/",
			description:
				"Built this fully responsive website of the E-Commerce Startup catering to various business needs from scratch using ReactJS.",
			timeline: "Dec 2020 - Feb 2021",
		},
		{
			name: "Hotel Management System",
			githubLink: "https://github.com/ayushazuri/hotel-management-system",
			image: require("./assets/Images/java1.jpg").default,
			technologies: ["Java", "OOPS", "Multithreading"],
			websiteLink: "",
			description:
				"A Java-based application for managing daily operations of a Hotel such as booking rooms, maintaining customer details, ordering food, and generating invoices. The app incorporates several concepts of Object- Oriented Programming and Exception Handling.",
			timeline: "April 2020",
		},
		{
			name: "Food Recommendation System",
			githubLink: "",
			image: require("./assets/Images/python.jpg").default,
			technologies: ["Python", "Machine Learning", "TF-IDF"],
			websiteLink: "",
			description:
				"A System which predicts various dishes according to the user's past ordering history. It also predicts the best 3 restaurants (based on the restaurants' rating) where the user can find the predicted dish",
			timeline: "August 2020",
		},
		{
			name: "Pharmacy Management System",
			githubLink: "",
			image: require("./assets/Images/sql.png").default,
			technologies: ["Java", "JDBC", "MySQL"],
			websiteLink: "",
			description:
				"A User Friendly Java application interfaced with MySQL database using JDBC connectivity to efficiently perform various tasks for a pharmacy company.",
			timeline: "August 2020",
		},
	],
};

const achievements = [
	"Secured 5⭐ in Problem Solving as well as in Java Section and 4⭐ in SQL Section on HackerRank.",
	"Semifinalist in Texas Instruments India Innovation Challenge Design Contest 2019.",
	"Participated in several Beach-Cleanup Drives.",
	"Volunteered for teaching underprivileged students at an NGO",
];
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
	achievements,
};
