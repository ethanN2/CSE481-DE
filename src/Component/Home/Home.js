import React, {Component} from 'react';
import {Button,Image } from 'react-bootstrap';
import peopleCircleOutline from '@iconify/icons-ion/people-circle-outline';
import Navi from '../Navi/Navi';
import Footer from '../Navi/Footer';
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            speed: 1
        }
    }
    render() {
        return (
            <div className='container-fluid'>
            <Navi />
                <div className='header'>
                    <div className='slide'>
                        <div className='home-pic'>
                            <Image src= {require('../../assets/home-pic1.png')} />
                        </div>
                        <div className='about'>
                            <div className='intro'>
                                <div className='intro-header'>
                                    <h1><b>Kiểm tra trình độ tiếng anh ngay hôm nay</b></h1>
                                </div>
                                <div className='intro-text'>
                                    <p>Làm bài thi trực tuyến tại bất kì đâu, bất kì lúc nào</p>
                                    <p>Hoàn thành trong thời gian ngắn, nhận kết quả tức thì</p>
                                    <p>Kết quả chính xác</p>
                                </div>
                            </div>
                            <div className='button'>
                                <Button  type="submit" className='home-check-button'>
                                LÀM BÀI TEST
                                </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div className='body'>
                    <div className='body-header'>
                        <h1>Ngân hàng đề thi itels đa dạng và phong phú</h1>
                    </div>
                    <div className='body-card'>
                        <div className='card-content'>
                            <Icon className='card-icon' icon={peopleCircleOutline} color="#F99846"  height="80" width="80" />
                            <h4>Đội ngũ nhiều kinh nghiệm</h4>
                            <p>Gồm nhiều giáo viên với nhiều năm kinh nghiệm, ngoài ra còn là người bản địa đươc cấp đủ các chứng chỉ đối với việc dạy học.</p>
                        </div>
                        <div className='card-content'>
                            <Image className='card-icon' src= {require('../../assets/card-icon2.png')} height="80"/>
                            <h4>Bài thi phù hợp</h4>
                            <p>Tập hợp nhiều đề ôn tập và đề kiểm tra với chất lượng phân cấp rõ ràng.</p>
                        </div>
                        <div className='card-content'>
                            <Image className='card-icon' src= {require('../../assets/card-icon3.png')} height="80"/>
                            <h4>Chất lượng</h4>
                            <p>Đảm bảo nâng cao các kĩ năng nghe, đọc, viết trong tiếng Anh. Đảm bảo đầu ra theo từng chương trình học.</p>
                        </div>
                    </div>
                    <div className='body-button'>
                        <Button  type="submit" className='home-check-button'>
                            OUR EXAMS
                        </Button>
                    </div>
                    <hr></hr>
                </div>
                <Footer />
            </div>
        );
    }
}