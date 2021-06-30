import styled from 'styled-components'
import { Button } from 'antd'

export const AnalysisWrap = styled.div`
  width: 100%;
`

export const ContainerAnalysis = styled.div`
  width: 100%;
`

export const ImageHeader = styled.div`
  width: 100%;
  height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
export const WrapTextHeader = styled.div`
  text-align: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`

export const H1Styled = styled.h1`
  font-size: 45;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const PStyled = styled.p`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const ButtonAntdStyled = styled(Button)`
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: large;
`
export const WrapContent = styled.div`
  width: 100%;
  margin-top: 2vh;
`

export const StrongContent = styled.strong`
  font-size: xx-large;
  padding-left: 30px;
  padding-right: 30px;
`

export const SubStrongContent = styled.strong`
  font-size: x-large;
  display: block;
  padding-left: 30px;
  padding-right: 30px;
`

export const TextContent = styled.p`
  font-size: large;
  line-height: 1.3;
  padding-left: 30px;
  padding-right: 30px;
`

export const ImageContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageStyled = styled.img`
  width: 85%;
  border: solid 1px gray;
`
export const ImageDescription = styled.em`
  margin-top: 10px;
  font-size: small;
  text-align: center;
`
export const StrongStyled = styled.strong`
  font-size: x-large;
  font-style: italic;
`
