import Icon from '@iconify/svelte';

export type StackItem = { name: string; icon?: string; color?: string; url?: string };

type TagItem = { name: string; color: string };

export type ExperienceItem = {
	icon: string;
	role: string;
	date: string;
	location: string;
	description: string[];
	url?: string;
	tags: TagItem[];
	color: string;
};

export type CommunityItem = {
	icon: string;
	role: string;
	date: string;
	location: string;
	description: string[];
	url?: string;
	color: string;
};

export type ProjectItem = {
	icon?: string;
	iconHTML: string;
	iconStyle: string;
	style: string;
	name: string;
	background: string;
	description: string;
};

export type HomeProjectItem = {
	icon?: string;
	background: string;
	description: string;
	url: string;
	style: string;
};

export const techStack: Record<string, StackItem[]> = {
	Languages: [
		{
			name: 'JavaScript',
			icon: 'javascript',
			color: 'bg-[#F7DF1E]/20',
			url: 'https://www.javascript.com/'
		},
		{
			name: 'TypeScript',
			icon: 'typescript-icon',
			color: 'bg-[#007ACC]/20',
			url: 'https://www.typescriptlang.org/'
		},
		{
			name: 'Python',
			icon: 'python',
			color: 'bg-[#3776AB]/20',
			url: 'https://www.python.org/'
		},
		{
			name: 'C/C++',
			icon: 'c-plusplus',
			color: 'bg-[#00599C]/20',
			url: 'https://www.cplusplus.com/'
		},
		{
			name: 'Kotlin',
			icon: 'kotlin-icon',
			color: 'bg-[#B71FE8]/20',
			url: 'https://kotlinlang.org/'
		},
		{
			name: 'XML',
			icon: 'xml',
			color: 'bg-white/20',
			url: 'https://www.w3schools.com/xml/'
		},
		{
			name: 'HTML',
			icon: 'html-5',
			color: 'bg-[#E34F26]/20',
			url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			name: 'CSS',
			icon: 'css-3',
			color: 'bg-[#1572B6]/20',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: 'SQL',
			icon: 'mysql',
			color: 'bg-[#F29111]/20',
			url: 'https://www.mysql.com/'
		},
		{
			name: 'Bash/Shell',
			icon: 'bash-icon',
			color: 'bg-[#4EAA25]/20',
			url: 'https://www.gnu.org/software/bash/'
		}
	],

	Frameworks: [
		{
			name: 'Svelte/SvelteKit',
			icon: 'svelte-icon',
			color: 'bg-[#FF3E00]/20',
			url: 'https://svelte.dev/'
		},
		{
			name: 'React',
			icon: 'react',
			color: 'bg-[#61DAFB]/20',
			url: 'https://reactjs.org/'
		},
		{
			name: 'Node.js',
			icon: 'nodejs-icon',
			color: 'bg-[#339933]/20',
			url: 'https://nodejs.org/'
		},
		{
			name: 'TailwindCSS',
			icon: 'tailwindcss-icon',
			color: 'bg-[#38B2AC]/20',
			url: 'https://tailwindcss.com/'
		}
	],

	'Developer Tools': [
		{
			name: 'Git',
			icon: 'git-icon',
			color: 'bg-[#F05032]/20',
			url: 'https://git-scm.com/'
		},
		{
			name: 'Vim',
			icon: 'vim',
			color: 'bg-[#019733]/20',
			url: 'https://www.vim.org/'
		},
		{
			name: 'VSCode',
			icon: 'visual-studio-code',
			color: 'bg-[#007ACC]/20',
			url: 'https://code.visualstudio.com/'
		},
		{
			name: 'Android Studio',
			icon: 'android-icon',
			color: 'bg-[#3DDC84]/20',
			url: 'https://developer.android.com/studio'
		},
		{
			name: 'Figma',
			icon: 'figma',
			color: 'bg-[#F24E1E]/20',
			url: 'https://www.figma.com/'
		},
		{
			name: 'Jupyter Notebook',
			icon: 'jupyter',
			color: 'bg-[#F37626]/20',
			url: 'https://jupyter.org/'
		},
		{
			name: 'MySQL Workbench',
			icon: 'mysql',
			color: 'bg-[#F29111]/20',
			url: 'https://www.mysql.com/products/workbench/'
		}
	],

	Libraries: [
		{
			name: 'NumPy',
			icon: 'numpy',
			color: 'bg-[#013243]/20',
			url: 'https://numpy.org/'
		},
		{
			name: 'Pandas',
			icon: 'pandas-icon',
			color: 'bg-[#FFCA00]/20',
			url: 'https://pandas.pydata.org/'
		},
		{
			name: 'Matplotlib',
			icon: 'matplotlib-icon',
			color: 'bg-[#FFAA70]/20',
			url: 'https://matplotlib.org/'
		},
		{
			name: 'Scikit-learn',
			icon: 'scikit-learn',
			color: 'bg-[#F7931E]/20',
			url: 'https://scikit-learn.org/stable/'
		}
	],

	Applications: [
		{
			name: 'Adobe Photoshop',
			icon: 'adobe-photoshop',
			color: 'bg-[#31A8FF]/20',
			url: 'https://www.adobe.com/products/photoshop.html'
		},
		{
			name: 'Sony Vegas Pro',
			icon: 'simple-icons:sony',
			color: 'bg-white/20',
			url: 'https://www.vegascreativesoftware.com/us/vegas-pro/'
		},
		{
			name: 'Microsoft Office',
			icon: 'microsoft-icon',
			color: 'bg-[#D83B01]/20',
			url: 'https://www.microsoft.com/en-us/microsoft-365'
		},
		{
			name: 'Wireshark',
			icon: 'wireshark',
			color: 'bg-white/20',
			url: 'https://www.wireshark.org/'
		}
	]
};

