import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'
import { withInfo } from '@storybook/addon-info'

const ButtonComponent = () =>
  <>
    <Button>default</Button>
    <Button size="lg">large</Button>
    <Button size="sm">small</Button>
    <Button btnType="primary">primary</Button>
    <Button btnType="danger">danger</Button>
    <Button btnType="link">link</Button>
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

storiesOf('按钮组件', module)
  .addParameters({
    info: {
      text: `
        页面中最常用的的按钮元素，适合于完成特定的交互
        组件类型分为
        - 默认按钮
        - 链接按钮（Link）
        - 主按钮（Primary）
        - 危险按钮（Danger）
        - 以及两种大小 sm 和 lg

      #### 引用方法
        ~~~js
        import { Button } from 'suedesign'
        ~~~
      `,
      inline: true,
      header: false
    }
  })
  .addDecorator(withInfo)
  .addDecorator(storyWrapper)
  .add('Button', ButtonComponent)
