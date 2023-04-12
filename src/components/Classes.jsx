import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import classess from '../assets/img/png/classtype.png'
export const Classes = () => {
    return (
        <Container>
            <Row className='py-5'>
                <Col xs={12} xl={6} className=' d-flex flex-column pb-5 pb-xl-0 justify-content-center align-items-center align-items-xl-start text-center text-xl-start'>
                    <p className='mb-0 ff_Medium grey fs_3xl lh_140p mx_300_xl'>All classes of
                        annotab</p>
                    <p className='ff_book pt-3 ff_sm grey mx_470_xl'>Scelerisque integer egestas nunc egestas. Vestibulum nunc blandit ultrices sit sagittis rutrum sed felis in ullamcorper adipiscing.</p>
                    <a className='learn_btn bg_sky ff_Bold darkblue fs_md mt-3 d-inline-block' href="#">Learn More</a>
                </Col>
                <Col xs={12} xl={6} className='d-flex justify-content-center'><img className='w-100' src={classess} alt="" /></Col>
            </Row>
        </Container>
    )
}