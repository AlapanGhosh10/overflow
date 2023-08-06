import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import './Ask.css';

function Ask() {
    let questions = [];
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title:'',
        content: '',
        tag: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        const newQuestion = {
            title: formData.title,
            content: formData.content,
            tag: formData.tag,
            votes: 0,
        }

        questions = [...questions, newQuestion];
        console.log(questions);
        navigate(-1);

    }
    return (
        <>
            <Header />
            <div id="question-form">
                <h1>Ask a Public Question</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-inp">
                        <label htmlFor="">Title</label>
                        <p> Be specific and imagine you’re asking a question to another person. </p>
                        <input id='title' type='text'
                            value={formData.title}
                            placeholder='Enter Title'
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                        ></input>
                    </div>
                    <div className="form-inp">
                        <label htmlFor="content">What are the details of your problem ?</label>
                        <p> Introduce the problem and expand on what you put in the title. </p>
                        <textarea 
                            id='content'
                            placeholder='Enter Description'
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                        >
                        </textarea>
                    </div>
                    <div className="form-inp">
                        <label htmlFor="tag"> Tag </label>
                        <p> Select tag to describe what your question is about. </p>
                        <select id="tag" 
                            value={formData.tag}
                            onChange={(e) => setFormData({...formData, tag: e.target.value})}
                        >
                            <option value="" disabled>Select Tag</option>
                            <option value="os">Operating Systems</option>
                            <option value="nw">Computer Networks</option>
                            <option value="dbms">Database Management Systems</option>
                            <option value="oop">Object Oriented Programming</option>
                            <option value="dsa">Data Structure and Algorithms</option>
                        </select>
                    </div>
                    <hr />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Ask;