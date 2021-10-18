import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    padding: 72px calc(3.5vw + 15px);

    &:after {
        background: url('/disney-plus/images/home-background.png') center center / cover no-repeat fixed;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
    
`

export default Home;