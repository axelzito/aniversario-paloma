import "./Counter.css"

const Counter = (props) => {
    const title = props.title
    const number = props.number
    return (
        <div className="counter">
            <p className="counter-number">{number}</p>
            <h3 className="counter-text">{title}</h3>
        </div>
    )
};

export default Counter
