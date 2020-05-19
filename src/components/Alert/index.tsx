import React, { FC, ReactNode, useState } from 'react'
import classNames from 'classnames'
import Icon from '../Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


export type AlertType = 'success' | 'info' | 'danger' | 'warning'

interface BaseAlertProps {
    className?: string;
    type?: AlertType;
    closed?: boolean;
    title: ReactNode;
    message?: ReactNode;
}

const Alert: FC<BaseAlertProps> = (props) => {
    const {
        type,
        className,
        closed,
        title,
        message
    } = props

    const [hidden, setHidden] = useState(false) // true 隐藏，false 显示

    // 有按钮时的组件样式
    const classes = classNames('ale', className, {
        [`ale-${type}`]: type,
        'closed': true
    })
    // 关闭样式
    const closeClass = classNames('ale-close', className)
    // 组件标题样式
    const titleClass = classNames('ale-title', className)
    // 组件标题文字样式
    const textClass = classNames('ale-text', className)
    // 组件关闭按钮样式
    const closeBtnClass = classNames('ale-btn', className)
    // 组件内容样式


    // 处理关闭事件
    const close = () => {
        setHidden(true)
    }

    if (!hidden) {
        if (closed) {
            return (
                <div className={classes}>
                    <div>
                        <span className={textClass}>{title}</span>
                        <span className={closeBtnClass} onClick={close}><Icon theme="light" icon="closed-captioning"/></span>
                    </div>
                    <span className={textClass}>{message}</span>
                </div>
            )

        } else {
            return (
                <div className={classes}>
                    <div className={titleClass}>
                        <span className={textClass}>{title}</span>
                    </div>
                    <span className={textClass}>{message}</span>
                </div>
            )
        }

    } else {
        return (
            <div className={closeClass}></div>
        )
    }

}

export default Alert;