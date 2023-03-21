import { Wrapper } from "../../components/Wrapper/style";

import logo from '../../assets/logo.svg'
import { LoginContainer } from "./style";
import { useForm } from "react-hook-form";
import { zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from "react";
import { api } from "../../services/axios";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "../../components/Form/style";

const validationConfig = zod.object({
  username: zod.string().trim(),
  password: zod.string().min(8, {message: "Senha precisa ter no mínimo 8 caracteres"}),
  passwordConfirmation: zod.string().min(8, {message: "Confirmação de senha precisa ter no mínimo 8 caracteres"}),
})
.refine((data) => data.username.length != 0, {
  path: ["user-2"],
  message: "Usuário não pode ser vazio"
})
.refine((data) => data.password === data.passwordConfirmation, {
  path: ["password-2"],
  message: "Senha e confirmação de senha precisam ser iguais"
})

type schema = zod.infer<typeof validationConfig>

export function RegistrationPage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const {register, handleSubmit, reset} = useForm<schema>({
    resolver: zodResolver(validationConfig)
  })

  async function handleCreateUser(data: schema) {
    try {
      const response = await api.post('/user', data)
      navigate("/login")
    } catch(error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          setError('Usuário já existe')
        }
      } else {
        throw error;
      }
    }
  }

  function handleErrorCreateUser(data: any) {
    setError(data[Object.keys(data)[0]].message);
    console.log(data)
  }

  return (
    <Wrapper >
      <LoginContainer >
        <img src={logo} alt="logotipo" />

        <form onSubmit={handleSubmit(handleCreateUser, handleErrorCreateUser)}>
          <input {...register('username')} type="text" placeholder="Usuário" required />
          <input {...register('password')} type="password" placeholder="Senha"  required/>
          <input {...register('passwordConfirmation')} type="password" placeholder="Confirmação de senha"  required/>
          <p style={ error ? {} : {visibility: "hidden"}}>{error}</p>

          <Button variant="orange" type="submit">Registrar</Button>
        </form>
      </LoginContainer>
    </Wrapper>
  )

}