import style from './Form.module.css';
import { useState, useEffect } from 'react';
import { validateEmail, validatePassword, validate } from '../../validation'



const Form = (props) => {

    const [userData , setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const login = props.login;

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          setUserData(userData);
          login(userData);
        }
      }, []);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        validate({...userData, [property]: value}, setErrors);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        alert('Login successful');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);

        localStorage.setItem('userData', JSON.stringify(userData));
    }

    return(
        <form onSubmit={submitHandler}>
            <img class={style.form_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMIuVt3ZY-dUICCswzU2LBhPk7KjdEhNQMw&usqp=CAU" alt="Rick and Roll" />
            <div>
                <label className={style.form_label}  htmlFor="email">Email</label>
                <input class={style.form_input} type="text" name="email" placeholder='Email...' value={userData.email} onChange={handleChange}  />
                {errors.email && <span className={style.error_message}>{errors.email}</span>}
            </div>

            <div>
                <label class={style.form_label} htmlFor="password">Password </label>
                <input class={style.form_input} type="password" name="password" placeholder='Password...' value={userData.password} onChange={handleChange}  />
                {errors.password && <span className={style.error_message}>{errors.password}</span>}
            </div>

            <button class={style.form_button} type='submit' onClick={handleSubmit}>Login</button>
        </form>)   
}

export default Form;
