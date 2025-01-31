import { useState } from "react";



const App = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (login === 'admin' && senha === '1234') {
      alert('Login efetuado com sucesso!')
    } else {
      alert('Login ou senha inválidos!')
    }
  }



  return (



    <Container>
      <Texto>Login</Texto>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Login"
          value={login}
          onChange= {(e) => setLogin(e.target.value)}
          type="text"/>
        <Input 
          placeholder="senha"
          type="password"
          value={senha}
          onChange= {(e) => setSenha(e.target.value)}
          />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>

  );
}

export default App;