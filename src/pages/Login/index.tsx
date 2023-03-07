import { Wrapper } from "../../components/Wrapper/style";

import logo from '../../assets/logo.svg'
import { LoginContainer } from "./style";

export function LoginPage() {
  return (
    <Wrapper >
      <LoginContainer >
        <img src={logo} alt="logotipo" />

        <form action="">
          <input type="text" placeholder="Usuário" />
          <input type="text" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>
      </LoginContainer>


    </Wrapper>
  )

}