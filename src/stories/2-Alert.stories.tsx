import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react'
import Alert from '../components/Alert'
import { withInfo } from '@storybook/addon-info'


const AlertComponent = () =>
  <>
    <Alert type="info" title="Info Text" message="Info Description Info Description Info Description Info Description" />
    <Alert type="success" title="Success Text" message="Success Description Success Description Success Description " />
    <Alert type="danger" title="Danger Text" message="Danger Text Danger Text Danger Text Danger Text" />
    <Alert type="warning" title="Warning Text" message="Warning Text Warning Text Warning Text Warning Text" />
    <Alert closed={true} type="warning" title="Warning Text" />
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

storiesOf('警告提示组件', module)
  .addParameters({
    info: {
      text: `
        页面中最常用的的按钮元素，适合于完成特定的交互
        ### 引用方法
        ~~~js
        import { Alert } from 'suedesign'
        ~~~
      `,
      inline: true,
      header: false
    }
  })
  .addDecorator(withInfo)
  .addDecorator(storyWrapper)
  .add('Alert', AlertComponent)
