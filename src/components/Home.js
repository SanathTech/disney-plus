import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../components/firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { collection, doc, onSnapshot } from 'firebase/firestore';

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        onSnapshot(collection(db,'movies'), (snapshot) => {
            snapshot.docs.map((doc) => {
                switch(doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends,  {id: doc.id, ...doc.data()}];
                        break;
                    case 'new':
                        newDisneys = [...newDisneys,  {id: doc.id, ...doc.data()}];
                        break;
                    case 'original':
                        originals = [...originals,  {id: doc.id, ...doc.data()}];
                        break;
                    case 'trending':
                        trending = [...trending,  {id: doc.id, ...doc.data()}];
                        break;
                }
            });
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
                })
            );
        });
    }, [userName]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
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