import {
    CContainer,
    CRow,
    CCol,
    CImage
} from '@coreui/react'
import Img from '../assets/Set 1/1-01.png'
import logo from '../assets/logo2.png'
import './Home.css'
function Home() {
    const calenderArr = [
        {
            id: 1,
            date: '07',
        },
        {
            id: 2,
            date: '08',
        },
        {
            id: 3,
            date: '09',
        },
        {
            id: 4,
            date: '10',
        },
        {
            id: 5,
            date: '11',
        },
        {
            id: 6,
            date: '12',
        },
        {
            id: 7,
            date: '13',
        },
        {
            id: 8,
            date: '14',
        },
        {
            id: 9,
            date: '15',
        },
        {
            id: 10,
            date: '16',
        },
        {
            id: 11,
            date: '17',
        },
        {
            id: 12,
            date: '18',
        },
    ]
    const getdate = new Date();
    const month = getdate.toLocaleString('default', { month: 'short' });
    const date = getdate.toLocaleString('default', { day: '2-digit' });
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
                    <div className="content">
                        <CImage fluid src={logo} alt="logo" className="logo" style={{ width: '30%' }} />
                        <p className="scrolldown-text">SCROLL DOWN</p>
                        <p className="sidebar-text">TO REVEAL THE DAILY SURPRISE</p>
                    </div>
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
                    {calenderArr.map(v => {
                        return (
                            v.date === date ? (
                                <div key={v.id} className="activebox">
                                    <span className="activemonth">Dec</span>
                                    <span className="activedate">{v.date}</span>
                                    <span className="today">Today!</span>
                                </div>
                            ) :
                                v.date >= date ? (
                                    <div key={v.id} className="box">
                                        <span className="month">Dec</span>
                                        <span className="date">{v.date}</span>
                                    </div>
                                ) : (
                                    <div key={v.id} className="pastbox">
                                        <span className="month">Dec</span>
                                        <span className="date">{v.date}</span>
                                    </div>
                                )
                        )
                    }
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
