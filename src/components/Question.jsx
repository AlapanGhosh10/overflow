import './Question.css'

function Question(props) {
    const curdate = new Date();
    const year = curdate.getFullYear();
    const month = curdate.getMonth() + 1;
    const date = curdate.getDate();
    const datestr = date + '-' + month + '-' + year;
    return (
        <div className="question">
            <p>{props.question.votes}</p>
            <div className="question-right">
                <p><strong>{props.question.title}</strong></p>
                <hr />
                <div className="question-bottom">
                    <p>{props.question.tag}</p>
                    <p>{datestr}</p>
                </div>
            </div>
        </div>
    )
}

export default Question