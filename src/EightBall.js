import React, { useState } from 'react';

const EightBall = ({ answers }) => {
    const [state, setState] = useState({ msg: "Think of a Question", color: "black" });
    const ballStyle = {
        backgroundColor: state.color,
        color: "white",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        margin: "0 auto",
        fontSize: "1.5rem",
    };

    const handleClick = () => {
        let ansIdx = Math.floor(Math.random() * answers.length);
        let ans = answers[ansIdx]
        setState({ msg: ans.msg, color: ans.color })
    }
    return (
        <div className='EightBall'
            style={ballStyle}
            onClick={handleClick}>
            {state.msg}
        </div>
    )
}

export default EightBall