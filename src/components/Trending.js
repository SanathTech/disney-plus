import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
import { useState, useEffect } from "react";

const Trending = (props) => {
    const initialNumSlides = () => {
        if (window.innerWidth < 768) {
            return 2;
        } else if (window.innerWidth < 1080) {
            return 3;
        } else if (window.innerWidth < 1440) {
            return 4;
        } else {
            return 5;
        }
    }

    const [numSlides, setNumSlides] = useState(initialNumSlides);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setNumSlides(2)
        } else if (window.innerWidth < 1080) {
            setNumSlides(3)
        } else if (window.innerWidth < 1440) {
            setNumSlides(4)
        } else {
            setNumSlides(5)
        }
        console.log('useEffect: ' + numSlides);
    }, [numSlides]);

    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            setNumSlides(2)
        } else if (window.innerWidth < 1080) {
            setNumSlides(3)
        } else if (window.innerWidth < 1440) {
            setNumSlides(4)
        } else {
            setNumSlides(5)
        }
        console.log('slides = ' + numSlides);
    });

    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: numSlides,
        slidesToScroll: numSlides,
        autoplay: false,
    };

    const movies = useSelector(selectTrending);

    return (
        <Container>
            <h4>Trending</h4>
            <Carousel {...settings}>
                {
                    movies && movies.map((movie,key) => (
                        <Wrap key={key} image={movie.cardImg} title={movie.title.replace(/\s+/g, '-').toLowerCase()}>
                            <Link to={'/movies/' + movie.title.replace(/\s+/g, '-').toLowerCase() + '/' + movie.id}>
                                {/* <img src={movie.cardImg} alt={movie.title} /> */}
                                    <div id={movie.title.replace(/\s+/g, '-').toLowerCase()} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Carousel>
        </Container>
    )
};

const Container = styled.div`

    h4{
        padding: 10px 10px 0 10px;
        margin: 15px 0 10px 0;
    }
`

const Carousel = styled(Slider)`

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            opacity: 1;
            color: rgb(150, 158, 171);
            @media (max-width: 768px) {
                display: none;
            }
        }
    }

    li.slick-active button:before {
        color: white;
        @media (max-width: 768px) {
            display: none;
        }
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -5%;
    }

    .slick-next {
        right: -5%;
    }

    .slick-dots {
        bottom: 20px;
        display: block;
        margin: 0px;
        padding: 0px;
        position: absolute;
        right: 25px;
        text-align: right;
        pointer-events: none;
        width: 100%;
    }

    .slick-dots li {
        margin: 0;
    }
`

const Wrap = styled.div`

    a {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
                    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        margin: 0 10px;
        text-decoration: none;
        border: 4px solid transparent;
        border-radius: 10px;
        overflow: hidden;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        border: 3px solid rgba(249, 249, 249, 0.1);
        

        div {
            height: 0;
            width: 100%;
            background-position: right;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 56.25%;
            border-radius: 4px;
            display: block;
            z-index: -1;
        }

        #${props => props.title} {
            background-image: ${props => `url("${props.image}")`};
        }

        &:hover {
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
            transform: scale(1.05);
            border-color: rgba(249, 249, 249, 0.8);
    }
    }

    
`

export default Trending;