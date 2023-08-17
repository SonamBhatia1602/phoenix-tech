import React, { useState,useEffect } from "react";
import "./Portfolio.css";

const PortfolioSection = () => {
    const projects = [
        {
            id: 1,
            title: "Organic Store",
            description:
                "Step into our world of WordPress wonder! We've poured creativity and technical magic into designing our website. With WordPress, we've brought to life a digital space that's not only visually captivating but also super functional. Experience the seamless flow as you navigate through our pages, whether you're exploring on a laptop, tablet, or smartphone. From clever sliding sidebars to a user-friendly dropdown cart, we've added those little touches to make your visit a delight. Join us on this virtual journey, and discover how we've turned our vision into a reality using the incredible WordPress platform!",
            images: ["Organic.jpeg", "Organic-2.png", "Organic-3.jpeg"],
        },
        {
            id: 2,
            title: "Coffee House",
            description: "Short description of Project 2.",
            images: [
                "Coffee Shop.png",
                "Coffee Shop 1.png",
            ],
        },
        {
            id: 3,
            title: "VisionaryTech: Shaping Tomorrow's Innovations",
            description: "Short description of Project 2.",
            images: [
                "One-Click 1.png",
                "One-Click 2.png",
                "One-Click 3.png",
                "One-Click 4.png",
                "One-Click 5.png",
            ],
        },
        {
            id: 4,
            title: "TechVision: Empowering the Future with Innovative Solutions",
            description: "Short description of Project 4.",
            images: [
                "James 1.png",
                "James 2.png",
                "James 3.png",
                "James 4.png",
                "James 5.png",
            ],
        },
        // Add more projects as needed
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    const handleCloseProject = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                handleCloseProject();
            }
        };

        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, []);

    return (
        <section className="portfolio-section">
            <div className="container">
                <h2>Portfolio</h2>
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div
                            className="portfolio-item"
                            key={project.id}
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    `/assets/${project.images[0]}`
                                }
                                alt={project.title}
                            />
                            <div className="portfolio-title">{project.title}</div>
                        </div>
                    ))}
                </div>
                {selectedProject !== null && (
                    <div className="project-modal">
                        <div className="project-modal-content">
                            <span
                                className="project-modal-close"
                                onClick={handleCloseProject}
                            >
                                &times;
                            </span>
                            <h3>{projects[selectedProject - 1].title}</h3>
                            <p>{projects[selectedProject - 1].description}</p>
                            <div className="project-images">
                                {projects[selectedProject - 1].images.map(
                                    (image, index) => (
                                        <img
                                            key={index}
                                            className="project-image"
                                            src={
                                                process.env.PUBLIC_URL +
                                                `/assets/${image}`
                                            }
                                            alt={`Project ${selectedProject} Image ${
                                                index + 1
                                            }`}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioSection;
