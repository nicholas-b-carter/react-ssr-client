import React from 'react';
import {Row, Col, Divider} from 'antd';
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  background-color: black;
  font-family: Helvetica;
  font-size: 14;
  color: white;
`;

const FooterSection = styled.div`
  text-align: center;
`;

const PageFooter = () => {
  return (
    <FooterContainer>
        <Row>
          <Col span={12}>
            <FooterSection>
              <h2>Contact Info:</h2>
              <p>Some Business</p>
              <p>123 Fake Street</p>
              <p>New York, New York</p>
              <p>(555)-555-5555</p>
              <a href='mailto:admin@somebusiness.com'>
                <p>admin@somebusiness.com</p>
              </a>
            </FooterSection>
          </Col>
          <Col span={12}>
            <FooterSection >
              <h2>Hours:</h2>
              <p>Mon - Fri: 9:00 - 5:00</p>
              <p>Saturday: 9:00 - 5:00</p>
              <p>Sunday: 9:00 - 5:00</p>
            </FooterSection>
          </Col>
        </Row>
    </FooterContainer>
  )
}

export default PageFooter
