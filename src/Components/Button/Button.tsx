import React from 'react';

type ButtonPropsType = {
    title: string
    disabled: boolean
    onClick: () => void
}

function Button (props: ButtonPropsType) {

    const {title, disabled, onClick} = props;

    return (

            <div>
                <button disabled={disabled} onClick={onClick}>{title}</button>
            </div>

    );
}

export default Button;
