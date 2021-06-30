import React, { useState } from 'react'
import { Menu, Select } from 'antd'
import RouterPath from '../../utils/RouterPath'
import history from '../../utils/history'
import R from '../../assets'
import styled from 'styled-components'
import i18n from '../../utils/translation'

const ImgStyled = styled.img`
  width: 30px;
  height: 30px;
`
const { Option } = Select
export default function Header() {
  const [path, setPath] = useState(window.location.pathname)
  history.listen((location: any, action: any) => {
    setPath(location?.pathname)
  })
  const handleClick = (e: any) => {
    history.push(e.key)
  }
  return (
    <Menu
      triggerSubMenuAction="click"
      onClick={handleClick}
      style={{ width: '100%', height: 70 }}
      mode="horizontal"
      selectedKeys={[path]}
    >
      <Menu.Item
        key={RouterPath.HOME}
        icon={<ImgStyled src={R.images.theory} />}
        children={R.strings().header_theory}
      />
      <Menu.Item
        key={RouterPath.ANALYSIS}
        icon={<ImgStyled src={R.images.analysis} />}
        children={R.strings().header_analysis}
      />
      <Menu.Item
        key={RouterPath.RECOMMENT}
        icon={<ImgStyled src={R.images.bra} />}
        children={R.strings().header_recommend}
      />
      <div style={{ float: 'right', marginRight: '3%' }}>
        <Select
          defaultValue="Vietnamese"
          style={{ width: 120 }}
          onChange={value => {
            i18n.changeLanguage(value)
          }}
        >
          <Option value="en">English</Option>
          <Option value="vi">Vietnamese</Option>
        </Select>
      </div>
    </Menu>
  )
}
