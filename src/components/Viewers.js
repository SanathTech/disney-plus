import styled from "styled-components";

const Viewers = (props) => {
    return (
        <Container>
            <Scroll>
                <Wrap>
                    <img src="/disney-plus/images/viewers-disney.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInLine={true}>
                        <source src="/disney-plus/videos/disney.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/disney-plus/images/viewers-pixar.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInLine={true}>
                        <source src="/disney-plus/videos/pixar.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/disney-plus/images/viewers-marvel.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInLine={true}>
                        <source src="/disney-plus/videos/marvel.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/disney-plus/images/viewers-starwars.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInLine={true}>
                        <source src="/disney-plus/videos/star-wars.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
                <Wrap>
                    <img src="/disney-plus/images/viewers-national.png" alt="" />
                    <video muted autoPlay={true} loop={true} playsInLine={true}>
                        <source src="/disney-plus/videos/national-geographic.mp4" type="video/mp4"/>
                    </video>
                </Wrap>
            </Scroll>
        </Container>
    )
}

const Container = styled.div`
    //display: grid;
    @media (max-width: 768px) {
        //grid-template-columns: 20px 1fr 20px;
        overflow-x: scroll;
        scroll-snap-type: x proximity;
    }
`

const Scroll = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-gap: 10px;
        grid-template-columns: repeat(5, calc(50% - 40px));
        grid-template-rows: minmax(0, 1fr);
        grid-column: 2 / -2;
    }
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    @media (max-width: 768px) {
        
    }

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;

export default Viewers;