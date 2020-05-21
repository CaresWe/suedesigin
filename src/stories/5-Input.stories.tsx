import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react'
import Input from '../components/Input'
import { withInfo } from '@storybook/addon-info'


const InputComponent = () =>
    <>
        <Input
            style={{ width: '300px' }}
            placeholder="默认"

        />
        <Input
            style={{ width: '300px' }}
            placeholder="input with icon"
            icon="search"
        />
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

storiesOf('输入框组件', module)
    .addParameters({
        info: {
            text: `
        页面中最常用的的输入元素，通过鼠标或键盘输入内容
        ### 引用方法
        ~~~js
        import { Input } from 'suedesign'
        ~~~
      `,
            inline: true,
            header: false
        }
    })
    .addDecorator(withInfo)
    .addDecorator(storyWrapper)
    .add('Input', InputComponent)
