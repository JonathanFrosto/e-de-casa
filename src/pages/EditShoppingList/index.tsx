import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLineLeft } from "phosphor-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { Button, ErrorLabel, Input } from "../../components/Form/style"
import { Header } from "../../components/Header/style"
import { Wrapper } from "../../components/Wrapper/style"
import { EditShoppingListContainer, Form } from "./style"
import * as zod from 'zod'
import { api } from "../../services/axios"
import { getToken, validateAuthenticated } from "../../services/auth"

const validationConfigContributor = zod.object({
  username: zod.string()
})

type schemaContributor = zod.infer<typeof validationConfigContributor>

const validationConfigTitle = zod.object({
  title: zod.string()
})

type schemaTitle = zod.infer<typeof validationConfigTitle>

export const EditShoppingList = () => {
  const navigate = useNavigate()
  const {shoppingListId} = useParams();
  const [errorContributor, setErrorContributor] = useState('')
  const [errorTitle, setErrorTitle] = useState('')

  const contributorForm = useForm<schemaContributor>({
    resolver: zodResolver(validationConfigContributor)
  })

  const titleForm = useForm<schemaTitle>({
    resolver: zodResolver(validationConfigTitle)
  })

  const handleAddContributor = async (data : schemaContributor) => {
    try {
      const response = await api.post('/shoppinglists/' + shoppingListId + '/contributors', data, {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      })

      contributorForm.reset()
    } catch(err) {
        validateAuthenticated(err, navigate)
    }
  }

  const handleChangeTitle = async (data: schemaTitle) => {
    try {
      const response = await api.patch('/shoppinglists/' + shoppingListId, data, {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      })

      titleForm.reset()
    } catch(err) {
        validateAuthenticated(err, navigate)
    }
  }


  return (
    <Wrapper>
      <Header >
        <h1>Editar lista</h1>
        <nav>
          <a onClick={() => navigate(-1)}><ArrowLineLeft size={44} weight="bold" /></a>
        </nav>
      </Header>

    <EditShoppingListContainer>
      <Form onSubmit={contributorForm.handleSubmit(handleAddContributor)}>
        <Input {...contributorForm.register('username')} type="texto" placeholder="Contribuidor" />
        <ErrorLabel visible={!!errorContributor} >{errorContributor}</ErrorLabel>
        
        <Button variant="orange">Adicionar</Button>
      </Form>

      <Form onSubmit={titleForm.handleSubmit(handleChangeTitle)}>
        <Input {...titleForm.register("title")} type="texto" placeholder="Titulo" />
        <ErrorLabel visible={!!errorTitle} >{errorTitle}</ErrorLabel>

        <Button variant="orange">Alterar</Button>
      </Form>
    </EditShoppingListContainer>

    </Wrapper>
  )
}