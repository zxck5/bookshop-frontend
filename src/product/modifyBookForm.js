import {useState,useEffect} from 'react';
import {Form} from "react-bootstrap";
import {useNavigate,useLocation} from "react-router-dom";
import axios from "axios";
import BookForm from "./bookForm";



export default function (props) {
    const navigate = useNavigate();
    const location = useLocation();

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

        let {item} = location.state;
        console.log(item)

        axios.post("/items/" + item.id + "/edit",formData)
            .then(res => {
                console.log(res);
                if (res.data == true) {
                    alert("book modified");
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
        <BookForm submitForm={submitForm} setInput={setInput}/>
    )
}

