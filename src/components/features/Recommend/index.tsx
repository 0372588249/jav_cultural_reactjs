import { Button, Input, message, Table } from 'antd'
// import Layout, { Content, Footer, Header, Sider } from 'antd/lib/layout/layout'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Form } from 'antd'
import './Recommend.css'
import { ApiDataSet, ApiAnalysis, ApiSearchActress } from './RecommendApi'
import TableRecommend from './RecommendContainer/TableRecommend'
import R from '../../../assets'
import TableTop from './RecommendContainer/TableTop'

const Container = styled.div`
  width: 100%;
`
const Search = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`
const initialValues = {
  height: 0,
  bust: 0,
  waist: 0,
  hips: 0,
}

const topValues = {
  top_highest_age: Array,
  top_highest_bust: Array,
  top_highest_hips: Array,
  top_highest_height: Array,
  top_lowest_age: Array,
  top_lowest_bust: Array,
  top_lowest_hips: Array,
  top_lowest_height: Array,
}

const topCountValues = {
  top_highest_age_count: Array,
  top_highest_bust_count: Array,
  top_highest_hips_count: Array,
  top_highest_height_count: Array,
  top_lowest_age_count: Array,
  top_lowest_bust_count: Array,
  top_lowest_hips_count: Array,
  top_lowest_height_count: Array,
}

export default function Recommend() {
  const [search, setSearch] = useState('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [apiData, setApiData] = useState<Array<any>>([])
  const [expandedRowKeys, setExpandedRowKeys] = useState<any>([])
  const [form] = Form.useForm()
  const [apiDataTop, setApiDataTop] = useState<any>(topValues)
  const [apiCountDataTop, setCountApiDataTop] = useState<any>(topCountValues)

  useEffect(() => {
    getDataAnalysis()
  }, [])

  const getDataRecommend = async (
    height: number,
    bust: number,
    waist: number,
    hips: number
  ) => {
    setLoading(true)
    try {
      if (
        (height !== 0 || bust !== 0 || waist !== 0 || hips !== 0) &&
        (!isNaN(height) || !isNaN(bust) || !isNaN(waist) || !isNaN(hips))
      ) {
        const api_res: any = await ApiDataSet({ height, bust, waist, hips })
        console.log('api_res', api_res)
        const data_filter = api_res.data.map((item: any, index: number) => {
          return {
            ...item,
            id: index,
            key: index,
          }
        })
        console.log('data_filter', data_filter)
        setApiData(data_filter)
      } else {
        message.error(R.strings().err_data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getDataBySearch = async () => {
    setLoading(true)
    try {
      if (search && search !== '') {
        const api_res: any = await ApiSearchActress(search)
        console.log('api_res', api_res)
        // const data_object = JSON.parse(api_res)
        // console.log('api_res.', data_object)
        const data_merge = [
          ...api_res.data.en_search_res,
          ...api_res.data.jp_search_res,
          ...api_res.data.search_res,
        ]
        console.log('data_merge', data_merge)
        setApiData(data_merge)
        setSearch('')
      } else {
        message.error(R.strings().err_data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getDataAnalysis = async () => {
    try {
      const api_res: any = await ApiAnalysis()
      setApiDataTop(api_res.data)
      var top_highest_height_count: any = []
      var top_highest_bust_count: any = []
      var top_highest_age_count: any = []
      var top_highest_hips_count: any = []
      var top_lowest_height_count: any = []
      var top_lowest_bust_count: any = []
      var top_lowest_age_count: any = []
      var top_lowest_hips_count: any = []
      api_res.data.top_highest_height.map((item: any)=>{
        top_highest_height_count.push(item.height)
      })
      api_res.data.top_highest_bust.map((item: any)=>{
        top_highest_bust_count.push(item.bust)
      })
      api_res.data.top_highest_age.map((item: any)=>{
        top_highest_age_count.push(item.age)
      })
      api_res.data.top_highest_hips.map((item: any)=>{
        top_highest_hips_count.push(item.hips)
      })
      api_res.data.top_lowest_height.map((item: any)=>{
        top_lowest_height_count.push(item.height)
      })
      api_res.data.top_lowest_bust.map((item: any)=>{
        top_lowest_bust_count.push(item.bust)
      })
      api_res.data.top_lowest_age.map((item: any)=>{
        top_lowest_age_count.push(item.age)
      })
      api_res.data.top_lowest_hips.map((item: any)=>{
        top_lowest_hips_count.push(item.hips)
      })
      var topCountValues1 = {
        top_highest_age_count: top_highest_age_count,
        top_highest_bust_count: top_highest_bust_count,
        top_highest_hips_count: top_highest_hips_count,
        top_highest_height_count: top_highest_height_count,
        top_lowest_age_count: top_lowest_age_count,
        top_lowest_bust_count: top_lowest_bust_count,
        top_lowest_hips_count: top_lowest_hips_count,
        top_lowest_height_count: top_lowest_height_count,
      }
      setCountApiDataTop(topCountValues1)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const onFinish = async (values: any) => {
    getDataRecommend(
      Number(values?.height),
      Number(values?.bust),
      Number(values?.waist),
      Number(values?.hips)
    )
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      render: (text: any, record: any, index: any) => (
        <td style={{ textAlign: 'center', display: 'block' }} id={record.id}>
          {index + 1}
        </td>
      ),
    },
    {
      title: R.strings().name,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: R.strings().birthday,
      dataIndex: 'birthday',
      key: 'birthday',
    },
    {
      title: R.strings().bust,
      dataIndex: 'bust',
      key: 'bust',
      render: (text: string) => <span>{text + ' cm'}</span>,
    },
    {
      title: R.strings().height,
      dataIndex: 'height',
      key: 'height',
      render: (text: string) => <span>{text + ' cm'}</span>,
    },
    {
      title: R.strings().waist,
      dataIndex: 'waist',
      key: 'waist',
      render: (text: string) => <span>{text + ' cm'}</span>,
    },
    {
      title: R.strings().hip,
      dataIndex: 'hips',
      key: 'hips',
      render: (text: string) => <span>{text + ' cm'}</span>,
    },
  ]
  const renderFilter = () => {
    return (
      <Col
        xs={24} sm={24} md={8} lg={8} xl={6} 
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'flex-end',
          paddingRight: 10,
        }}
      ><Row>
        <Col xs={1} sm={1} md={4} lg={4} xl={4}>
          </Col>
          <Col xs={23} sm={23} md={20} lg={20} xl={20}>
          <div
          style={{
            // width: '80%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: 'white',
            borderRadius: 7,
          }}
        >
          <div
            style={{
              width: '80%',
              marginTop: 5,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: 24,
                textAlign: 'center',
                paddingBottom: 10,
              }}
            >
              {R.strings().header_recommend}
            </div>
            <Form

              form={form}
              name="create"
              onFinish={onFinish}
              initialValues={initialValues}
            >
              <Form.Item
                name="height"
                label={R.strings().height}
                style={{ lineHeight: 3 }}
                rules={[
                  {
                    message: R.strings().err_input,
                    validator: (_, value) => {
                      const reg = /^\d{1,3}$/
                      if (value === null || value === '' || reg.test(value)) {
                        return Promise.resolve()
                      }
                      return Promise.reject()
                    },
                  },
                ]}
              >
                <Input
                  placeholder={R.strings().height}
                  // style={{ width: 218 }}
                  min={0}
                  max={250}
                />
              </Form.Item>

              <Form.Item
                name="bust"
                label={R.strings().bust}
                style={{ lineHeight: 3 }}
                rules={[
                  {
                    message: R.strings().err_input,
                    validator: (_, value) => {
                      const reg = /^\d{1,3}$/
                      if (value === null || value === '' || reg.test(value)) {
                        return Promise.resolve()
                      }
                      return Promise.reject()
                    },
                  },
                ]}
              >
                <Input
                  placeholder={R.strings().bust}
                  // style={{ width: 218 }}
                  min={0}
                  max={250}
                />
              </Form.Item>
              <Form.Item
                name="waist"
                label={R.strings().waist}
                style={{ lineHeight: 3 }}
                rules={[
                  {
                    message: R.strings().err_input,
                    validator: (_, value) => {
                      const reg = /^\d{1,3}$/
                      if (value === null || value === '' || reg.test(value)) {
                        return Promise.resolve()
                      }
                      return Promise.reject()
                    },
                  },
                ]}
              >
                <Input
                  placeholder={R.strings().waist}
                  // style={{ width: 218 }}
                  min={0}
                  max={250}
                />
              </Form.Item>
              <Form.Item
                name="hips"
                label={R.strings().hip}
                style={{ lineHeight: 3 }}
                rules={[
                  {
                    message: R.strings().err_input,
                    validator: (_, value) => {
                      const reg = /^\d{1,3}$/
                      if (value === null || value === '' || reg.test(value)) {
                        return Promise.resolve()
                      }
                      return Promise.reject()
                    },
                  },
                ]}
              >
                <Input
                  placeholder={R.strings().hip}
                  min={0}
                  max={250}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  loading={isLoading}
                  type="primary"
                  htmlType="submit"
                  style={{ width: 120, display:"flex",justifyContent:'center'}}
                >
                  {R.strings().search}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
          </Col>
      </Row>
        
      </Col>
    )
  }

  const renderTableData = () => {
    return (
      <Col xs={24} sm={24} md={16} lg={16} xl={18}>
        {/* <div
          style={{
            width: '98%',
            height: 50,
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: 'white',
            borderRadius: 7,
          }}
        >
          <div style={{ marginTop: 5, marginBottom: 10, marginRight: 20 }}>
            <Input
              placeholder="Search..."
              style={{ width: 200 }}
              onChange={e => {
                setSearch(e.target.value)
              }}
            />
            <Button
              type="primary"
              onClick={() => getDataBySearch()}
              style={{ width: 100, marginLeft: 20 }}
            >
              {R.strings().search}
            </Button>
          </div>
        </div> */}

        <div
          style={{
            width: '98%',
            alignItems: 'center',
            marginTop: 10,
            top: 10,
            backgroundColor: 'white',
            borderRadius: 7,
          }}
        >
          <div
            style={{
              width: '99%',
              alignItems: 'center',
              top: 10,
              paddingLeft: '1%',
              paddingTop: '1%',
            }}
          >
            <Table
              scroll={{ x: 700, scrollToFirstRowOnChange: true }}
              size="small"
              style={{ minHeight: 500 }}
              expandedRowKeys={expandedRowKeys}
              onExpand={(expanded, record) => {
                let keys: any = []
                if (expanded) {
                  keys.push(record.id)
                }
                setExpandedRowKeys(keys)
                console.log('k', keys)
              }}
              bordered
              dataSource={apiData}
              loading={isLoading}
              columns={columns}
              expandable={{
                expandedRowRender: (record: any) => (
                  <TableRecommend record={record} />
                ),
                rowExpandable: record => true,
              }}
              pagination={false}
            />
          </div>
        </div>
      </Col>
    )
  }
  console.log('apiCountDataTop', apiCountDataTop)
  return (
    <Container>
      <Row>
        {renderFilter()}
        {renderTableData()}       
      </Row>
      {
      apiDataTop? <Row><Col
      xs={24} sm={24} md={6} lg={6} xl={6} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingRight: 10,
      }}
    ></Col>
    <Col xs={24} sm={24} md={18} lg={18} xl={18} >
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} >
          <TableTop data={apiDataTop.top_highest_height} header={R.strings().top_tallest} count={apiCountDataTop.top_highest_height_count} param="cm"/>
        </Col>
        <Col style={{ alignItems: 'flex-end', }} xs={24} sm={24} md={24} lg={12} xl={12}>
          <TableTop data={apiDataTop.top_lowest_height} header={R.strings().top_lowest_dimensions}  count={apiCountDataTop.top_lowest_height_count} param="cm"/>
        </Col>
      </Row>
    </Col>
      <Col
      xs={24} sm={24} md={6} lg={6} xl={6} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: 10,
        }}
      ></Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18} >
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} >
            <TableTop data={apiDataTop.top_lowest_age} header={R.strings().top_youngest}  count={apiCountDataTop.top_lowest_age_count} param={R.strings().age}/>
          </Col>
          <Col style={{ alignItems: 'flex-end', }} xs={24} sm={24} md={24} lg={12} xl={12}>
            <TableTop data={apiDataTop.top_highest_age} header={R.strings().top_oldest}  count={apiCountDataTop.top_highest_age_count} param={R.strings().age}/>
          </Col>
        </Row>
      </Col>
      <Col
      xs={24} sm={24} md={6} lg={6} xl={6} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: 10,
        }}
      ></Col>
      <Col xs={24} sm={24} md={18} lg={18} xl={18} >
        <Row>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} >
            <TableTop data={apiDataTop.top_lowest_hips} header={R.strings().top_smallest_hips}  count={apiCountDataTop.top_lowest_hips_count} param="cm" />
          </Col>
          <Col style={{ alignItems: 'flex-end', }} xs={24} sm={24} md={24} lg={12} xl={12}>
            <TableTop data={apiDataTop.top_highest_hips} header={R.strings().top_biggest_hips}  count={apiCountDataTop.top_highest_hips_count} param="cm" />
          </Col>
        </Row>
      </Col>
     
      <Col
      xs={24} sm={24} md={6} lg={6} xl={6} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          paddingRight: 10,
        }}
      ></Col> 
      
    <Col xs={24} sm={24} md={18} lg={18} xl={18} >
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} >
          <TableTop data={apiDataTop.top_lowest_bust} header={R.strings().top_smallest_bust}  count={apiCountDataTop.top_lowest_bust_count} param="cm"/>
        </Col>
        <Col style={{ alignItems: 'flex-end', }} xs={24} sm={24} md={24} lg={12} xl={12}>
          <TableTop data={apiDataTop.top_highest_bust} header={R.strings().top_biggest_bust}  count={apiCountDataTop.top_highest_bust_count} param="cm" />
        </Col>
      </Row>
    </Col>
    </Row>:<div></div>
      
    
      }
    </Container>
  )
}
