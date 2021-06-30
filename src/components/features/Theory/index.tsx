import React, { useState } from 'react'
import styled from 'styled-components'
import { Collapse } from 'antd'
import R from '../../../assets'
import './styles.css' 

const ContainerStyled = styled.div`
  width: 80%;
  display:flex;
  margin:auto;
`
const ContendStyled = styled.div`
  width: 100%;
`
const { Panel } = Collapse;

export default function Theory() {
  let arr: any = R.strings().contend14
  let list:any = arr.map((data:any) => (<li>{data}</li>))
  let arr2: any = R.strings().contend24
  let list2:any = arr2.map((data:any) => (<li>{data}</li>))
  
  return (
    <ContainerStyled>
      <ContendStyled>
      <h2 id="topic">{R.strings().topic}</h2>
        <Collapse defaultActiveKey={['1']}>
          <Panel header={R.strings().title1} key="1">
            {
              <>
                <p> {R.strings().contend11} </p>
                <p> {R.strings().contend12}</p>
                <p style={{ color:"#027AE3", fontSize:18, fontStyle:"italic"}}>{R.strings().contend13}</p>
                <ul>
                  {list}
                </ul>
                <p style={{fontWeight:"bold"}}>{R.strings().contend15}</p>
                <img src={R.images.ClusteringTechnique001} />
              </>
            }
          </Panel>
          <Panel header={R.strings().title2} key="2">
            {
              <>
              <p>{R.strings().contend21}</p>
              <p style={{fontWeight:"bold"}}>{R.strings().contend22}</p>
              <img src={R.images.ClusteringTechnique002}/>
              <p style={{fontWeight:"bold"}}>{R.strings().contend23}</p>
              <ol>
                {list2}
              </ol>
              <p style={{fontWeight:"bold"}}>{R.strings().contend25}</p>
              <p>{R.strings().contend26}</p>
              <img src={R.images.ClusteringTechnique003}/>
              <p><b>Bước 1.</b>{R.strings().contend27}</p>
              <img src={R.images.ClusteringTechnique004}/>
              <p><b>Bước 2.</b>{R.strings().contend28}</p>
              <img src={R.images.ClusteringTechnique005}/>
              <p>{R.strings().contend29}</p>
              <p>{R.strings().contend210}</p>
              <img src={R.images.ClusteringTechnique006}/>
              <img src={R.images.ClusteringTechnique007}/>
              <p><b>Bước 3.</b>{R.strings().contend211} </p>
              <img src={R.images.ClusteringTechnique008}/>
              <p>{R.strings().contend212}</p>
              <p><b>Bước 5.</b>{R.strings().contend213}</p>
              <img src={R.images.ClusteringTechnique009}/>
              <img src={R.images.ClusteringTechnique010}/>
              <p><b>Bước 6.</b>{R.strings().contend214}</p>
              <img src={R.images.ClusteringTechnique011}/>
              <p><b>Bước 7.</b>{R.strings().contend215}</p>
              <img src={R.images.ClusteringTechnique012}/>
              <p><b>Bước 8a.</b>{R.strings().contend216}</p>
              <img src={R.images.ClusteringTechnique014}/>
              <img src={R.images.ClusteringTechnique015}/>
              <p><b>Bước 8b.</b>{R.strings().contend217}</p>
              <img src={R.images.ClusteringTechnique016}/>
              <p><b>Bước 9.</b>{R.strings().contend218}</p>
              <img src={R.images.ClusteringTechnique017}/>
              <p>{R.strings().contend219}</p>
              <img src={R.images.ClusteringTechnique018} />
              <p>{R.strings().contend220}</p>
              </>
            }
          </Panel>
        </Collapse>
      </ContendStyled>
      </ContainerStyled>
  );
}
