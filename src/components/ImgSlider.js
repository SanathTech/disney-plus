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
                    <div id="american-dad"><img id="american-dad-logo" src="/disney-plus/images/slider-american-dad-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="among"><img id="among-logo" src="/disney-plus/images/slider-among-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="black-widow"><img id="black-widow-logo" src="/disney-plus/images/slider-black-widow-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="criminal-minds"><img id="criminal-minds-logo" src="/disney-plus/images/slider-criminal-minds-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="family-guy"><img id="family-guy-logo" src="/disney-plus/images/slider-family-guy-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="free-guy"><img id="free-guy-logo" src="/disney-plus/images/slider-free-guy-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="just-beyond"><img id="just-beyond-logo" src="/disney-plus/images/slider-just-beyond-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="muppets"><img id="muppets-logo" src="/disney-plus/images/slider-muppets-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="my-name"><img id="my-name-logo" src="/disney-plus/images/slider-my-name-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="only-murders"><img id="only-murders-logo" src="/disney-plus/images/slider-only-murders-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="simpsons"><img id="simpsons-logo" src="/disney-plus/images/slider-simpsons-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="star-wars"><img id="star-wars-logo" src="/disney-plus/images/slider-star-wars-logo.png"/></div>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <div id="what-if"><img id="what-if-logo" src="/disney-plus/images/slider-what-if-logo.png"/></div>
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
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    padding: 0;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        margin: 10px;
        text-decoration: none;
        border: 4px solid transparent;

        div {
            height: 0;
            width: 100%;
            background-position: right;
            background-size: cover;
            background-repeat: no-repeat;
            padding-top: 25.6%;
            border-radius: 4px;
            display: block;
            z-index: -1;
        }

        img {
            inset: 0px;
            position: absolute;
            height: 100%;
        }

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }

        #american-dad {
            background-image: url('/disney-plus/images/slider-american-dad.jfif');
        }

        #among {
            background-image: url('/disney-plus/images/slider-among.jfif');
        }
        #among-logo {
            padding: 5%;            
        }

        #black-widow {
            background-image: url('/disney-plus/images/slider-black-widow.jfif');
        }
        #black-widow-logo {
            padding: 5%;
        }

        #criminal-minds {
            background-image: url('/disney-plus/images/slider-criminal-minds.jfif');
        }

        #family-guy {
            background-image: url('/disney-plus/images/slider-family-guy.jfif');
        }

        #free-guy {
            background-image: url('/disney-plus/images/slider-free-guy.jfif');
        }

        #just-beyond {
            background-image: url('/disney-plus/images/slider-just-beyond.jfif');
        }

        #muppets {
            background-image: url('/disney-plus/images/slider-muppets.jfif');
        }
        
        #my-name {
            background-image: url('/disney-plus/images/slider-my-name.jfif');
        }

        #only-murders {
            background-image: url('/disney-plus/images/slider-only-murders.jfif');
        }
        #only-murders-logo {
            padding: 5%;
        }

        #simpsons {
            background-image: url('/disney-plus/images/slider-simpsons.jfif');
        }
        
        #star-wars {
            background-image: url('/disney-plus/images/slider-star-wars.jfif');
        }

        #what-if {
            background-image: url('/disney-plus/images/slider-what-if.jfif');
        }
        #what-if-logo {
            padding: 5%;
        }
    }
`

export default ImgSlider;