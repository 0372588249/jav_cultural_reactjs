import { Col, Row } from 'antd'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  padding: 0 1rem 0 1rem;

  /* @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 370px;
  } */
`

type Props = {
  children?: any
  filterComponent?: any
  contentComponent: any
  rightComponent?: any
}

const Container = ({
  children,
  filterComponent,
  contentComponent,
  rightComponent,
}: Props) => {
  return (
    <StyledContainer style={{ paddingBottom: '10px' }}>
      <Row justify="center">
        {filterComponent && (
          <Col style={{}} lg={6} md={5} xs={0}>
            {typeof filterComponent == 'function'
              ? filterComponent!()
              : filterComponent}
          </Col>
        )}
        <Col
          style={{
            backgroundColor: 'white',
            minHeight: '100px',
          }}
          lg={18}
          md={19}
          xs={24}
        >
          {typeof contentComponent == 'function'
            ? contentComponent!()
            : contentComponent}
        </Col>

        {rightComponent && (
          <Col style={{}} lg={6} md={7} xs={0}>
            {typeof rightComponent == 'function'
              ? rightComponent!()
              : rightComponent}
          </Col>
        )}
      </Row>
    </StyledContainer>
  )
}
export default Container