export const allExperiences: Record<string, ExperienceItem[]> = {
	Flikshop: [
		{
			icon: 'flikshop.jpg',
			color: 'bg-[#FFA009]/20',
			role: 'Software Engineering Contractor',
			date: 'August 2022 - May 2023 · 9 months',
			location: 'Washington, DC',
			description: [
				'• Spearheaded the development of a front-end Learning Management System (LMS) in an Android environment using Kotlin.',
				'• Collaborated with an agile team to prioritize and scope feature requests, ensuring that high-impact features were given top priority.',
				'• Contributed to the successful completion of the project by delivering high-quality code, actively participating in code reviews, and identifying and resolving issues promptly.'
			],
			url: 'https://www.flikshop.com/',
			tags: [
				{ name: 'android-icon', color: 'bg-[#3DDC84]/20' },
				{ name: 'kotlin-icon', color: 'bg-[#B71FE8]/20' },
				{ name: 'xml', color: 'bg-white/20' },
				{ name: 'figma', color: 'bg-[#F24E1E]/20' },
				{ name: 'git-icon', color: 'bg-[#F05032]/20' }
			]
		}
	],
	'Research Fellow': [
		{
			icon: 'su.png',
			color: 'bg-[#8B0B04]/20',
			role: 'Student Researcher',
			date: 'May 2022 - September 2022 · 4 months',
			location: 'Salisbury, MD',
			description: [
				'• Conducted research on ”Exploiting Geometry in Robust Signal Processing and Feature Extraction."',
				'• Applied advanced techniques in tensor decomposition to learn latent variables in high-dimensional Gaussian Mixture Models, resulting in more robust signal processing and feature extraction.'
			],
			url: 'https://www.salisbury.edu/',
			tags: [
				{ name: 'visual-studio-code', color: 'bg-[#007ACC]/20' },
				{ name: 'python', color: 'bg-[#3776AB]/20' },
				{ name: 'numpy', color: 'bg-[#013243]/20' },
				{ name: 'pandas-icon', color: 'bg-[#FFCA00]/20' },
				{ name: 'git-icon', color: 'bg-[#F05032]/20' }
			]
		}
	]
};

export const allCommunity: Record<string, CommunityItem[]> = {
	'Math, Computer Science and Data Science Club': [
		{
			icon: 'su.png',
			color: 'bg-[#8B0B04]/20',
			role: 'President',
			date: 'August 2022 - Present · > 1 year',
			location: 'Salisbury, MD',
			description: [
				'• Managed a team of officers to ensure the smooth functioning of the club and effective collaboration between members.',
				'• Organized and led weekly meetings to discuss current topics in mathematics, computer science, and data science and to provide a platform for members to present their projects and research.'
			],
			url: 'https://www.salisbury.edu/experience-campus/clubs-and-organizations.aspx'
		}
	],

	'Math and Computer Science Tutor': [
		{
			icon: 'su.png',
			color: 'bg-[#8B0B04]/20',
			role: 'Tutor & Proctor',
			date: 'August 2022 - Present · > 1 year',
			location: 'Salisbury, MD',
			description: [
				'• Provided academic support to undergraduate students in the Math Emporium, demonstrating strong math skills.',
				'• Effectively communicated complex concepts to students, resulting in improved academic performance.'
			],
			url: 'https://www.salisbury.edu/academic-offices/science-and-technology/mathematical-sciences/tutoring-center.aspx'
		}
	],

	'Henson Student Leadership Advisory Council (HSLAC)': [
		{
			icon: 'su.png',
			color: 'bg-[#8B0B04]/20',
			role: 'Member',
			date: 'Februrary 2022 - Present · < 1 year',
			location: 'Salisbury, MD',
			description: [
				'• Henson School of Science: Comp. Science Representative',
				'• Advocated for the concerns and ideas of computer science students to faculty and decision-making bodies.',
				'• Organized workshops, conferences, and networking events to promote engagement and professional development.',
				'• Mentored and supported fellow computer science students, providing guidance on academic and career-related matters.'
			],
			url: 'https://www.salisbury.edu/academic-offices/science-and-technology/about/student-leadership-advisory-council.aspx'
		}
	]
};

