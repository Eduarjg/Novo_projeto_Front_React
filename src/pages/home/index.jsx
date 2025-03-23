import { Conteinerimg, ConteinerForm, Conteiner, Form, Title, InputLabel, Input, Div } from "./styles"
import users from '../../assets/users.png'
import logo from '../../assets/logo.png'
function App() {

  return (
    <Conteiner>
      <Conteinerimg>
        <img src={users} alt="Imgagem Principal" />
      </Conteinerimg>
      <ConteinerForm>

        <img src={logo} alt="logo" id="logo"
         />

        <Form>
        <Div>
          <Title>Que bom ver você de novo</Title>
             
            <InputLabel>
              Email<span> *</span>
            </InputLabel>
            <Input type='text' placeholder="Digite seu Email" />

            <InputLabel>
              Senha<span> *</span>
            </InputLabel>
            <Input type='number' placeholder="Digite sua senha" />
          
          </Div>

        </Form>
      </ConteinerForm>

    </Conteiner>
  )
}

export default App
