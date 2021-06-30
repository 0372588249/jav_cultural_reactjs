import React, { useState } from 'react'
import { Card, Col, Descriptions, Image, Row } from 'antd'
import styled from 'styled-components'
import R from 'assets'

const ImgStyled = styled.img`
  width: 30px;
  height: 30px;
`
export default function TableRecommend(props: any) {
  const {
    id,
    name,
    name_english,
    birthday,
    birthplace,
    bust,
    cluster,
    cup_size,
    height,
    hobby,
    imgurl,
    waist,
    hips,
  } = props?.record
  
  return (
    <Card style={{ width: '100%', backgroundColor: '#f6f9ff' }}>
      <Row>
        <Col span={16}>
          <Descriptions size="default" column={2} bordered>
            {/* <Descriptions.Item label={R.strings().name}>
              {name_english || '--'}
            </Descriptions.Item> */}
            <Descriptions.Item label={R.strings()._name}>
              {name || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().birthday}>
              {birthday || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().birthplace}>
              {birthplace || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().height}>
              {height + ' cm'  || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().cup_size}>
              {cup_size + ' size'  || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().bust}>
              {bust + ' cm'  || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().hobby}>
              {hobby  || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().hip}>
              {hips + ' cm'  || '--'}
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().cluster}>
              <div style={{ color: '#72bcd4', fontSize: 'large' }}>
                {cluster >= 0 ?  cluster:'--'}
              </div>
            </Descriptions.Item>
            <Descriptions.Item label={R.strings().waist}>
              {waist + ' cm'}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={8}>
          <div style={{ textAlign: 'center',fontSize:'x-large',fontStyle:'italic',color:'gray' }}>{R.strings().imgurl}</div>
          <Image width={'87%'} src={imgurl} />
        </Col>
      </Row>
    </Card>
  )
}
