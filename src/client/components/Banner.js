import React from 'react';
import { Icon } from 'antd'
import styled from 'styled-components'

const HeaderBackground = styled.div`
  height: 30vw;
  background: url('../assets/header-bkg.jpg') no-repeat center center;
  background-size: 100% 100%;
`;

const HeaderBadge = styled.div`
  position: absolute;
  top: 22vw;
  left: 75vw;
  display: flex;
  float: right;
`;

const HeaderBadgeItem = styled.div`
  margin: 1em;
  float: right;
`;

const BannerIcon = styled(Icon)`
  font-size: 4vw;
`;


const Banner = () => {
  return (
    <HeaderBackground>
      <HeaderBadge>
        <HeaderBadgeItem>
          <a href=''>
            <BannerIcon type='facebook' style={{ color: 'teal' }} />
          </a>
        </HeaderBadgeItem>
        <HeaderBadgeItem>
          <a href=''>
            <BannerIcon type='twitter' style={{ color: 'olive' }} />
          </a>
        </HeaderBadgeItem>
        <HeaderBadgeItem>
          <a href=''>
            <BannerIcon type='instagram' style={{ color: 'pink' }} />
          </a>
        </HeaderBadgeItem>
      </HeaderBadge>
    </HeaderBackground>
  )
}

export default Banner
