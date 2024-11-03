export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects'
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
]

export const workExperiences = [
    {
        id: 1,
        name: 'React Developer',
        pos: 'Independent Projects',
        icon: '/assets/react.svg',
        duration: '2023 - Present',
        title: 'React Developer',
        description: 'Learning React and building minor projects to enhance skills.',
        animation: 'waving'
    },
    {
        id: 2,
        name: 'Python Developer',
        pos: 'Independent Projects',
        icon: '/assets/python-logo.png',
        duration: '2021 - Present',
        title: 'Python Developer',
        description: 'I love python and have been using it for a while. I have created simple games with pygame and have worked on various projects.',
        animation: 'victory'
    },
    {
        id: 3,
        name: 'Blender Animator',
        pos: 'YouTube Channel',
        icon: '/assets/blender-logo.png',
        duration: '2020 - Present',
        title: 'Blender Animator',
        description: 'Created and published gun reload animations on YouTube.',
        animation: 'fire'
    },
    
    // {
    //     id: 4,
    //     name: 'Cyber Security Enthusiast',
    //     pos: 'TryHackMe',
    //     icon: '/assets/cybersecurity.png',
    //     duration: '2021 - Present',
    //     title: 'Cyber Security Enthusiast',
    //     description: 'Gained skills in cyber security through TryHackMe challenges.',
    //     animation: 'fade-up'
    // },
    // {
    //     id: 5,
    //     name: 'Python Developer',
    //     pos: 'Independent Projects',
    //     icon: '/assets/python-logo.png',
    //     duration: '2020 - Present',
    //     title: 'Python Developer',
    //     description: 'Learned about pygame and created simple games.',
    //     animation: 'fade-left'
    // },
]

export const myProjects = [
    {
        title: 'My Portfolio',
        desc: '3D Portfolio With Three.js',
        href: '#home',
        className: 'from-[#ff006126]',
        texture: 'assets/projects/portfolio.mp4',
        logo: 'fa-solid fa-user-tie text-gray-400 bg-black',
        logoStyle: {
            backgroundColor: '',
            border: '',
            // boxShadow: '0px 0px 60px 0px #'
        },
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/technologies/react-logo.png',
            },
            {
                id: 2,
                name: 'TailwindCss',
                path: '/assets/technologies/tailwindcss-logo.png'
            },
            {
                id: 3,
                name: 'Threejs',
                path: '/assets/technologies/three-js-logo.png',
            }
        ]
    },
    {
        title: 'Django CRM',
        desc: 'CRM App With Django.',
        href: '',
        className: 'from-[#ffff6126]',
        texture: '',
        logo: 'fa-solid fa-address-book text-black-500 bg-neutral-200',
        logoStyle: {
            backgroundColor: '',
            border: '',
            // boxShadow: '0px 0px 60px 0px #'
        },
        tags: [
            {
                id: 1,
                name: 'Django',
                path: '/assets/technologies/django-logo.png',
            },
            {
                id: 2,
                name: 'TailwindCss',
                path: '/assets/technologies/tailwindcss-logo.png'
            },
        ]
    },
    {
        title: 'NASA APOD Image Retriever',
        desc: "Image retriever with NASA's APOD API",
        href: 'reactnasaapi.netlify.app',
        className: 'from-[#ff94dd26]',
        texture: '',
        logo: 'fa-solid fa-meteor text-red-400',
        logoStyle: {
            backgroundColor: '',
            border: '',
            // boxShadow: '0px 0px 60px 0px #'
        },
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/technologies/react-logo.png',
            },
            {
                id: 2,
                name: 'TailwindCss',
                path: '/assets/technologies/tailwindcss-logo.png'
            },
        ]
    },
    {
        title: 'Games With Pygame',
        desc: "I have learned about pygame and understood the basics to create simple games.",
        href: '',
        github: 'https://github.com/blendstreak/Projects',
        className: 'from-[#ffff6126]',
        texture: '/assets/technologies/pygame-logo.png',
        logo: 'fa-solid fa-staff-snake',
        logoStyle: {
            backgroundColor: 'black',
            border: '',
            color: 'yellow',
            // boxShadow: '0px 0px 60px 0px #'
        },
        tags: [
            {
                id: 1,
                name: 'Pygame',
                path: '/assets/technologies/pygame-logo.png',
            },
        ]
    },
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 4 : isMobile ? 5 : isTablet ? 6 : 7,
        deskPosition: isMobile ? [0, -6.2, 0] : [-0.7, -8, 0],
        targetPosition: isMobile ? [-6, -10, 4] : isTablet ? [-10, -11, 0] : [-14, -11, 0],
        reactLogoPosition: isMobile ? [5, 1, 4] : isTablet ? [6, 1, 4] : [12, 1, 5]
    }
}
