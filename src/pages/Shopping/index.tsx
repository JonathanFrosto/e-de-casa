import { ArrowLineLeft, Trash } from "phosphor-react";
import { Wrapper } from "../../components/Wrapper/style";
import { AddButton, Container, Form, Header, PriceContainer } from "./style";
import { List, ListItem } from '../../components/List/style'
import { WeightForm } from "./components/WeightForm";

export function ShoppingPage() {
  return (
    <Wrapper >
      <Header >
        <h1>Shopping</h1>
        <nav>
          <a href="">
            <ArrowLineLeft size={64} color="#000" />
          </a>
        </nav>
      </Header>

      <Container>
        <List >
          <ListItem >
            <div>
              <p>Banana</p>
              <p>200g</p>
            </div>

            <div>
              <p>R$ 12,00</p>
              <p>R$ 60,00/KG</p>
            </div>

            <Trash size={24} style={{justifySelf: "end"}} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Chiclete</p>
            </div>

            <div>
              <p>R$ 1,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>

          <ListItem >
            <div>
              <p>Coca cola</p>
            </div>

            <div>
              <p>R$ 8,00</p>
            </div>

            <Trash size={24} />
          </ListItem>
        </List>
        <div>
          <PriceContainer>
            <strong>TOTAL: </strong>
            <span>R$ 180,00</span>
          </PriceContainer>
          <Form action="">
            <input type="text" placeholder="Usuário" />
            <WeightForm />
            <input type="number" placeholder="Valor" />

            <AddButton type="submit">Adicionar</AddButton>
          </Form>
        </div>
      </Container>
    </Wrapper>
  )
}