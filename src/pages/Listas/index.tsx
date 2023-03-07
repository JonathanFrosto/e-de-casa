import { useEffect, useState } from "react";
import { List, ListItem } from "../../components/List/style";
import { Wrapper } from "../../components/Wrapper/style";
import { Header } from "./style";

interface Shopping {
  id: number
  title: string
  date: Date
}

export function ListaPage() {
  const [shoppingList, setShoppingList] = useState<Shopping[]>([])

  useEffect(() => {
    
  }, [])

  return (
    <Wrapper >
      <Header>
        <h1>Listas de compras</h1>
      </Header>

      <List>
        <ListItem>
          <span>Carrefour</span>
          <span>01/03/2023</span>
        </ListItem>
        <ListItem>
          <span>Recibom</span>
          <span>24/02/2023</span>
        </ListItem>
        <ListItem>
          <span>Rende mais</span>
          <span>12/02/2023</span>
        </ListItem>
        <ListItem>
          <span>Carrefour</span>
          <span>02/02/2023</span>
        </ListItem>
      </List>
    </Wrapper>
  )
}