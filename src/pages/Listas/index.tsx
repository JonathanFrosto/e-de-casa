import { useEffect, useState } from "react";
import { List } from "../../components/List/style";
import { Wrapper } from "../../components/Wrapper/style";
import { api } from "../../services/axios";
import { ListItem, ShoppingListsWrapper } from "./style";
import { getToken, getTokenClaims, validateAuthenticated } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { GearSix, Trash } from "phosphor-react";
import { Button, Form, Input } from "../../components/Form/style";
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { dateFormatter } from "../../util/Formatter";
import { Header } from "../../components/Header/style";

interface ShoppingList {
  id: string
  title: string
  createdAt: string
}

const validationConfiguration = zod.object({
  title: zod.string()
})

type schema = zod.infer<typeof validationConfiguration>

export function ListaPage() {
  const navigate = useNavigate()
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([])
  const { register, reset, handleSubmit } = useForm<schema>()

  const getShoppingLists = async () => {
    try {
      const response = await api.get("/shoppinglists", {
        headers: {
          Authorization: 'Bearer ' + getToken(),
          userId: getTokenClaims().sub
        }
      })

      setShoppingLists(response.data)
    } catch (err) {
      validateAuthenticated(err, navigate)
    }
  }

  useEffect(() => {
    getShoppingLists()
  }, [])

  const handleCreateShoppingList = async (data: schema) => {
    try {
      const response = await api.post('/shoppinglists', { ...data, ownerId: getTokenClaims().sub }, {
        headers: {
          Authorization: 'Bearer ' + getToken(),
        }
      })

      setShoppingLists((state) => [
        {
          ...response.data,
          items: []
        },
        ...state,
      ])

      reset()
    } catch (err) {
      validateAuthenticated(err, navigate)
    }
  }

  async function handleDeleteList(id: string) {
    try {
      await api.delete('/shoppinglists/' + id, { headers: { Authorization: 'Bearer ' + getToken() } })
      const filteredShoppingLists = shoppingLists.filter(shoppingList => shoppingList.id !== id)

      setShoppingLists(filteredShoppingLists)
    } catch (err) {
      validateAuthenticated(err, navigate)
    }
  }

  return (
    <Wrapper >
      <Header>
        <h1>Listas de compras</h1>
      </Header>

      <ShoppingListsWrapper >
        <List>
          {shoppingLists.map(shoppingList => {
            return (
              <ListItem key={shoppingList.id}>
                <button onClick={() => navigate('/shopping/' + shoppingList.id)}>
                  <span>{shoppingList.title}</span>
                </button>

                <div>
                  <span>{dateFormatter.format(new Date(shoppingList.createdAt))}</span>
                  <button onClick={() => navigate(shoppingList.id + '/edit')}><GearSix size={24} weight="duotone" /></button>
                  <button onClick={() => handleDeleteList(shoppingList.id)}><Trash size={24} weight="fill" /></button>
                </div>
              </ListItem>
            )
          })}
        </List>

        <Form onSubmit={handleSubmit(handleCreateShoppingList)}>
          <Input {...register('title')} type="text" placeholder="Titulo da lista" />
          <Button variant="orange" type="submit">Adicionar</Button>
        </Form>
      </ShoppingListsWrapper>
    </Wrapper>
  )
}