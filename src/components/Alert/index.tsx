import React, { ReactNode, useState } from 'react'
import classNames from 'classnames'

export enum AlertType {
    Success = 'success',
    Info = 'info',
    Danger = 'danger',
    Warning = 'warning'
}

interface BaseAlertProps {
    className?: string;
    type?: AlertType;
    showClosed?: boolean;
    title: ReactNode;
    message?: ReactNode;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const {
        type,
        className,
        showClosed,
        title,
        message
    } = props

    const [hidden, setHidden] = useState(false) // true 隐藏，false 显示

    // 有按钮时的组件样式
    const classes = classNames('ale', className, {
        [`ale-${type}`]: type,
        'showClosed': true
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
    const messageClass = classNames('ale-message', className)


    // 处理关闭事件
    const close = () => {
        setHidden(true)
    }

    if (!hidden) {
        if (!showClosed) {
            return (
                <div className={classes}>
                    <div>
                        <span className={textClass}>{title}</span>
                        <span className={closeBtnClass} onClick={close}>关闭</span>
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

export default Alert