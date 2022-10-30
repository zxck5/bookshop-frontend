import {useState,useEffect} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BookForm from "./bookForm";



export default function () {
    const navigate = useNavigate();

    const [state, setState] = useState({
        name : "",
        price : "",
        stockQuantity : "",
        author: "",
        isbn : ""
    });


    const submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(state).map(key => {
            formData.append(key, state[key]);
        })
        axios.post("/items/new",formData)
            .then(res => {
                console.log(res);
                if (res.data == true) {
                    alert("book created");
                    navigate("/");
                } else alert(res.data);
            }).catch(err => {
            alert(err);
        })

    }

    const setInput = (event) => {
        let id = event.target.id;
        let value = event.target.value;
        setState({...state, [id] : value })
    }


    return(
        <BookForm submitForm = {submitForm} setInput = {setInput}/>
    )
}

