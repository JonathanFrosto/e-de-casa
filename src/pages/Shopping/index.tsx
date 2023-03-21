import { ArrowLineLeft, Trash } from "phosphor-react";
import { Wrapper } from "../../components/Wrapper/style";
import { ShoppingItemsContainer, Form, ListItem, PriceContainer } from "./style";
import { List } from '../../components/List/style'
import { WeightForm } from "./components/WeightForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import { getToken, validateAuthenticated } from "../../services/auth";
import { numberFormatter } from "../../util/Formatter";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { Button, ErrorLabel, Input } from "../../components/Form/style";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Header } from "../../components/Header/style";

interface ShoppingList {
  id: string
  title: string
  items: ShoppingListItem[]
}

interface ShoppingListItem {
  id: string
  name: string
  price: number
  weight: number
}

const validationConfiguration = zod.object({
  name: zod.string(),
  weight: zod.nullable(zod.number()),
  price: zod.number()
})

type schema = zod.infer<typeof validationConfiguration>

export function ShoppingPage() {
  const navigate = useNavigate()
  const { shoppingListId } = useParams()
  const [shoppingList, setShoppingList] = useState<ShoppingList | null>(null)
  const { handleSubmit, reset, register } = useForm<schema>({
    resolver: zodResolver(validationConfiguration)
  })
  const [error, setError] = useState('')

  const getShoppingListWithItems = async () => {
    try {
      const response = await api.get("/shoppinglists/" + shoppingListId, {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      })

      setShoppingList(response.data)
    } catch (err) {
      validateAuthenticated(err, navigate)
    }
  }

  useEffect(() => { getShoppingListWithItems() }, [])

  const handleDeleteItem = async (id: string) => {
    try {
      if (shoppingList !== null) {
        const response = await api.delete("/shoppinglists/" + shoppingListId + "/item/" + id, {
          headers: {
            Authorization: 'Bearer ' + getToken()
          }
        })

        const filteredItems = shoppingList?.items.filter(item => item.id !== id)
        setShoppingList({ ...shoppingList, items: filteredItems })
      }
    } catch (err) {
      validateAuthenticated(err, navigate)
    }
  }

  const handleCreateItem = async (data: schema) => {
    try {
      const response = await api.post('/shoppinglists/' + shoppingListId + '/item', data, {
        headers: {
          Authorization: 'Bearer ' + getToken()
        }
      })

      if (shoppingList !== null) {
        const newItems = [response.data, ...shoppingList.items]
        setShoppingList({ ...shoppingList, items: newItems })
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        validateAuthenticated(err, navigate)
      } else {
        throw err
      }
    }
  }

  const handleError = (data: any) => {
    console.log(data)
  }

  let total = shoppingList?.items.reduce((acumulator, current) => acumulator + current.price, 0)
  total = total === undefined ? 0 : total

  return (
    <Wrapper >
      <Header >
        <h1>{shoppingList?.title}</h1>
        <nav>
          <a onClick={() => navigate(-1)}><ArrowLineLeft size={44} weight="bold" /></a>
        </nav>
      </Header>

      <ShoppingItemsContainer>
        <List >
          {shoppingList?.items.map(item => {
            return (
              <ListItem key={item.id} >
                <span>{item.name} {item.weight && ` - ${item.weight}g`}</span>

                <span>
                  {numberFormatter.format(item.price)}
                  {item.weight && ` - ${numberFormatter.format((1000 * item.price / item.weight))}Kg`}
                </span>

                <button onClick={() => handleDeleteItem(item.id)}><Trash size={24} weight="fill" /></button>
              </ListItem>
            )
          })}
        </List>

        <div>
          <PriceContainer>
            <strong>TOTAL: </strong>
            <p>{numberFormatter.format(total)}</p>
          </PriceContainer>

          <Form onSubmit={handleSubmit(handleCreateItem, handleError)}>
            <Input {...register('name')} type="text" placeholder="Nome item" />
            <WeightForm
              labelName="Pesável?"
              placeHolderDescription="Peso em gramas"
              registration={register('weight', { setValueAs: (v) => v == "" ? null : parseInt(v, 10) })}
            />
            <Input {...register('price', { valueAsNumber: true })} type="number" placeholder="Valor" />
            <ErrorLabel visible={!!error}>{error}</ErrorLabel>

            <Button variant="orange" type="submit">Adicionar</Button >
          </Form>
        </div>
      </ShoppingItemsContainer>
    </Wrapper>
  )
}