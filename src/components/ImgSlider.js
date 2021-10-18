import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <div id="badging"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="scale"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="badag"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="scales"/>
                </a>
            </Wrap>
        </Carousel>
    )
};

const Carousel = styled(Slider)`
    margin-top: 20px;

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
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        div {
            height: 0;
            min-height: 180px;
            width: 100%;
            background-position: right;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 25.55%;
        }

        #badging {
            background-image: url('/disney-plus/images/slider-badging.jpg')
        }

        #scale {
            background-image: url('/disney-plus/images/slider-scale.jpg')
        }

        #badag {
            background-image: url('/disney-plus/images/slider-badag.jpg')
        }

        #scales {
            background-image: url('/disney-plus/images/slider-scales.jpg')
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 100ms;
        }
    }
`

export default ImgSlider;