import {
    CContainer,
    CRow,
    CCol,
    CImage
} from '@coreui/react'
import Img from '../assets/Set 1/1-01.png'
import './Home.css'
function Home() {
    const d = new Date();
    // d.getMonth() + 1;
    d.getDate();
    d.getFullYear();

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
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">{d.getDate()}</p>
                        <p className="today">Today</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">08</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">09</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">10</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">11</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">12</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">13</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">14</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">15</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">16</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">17</p>
                    </div>
                    <div className="box">
                        <p className="month">Dec</p>
                        <p className="date">18</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
