import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
import { useState, useEffect } from "react";

const Trending = (props) => {
    const [slides, setSlides] = useState();

    useEffect(() => {
        if (window.innerWidth < 768) {
            setSlides(2)
        } else if (window.innerWidth < 1080) {
            setSlides(3)
        } else {
            setSlides(4)
        }
    }, [])

    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            setSlides(2)
        } else if (window.innerWidth < 1080) {
            setSlides(3)
        } else {
            setSlides(4)
        }
    })

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: `${slides}`,
        slidesToScroll: 1,
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

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -5%;
    }

    .slick-next {
        right: -5%;
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