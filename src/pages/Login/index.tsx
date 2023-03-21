import { Wrapper } from "../../components/Wrapper/style";

import logo from '../../assets/logo.svg'
import { LoginContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/axios";
import axios from "axios";
import { useState } from "react";
import { Button } from "../../components/Form/style";

const validationConfig = zod.object({
  username: zod.string().min(1),
  password: zod.string().min(8)
})

type schema = zod.infer<typeof validationConfig>

export function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const {register, handleSubmit} = useForm<schema>({
    resolver: zodResolver(validationConfig)
  });

  async function handleLogin(data: schema) {
    try {
      const response = await api.post('/login', data)
      const token = response.data.accessToken
      localStorage.setItem('@ede-casa/token', token)
      navigate('/shopping')
    } catch(err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError('Usuário ou senha incorretos')
        }
      } else {
        throw err;
      }
    } 
  }

  return (
    <Wrapper >
      <LoginContainer >
        <img src={logo} alt="logotipo" />

        <form onSubmit={handleSubmit(handleLogin)}>
          <input {...register('username')} type="text" placeholder="Usuário" />
          <input {...register('password')} type="password" placeholder="Senha" />
          <p style={error ? {} : {visibility: "hidden"}}>{error}</p>
          <Button variant="green" type="submit">Entrar</Button>
          <Link to="/registration"><Button variant="orange" type="submit">Registrar</Button></Link>
        </form>
      </LoginContainer>


    </Wrapper>
  )

}