import {
    CContainer,
    CRow,
    CCol,
    CImage
} from '@coreui/react'
import Img from '../assets/Set 1/1-01.png'
import './Home.css'
function Home() {
    return (
        // <CContainer fluid className="mainDivContainer">
        //     <CRow className="row">
        //         <CCol lg={4}>
        //             adsnas
        //         </CCol>
        //         <CCol className='imageDiv' lg={8}>
        //             hsasdj
        //             <CImage src={Img} alt="heloo" />
        //         </CCol>
        //     </CRow>
        //     <CCol className="dateMainDiv" lg={12}>
        //     </CCol>
        // </CContainer>
        <div className="mainDivContainer">
            <div className="mainDivRow">
                <div className="sideBar">
                    {/* <CImage fluid src={Img} alt="heloo" /> */}
                </div>
                <div className="imageDiv">
                    <CImage fluid src={Img} alt="heloo" />
                    <CImage fluid src={Img} alt="heloo" />
                    <CImage fluid src={Img} alt="heloo" />
                    <CImage fluid src={Img} alt="heloo" />
                </div>
            </div>
            <div className="mainDiv2">
                <div className="box_div">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;
