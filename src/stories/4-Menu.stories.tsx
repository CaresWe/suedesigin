import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react'
import Menu from '../components/Menu'
import { withInfo } from '@storybook/addon-info'

const { Item, SubMenu } = Menu


const MenuComponent = () =>
    <>
        <Menu mode="vertical">
            <Item>link1</Item>
            <Item>link2</Item>
            <SubMenu title="dropdown">
                <Item>dropdown1</Item>
                <Item>dropdown2</Item>
            </SubMenu>
            <Item>link3</Item>
        </Menu>
        <Menu mode="horizontal">
            <Item>link1</Item>
            <Item>link2</Item>
            <SubMenu title="dropdown">
                <Item>dropdown1</Item>
                <Item>dropdown2</Item>
            </SubMenu>
            <Item>link3</Item>
        </Menu>
        <Menu mode="vertical" theme="dark">
            <Item>link1</Item>
            <Item>link2</Item>
            <SubMenu title="dropdown">
                <Item>dropdown1</Item>
                <Item>dropdown2</Item>
            </SubMenu>
            <Item>link3</Item>
        </Menu>
        <Menu mode="horizontal" theme="dark">
            <Item>link1</Item>
            <Item>link2</Item>
            <SubMenu title="dropdown">
                <Item>dropdown1</Item>
                <Item>dropdown2</Item>
            </SubMenu>
            <Item>link3</Item>
        </Menu>
    </>

const wrapperStyle: CSSProperties = {
    padding: '20px 40px'
}

const storyWrapper = (stroyFn: any) => (
    <div style={wrapperStyle}>
        <h3>组件演示</h3>
        {stroyFn()}
    </div>
)

storiesOf('菜单组件', module)
    .addParameters({
        info: {
            text: `
        页面中最常用的的导航菜单元素，依赖导航在各个页面中进行跳转。
        **1.类型**
          - 侧边导航
          - 顶部导航
        **2.主题**
          - 夜间模式：dark
          - 白天模式：light
        ### 引用方法
        ~~~js
        import { Menu } from 'suedesign'
        ~~~
      `,
            inline: true,
            header: false
        }
    })
    .addDecorator(withInfo)
    .addDecorator(storyWrapper)
    .add('Menu', MenuComponent)
