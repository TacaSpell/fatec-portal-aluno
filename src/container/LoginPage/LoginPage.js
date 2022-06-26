import React, { useState } from 'react';
import './LoginPage.css';
import { useForm } from 'react-hook-form';
import { logInWithEmailAndPassword, sendPasswordReset } from '../../services/api/authAction';
import SpinnerV2 from '../../component/SpinnerV2/SpinnerV2';

export default function LoginPage() {
    const { watch, register } = useForm();
    const { email, password } = watch();
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async () => {
        await sendPasswordReset(email);            
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        setIsLoading(true)
        logInWithEmailAndPassword(email, password)
            .then()
            .catch((err) => {
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false))

        return;
    }

    if (isLoading) return <SpinnerV2 darkMode />

    return (
        <div className="LoginPage__container">
            <div className="LoginPage__form">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpj6HsqspBQf07aSFmSxZ7hm4LiKKHZgmQ9HJa5fcRxWrwtCeacgj-8jWJgogii9k1HeY&usqp=CAU" alt="logo" />
                <input name="email" type="text" placeholder="E-mail" onKeyPress={handleKeyPress} {...register("email")} />
                <input name="password" type="password" placeholder="Senha" onKeyPress={handleKeyPress} {...register("password")} />

                <button onClick={handleSubmit}>Entrar</button>
                <span onClick={handleResetPassword}>Esqueceu a senha? Clique aqui</span>
            </div>
        </div>
    )
}