import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Menu, { MenuProps } from './index'
import MenuItem from './menuItem'

const testProps: MenuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'test'
}

const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>active</MenuItem>
            <MenuItem index={1} disabled>disabled</MenuItem>
            <MenuItem index={2}>xzy</MenuItem>
        </Menu>
    )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

describe('测试 Menu 组件和 MenuItem 组件', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('基于默认props，应该渲染正确的菜单和菜单项', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('', () => {

    })
    it('', () => {

    })
})