import "./Title.css"

const Title = (props) => {
    const title = props.title
    return <h1 className="title">{title}</h1>;
};

export default Title