export const allProjects: Record<string, ProjectItem[]> = {
	Portfolio: [
		{
			iconHTML: 'ic:baseline-code',
			iconStyle: 'none',
			name: 'JamesM',
			style: 'code text-lg font-bold text-zinc-50 bg-transparent',
			description: 'My personal portfolio website, created to be simple and easy to navigate 🤓',
			background: 'bg-gradient-to-r from-blue-500 to-blue-700'
		}
	],
	Flikshop: [
		{
			iconHTML: 'ic:baseline-school',
			iconStyle: 'none',
			name: 'Flikshop',
			style: 'archivo text-lg font-light text-[#FFA009] bg-transparent',
			description: 'A Learning Management System (LMS) for Flikshop, built in Kotlin 📚',
			background: 'bg-gradient-to-r from-[#480373] to-[#480373]/75 '
		}
	],
	PokedexJS: [
		{
			icon: 'yes',
			iconHTML: 'ic:baseline-catching-pokemon',
			iconStyle: 'rounded-lg h-8 w-8 p-2 bg-transparent text-white justify-center flex',
			name: 'PokedexJS',
			style: 'rubik text-lg font-medium text-zinc-50 bg-transparent',
			description: 'A Pokedex design concept built in JavaScript, using the PokeAPI 🎨',
			background: 'bg-gradient-to-r from-red-500 to-red-700 '
		}
	],
	'ANIME-DB': [
		{
			icon: 'yes',
			iconHTML: 'material-symbols:database-outline',
			iconStyle: 'rounded-lg h-8 w-8 p-2 bg-transparent text-[#262A2F] justify-center flex',
			name: 'ANIME-DB',
			style: 'francois text-lg font-bold text-[#262A2F] bg-transparent',
			description: 'A database of anime, built in SvelteKit, TailwindCSS and KitsuAPI 🏯',
			background: 'bg-gradient-to-r from-[#17B890] to-[#17B890]/75'
		}
	],
	CZCreative: [
		{
			icon: 'yes',
			iconHTML: 'icon-park-solid:user-business',
			iconStyle: 'rounded-lg h-8 w-8 p-2 bg-transparent text-zinc-50 justify-center flex',
			name: 'CZCreative',
			style: 'lato text-lg font-bold text-zinc-50 bg-transparent',
			description: 'Concept website for a creative agency, built in SvelteKit and TailwindCSS 🏢',
			background: 'bg-gradient-to-r from-orange-500 to-orange-700'
		}
	],
	'SvelteKit Pokedex': [
		{
			icon: 'yes',
			iconHTML: 'simple-icons:svelte',
			iconStyle: 'rounded-lg h-8 w-8 p-2 bg-transparent text-zinc-50 justify-center flex',
			name: 'SvelteKit Pokedex',
			style: 'text-lg font-bold text-zinc-50 bg-transparent',
			description: 'Pokemon Pokedex with catching capability built in SvelteKit and PokeAPI 📱',
			background: 'bg-gradient-to-r from-zinc-500 to-zinc-700'
		}
	]
};

const projectKeys: string[] = Object.keys(allProjects);
const first: string = projectKeys[0];
const second: string = projectKeys[1];
const third: string = projectKeys[2];

export const allHomeProjects: Record<string, HomeProjectItem[]> = {
	[first]: [
		{
			background: allProjects[first][0].background,
			icon: allProjects[first][0].name[0],
			description: allProjects[first][0].description,
			url: '/' + [first],
			style: allProjects[first][0].style
		}
	],
	[second]: [
		{
			background: allProjects[second][0].background,
			icon: allProjects[second][0].name[0],
			description: allProjects[second][0].description,
			url: '/' + [second],
			style: allProjects[second][0].style
		}
	],
	[third]: [
		{
			background: allProjects[third][0].background,
			icon: allProjects[third][0].name[0],
			description: allProjects[third][0].description,
			url: '/' + [third],
			style: allProjects[third][0].style
		}
	]
};
