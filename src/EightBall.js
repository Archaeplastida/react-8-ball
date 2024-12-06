import React, {useState} from 'react';

const EightBall = ({answers}) => {
    const [state, setState] = useState({msg: "Think of a Question", color: "black"});
    const ballStyle = {backgroundColor: state.color};
    const handleClick = () => {
        let ansIdx = Math.floor(Math.random() * answers.length);
        let ans = answers[ansIdx]
        setState({msg: ans.msg, color: ans.color})
    }
    return (
        <div className={ballStyle}
             onClick={handleClick}>
                {state.msg};
        </div>
    )
}

export default EightBall