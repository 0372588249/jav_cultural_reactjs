import React, { useState } from 'react'
import { Card, Col, Descriptions, Divider, Image, Row, Table } from 'antd'
import styled from 'styled-components'
import './css/TableTop.css'
import R from 'assets'
import { Spin } from 'antd';

const ImgStyled = styled.img`
  width: 30px;
  height: 30px;
`  
export default function TableTop(props: any) {
  const header = props?.header
  const param =  props?.param
  const count =  props?.count
  const data = props?.data


  

  
  console.log("count",count)
  return (
      <div style={{width:"90%", backgroundColor:'white',margin:20,borderRadius:20,}}>
            <p style={{ width:"100%",textAlign:'center',fontSize:20,fontWeight:600, marginTop:10,marginBottom:5}}>{header}</p>
          <table style={{width:"94%",margin:15,}}>
            {/* <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên</th>
            </tr> */}
            <tr  style={{backgroundColor:'#f6cb57'}}>
                <td ><img src={R.iconstop.top1} width="50px" height="50px"  /></td>
                <td><img src={data[0]?.imgurl} width="50px" height="50px" /></td>
                <td>	{data[0]?.name? data[0]?.name:<Spin/>}({count[0]}{param})</td>
            </tr>
    <Divider style={{margin:2}} />
            <tr  style={{backgroundColor:'#c5c5c5'}}>
                <td><img src={R.iconstop.top2} width="50px" height="50px" /></td>
                <td><img src={data[1]?.imgurl} width="50px" height="50px" /></td>
                <td>	{data[1]?.name? data[1]?.name:<Spin/>}({count[1]}{param})</td>
            </tr>
    <Divider style={{margin:2}} />
            <tr  style={{backgroundColor:'#ae7f67'}}>
                <td><img src={R.iconstop.top3} width="50px" height="50px" /></td>
                <td><img src={data[2]?.imgurl} width="50px" height="50px" /></td>
                <td>	{data[2]?.name? data[2]?.name:<Spin/>}({count[2]}{param})</td>
            </tr>
    <Divider style={{margin:2,marginBottom:10}} />
            </table>
      </div>
  )
}
