document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Countdown Timer",
            description: "A countdown timer web application.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/DikshitaBhati/countdown",
            liveDemoLink: "https://dikshitabhati.github.io/countdown/"
        },
        {
            title: "Music Player",
            description: "A music player web application.",
            technologies: ["HTML", "CSS", "JavaScript"],
            githubLink: "https://github.com/DikshitaBhati/musicplayer",
            liveDemoLink: "https://dikshitabhati.github.io/musicplayer/"
        },
        {
            title: "College Student Web App",
            description: "A comprehensive system to help students and parents find information about institutions.",
            technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
            liveDemoLink: "https://dikshitabhati.github.io/clg-std/",
            githubLink: "https://github.com/DikshitaBhati/clg-std"
        }
    ];

    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 70 },
        // Add more skills here
    ];

    const projectsList = document.getElementById('projects-list');
    const skillsList = document.getElementById('skills-list');

    if (projectsList) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.liveDemoLink ? `<a href="${project.liveDemoLink}" target="_blank">Live Demo</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" target="_blank">Source Code</a>` : ''}
                </div>
            `;

            projectsList.appendChild(projectCard);
        });
    }

    if (skillsList) {
        skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill';

            skillDiv.innerHTML = `
                <h3>${skill.name}</h3>
                <div class="skill-bar-container">
                    <div class="skill-bar" style="--skill-level: ${skill.level}%"></div>
                </div>
            `;

            skillsList.appendChild(skillDiv);
        });
    }

    // GSAP animations
    gsap.from("header h1", { duration: 1, opacity: 0, y: -50 });
    gsap.from("nav a", { duration: 1, opacity: 0, y: -50, stagger: 0.2 });

    // ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".project-card",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        },
        duration: 1,
        opacity: 0,
        y: 20,
        stagger: 0.3
    });

    // Animate skill bars
    document.addEventListener('scroll', function() {
        document.querySelectorAll('.skill-bar').forEach(function(bar) {
            if (bar.getBoundingClientRect().top < window.innerHeight) {
                bar.classList.add('visible');
            }
        });
    });
});
