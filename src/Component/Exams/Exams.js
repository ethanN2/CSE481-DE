import React, {Component} from 'react'
import {Button,Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Exams.css'
import Navi from '../Navi/Navi';
import Footer from '../Navi/Footer';
export default class Exams extends Component {
    render() {
        return(
            <div>
            <Navi />
            <div className='freetest-container'>
            <div className='body-banner'>
                <Image className='banner-img' src= {require('../../assets/freetest-banner.png')} />
            </div>
            <div className='sub-menu'>
                <Image className='' src= {require('../../assets/home-icon.png')} />
                
            </div>
            <div className='freetest-body'>
                <div className='freetest-body-header'>
                <h1>Kiểm tra trình độ tiếng anh của bạn ngay bây giờ</h1>
                <p>Giúp bạn chuẩn bị tốt hơn cho những kỳ thi lấy chứng chỉ tiếng Anh
                    quan trọng với các phiên bản rút gọn dựa trên cấu trúc thực tế.</p>
                </div>
                <div className='freetest-card-section'>
                    <div className='freetest-card'>
                        <div className='freetest-card-img'>
                            <Image src={require('../../assets/freetest-img.png')}/>
                        </div>
                        <div className='freetest-card-content'>
                            <div className='freetest-card-about'>
                            <h5>Khám phá bài kiểm tra Tiếng Anh miễn phí</h5>
                            <p>Giúp bạn chuẩn bị tốt hơn cho những kỳ thi lấy chứng chỉ tiếng Anh quan trọng với các phiên bản rút gọn dựa trên cấu trúc thực tế.</p>
                            </div>
                            <div className='freetest-card-button'>
                            <Button  type="submit" className='test-check-button'>
                            <Link to ="/Freequiz">Kiểm tra</Link>
                            </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
            </div>
        )
    }
}