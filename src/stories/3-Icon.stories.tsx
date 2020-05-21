import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react'
import Icon from '../components/Icon'
import { withInfo } from '@storybook/addon-info'


const IconComponent = () =>
  <>
    <Icon icon="cloud" theme="danger" />
    <Icon icon="cloud" theme="dark" />
    <Icon icon="cloud" theme="info" />
    <Icon icon="cloud" theme="light" />
    <Icon icon="cloud" theme="primary" />
    <Icon icon="cloud" theme="warning" />
    <Icon icon="cloud" theme="secondary" />
    <Icon icon="cloud" theme="success" />
    <Icon icon="cloud" theme="success" size="lg" />
    <Icon icon="cloud" theme="success" size="sm" />
    <Icon icon="cloud" theme="success" size="xs" />
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

storiesOf('图标组件', module)
  .addParameters({
    info: {
      text: `
      语义化的矢量图标
      [图标库](https://fontawesome.com/icons)
      + 采取第三方图标库封装（FontAwsome）
      + 继承该库所有属性，同时可以选择图标类型
        ### 引用方法
        ~~~js
        import { Icon } from 'suedesign'
        ~~~
      `,
      inline: true,
      header: false
    }
  })
  .addDecorator(withInfo)
  .addDecorator(storyWrapper)
  .add('Icon', IconComponent)
