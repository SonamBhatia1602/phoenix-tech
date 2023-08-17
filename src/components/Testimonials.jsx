import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "The fast loading website created by Phoenix Tech Solutions has significantly improved user experience. Our bounce rates have reduced, leading to increased conversions.",
            author: "Emily Thompson",
            role: "CTO, Coffee House",
            image: "/assets/client.jpeg",
            rating: 5,
        },
        {
            id: 2,
            text: "Phoenix Tech Solutions transformed our online presence with their innovative designs. Our website now stands out and attracts more visitors than ever before. Their expertise has truly taken our brand to the next level.",
            author: "Jonathan Ramirez",
            role: "Head, Visionary Tech",
            image: "/assets/client2.jpeg",
            rating: 4.6,
        },
        {
            id: 2,
            text: "Working with Phoenix Tech Solutions was a game-changer for our business. Their optimization strategies have boosted our online visibility and helped us reach a wider audience.",
            author: "Elena Nguyen",
            role: "Technology Director, Organic Store",
            image: "/assets/client 1.jpg",
            rating: 5,
        },
        // Add more testimonials here
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="testimonials-content">
                    <div className="testimonial-text">
                        <h2 className="section-title">Client Testimonials</h2>
                        <p>
                            Elevating your website's appeal through creative designs that
                            captivate, coupled with seamless functionality and rapid
                            loading. Experts in enhancing online presence for your
                            thriving business.
                        </p>
                        <p>
                            Our clients love what we do! Here's what some of them have to
                            say about working with us:
                        </p>
                    </div>
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div className="testimonial-card" key={testimonial.id}>
                                    <div className="testimonial-content">
                                        <div className="testimonial-card-header">
                                            <div className="testimonial-image">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                />
                                            </div>
                                            <div className="testimonial-author">
                                                <h4>{testimonial.author}</h4>
                                                <p>{testimonial.role}</p>
                                                <div className="testimonial-rating">
                                                    {Array.from({
                                                        length: testimonial.rating,
                                                    }).map((_, index) => (
                                                        <span
                                                            key={index}
                                                            className="star"
                                                        >
                                                            &#9733;
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial-text1">
                                            <p>{testimonial.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
