import Container from 'components/Container'
import R from 'assets'
import { DownOutlined } from '@ant-design/icons'
import {
  AnalysisWrap,
  ContainerAnalysis,
  ImageHeader,
  WrapTextHeader,
  H1Styled,
  PStyled,
  WrapContent,
  ButtonAntdStyled,
  StrongContent,
  TextContent,
  SubStrongContent,
  ImageContainer,
  ImageStyled,
  ImageDescription,
  StrongStyled,
} from './Components'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Analysis() {
  const Scroll2Content = () => {
    const element: any = document.getElementById('content-analyis-tab')
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  const contentComponent = () => {
    const { analysis_tab_content_content1, input_data } = R.strings()
    const content1: any = analysis_tab_content_content1
    const input: any = input_data
    return (
      <AnalysisWrap>
        <ContainerAnalysis>
          <Slide>
            <ImageHeader
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${R.images.background_header_jav})`,
              }}
            >
              <WrapTextHeader>
                <H1Styled>{R.strings().analysis_tab_big_header}</H1Styled>
                <PStyled style={{ fontSize: 20 }}>
                  {R.strings().analysis_tab_child_header}
                </PStyled>
                <ButtonAntdStyled
                  shape="round"
                  icon={<DownOutlined />}
                  onClick={Scroll2Content}
                >
                  {R.strings().analysis_tab_txt_bnt_header}
                </ButtonAntdStyled>
              </WrapTextHeader>
            </ImageHeader>
            <ImageHeader
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${R.images.background_header_jav0})`,
              }}
            >
              <WrapTextHeader>
                <H1Styled>{R.strings().analysis_tab_big_header}</H1Styled>
                <PStyled style={{ fontSize: 20 }}>
                  {R.strings().analysis_tab_child_header}
                </PStyled>
                <ButtonAntdStyled
                  shape="round"
                  icon={<DownOutlined />}
                  onClick={Scroll2Content}
                >
                  {R.strings().analysis_tab_txt_bnt_header}
                </ButtonAntdStyled>
              </WrapTextHeader>
            </ImageHeader>
          </Slide>
          <WrapContent id="content-analyis-tab">
            <StrongContent>
              {R.strings().analysis_tab_content_header1}
            </StrongContent>
            {content1?.map((str: string) => (
              <TextContent>
                {'- '}
                {str}
              </TextContent>
            ))}

            <StrongContent>
              {R.strings().analysis_tab_content_header2}
            </StrongContent>

            <SubStrongContent>
              {R.strings().step[0]}{' '}
              {R.strings().analysis_tab_content_step_content2[0]}
            </SubStrongContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[0]}
            </TextContent>
            <ImageContainer>
              <ImageStyled src={R.images.dataset} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[0]}
              </ImageDescription>
            </ImageContainer>

            <SubStrongContent>
              {R.strings().step[1]}{' '}
              {R.strings().analysis_tab_content_step_content2[1]}
            </SubStrongContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[1]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[2]}{' '}
              {input?.map((item: string, index: number) => (
                <StrongStyled>
                  {item} {index !== input?.length - 1 ? ', ' : '.'}
                </StrongStyled>
              ))}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[3]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[4]}
            </TextContent>
            <ImageContainer>
              <ImageStyled src={R.images.clean_data_code} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[1]}
              </ImageDescription>
            </ImageContainer>
            <ImageContainer>
              <ImageStyled src={R.images.dataset_clean} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[2]}
              </ImageDescription>
            </ImageContainer>

            <SubStrongContent>
              {R.strings().step[2]}{' '}
              {R.strings().analysis_tab_content_step_content2[2]}
            </SubStrongContent>

            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[5]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[6]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[7]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.read_data_code} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[3]}
              </ImageDescription>
            </ImageContainer>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[8]}
            </TextContent>

            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[9]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[10]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.elbow_trick} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[4]}
              </ImageDescription>
            </ImageContainer>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[11]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[12]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.plt_elbow_trick} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[5]}
              </ImageDescription>
            </ImageContainer>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[13]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[14]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.try_clusters_score} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[6]}
              </ImageDescription>
            </ImageContainer>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[15]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.result_clusters_score} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[7]}
              </ImageDescription>
            </ImageContainer>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[16]}
            </TextContent>

            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[17]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.plt_kmean} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[8]}
              </ImageDescription>
            </ImageContainer>

            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[18]}
            </TextContent>

            <ImageContainer>
              <ImageStyled src={R.images.plt_kmean_clustered} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[9]}
              </ImageDescription>
            </ImageContainer>

            <SubStrongContent>
              {R.strings().step[3]}{' '}
              {R.strings().analysis_tab_content_step_content2[3]}
            </SubStrongContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[19]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[20]}
            </TextContent>
            <TextContent>
              {'- '}
              {R.strings().analysis_tab_content_content2[21]}
            </TextContent>
            <ImageContainer>
              <ImageStyled src={R.images.recommend_function} />
              <ImageDescription>
                {R.strings().analysis_tab_img_description[10]}
              </ImageDescription>
            </ImageContainer>

            <StrongContent>
              {R.strings().analysis_tab_content_header3}
            </StrongContent>
          </WrapContent>
        </ContainerAnalysis>
      </AnalysisWrap>
    )
  }
  return <Container contentComponent={contentComponent} />
}
