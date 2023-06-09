import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import  {useState} from 'react';
import api from '../../services/api/api';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import Alert from '@mui/material/Alert';

export default function Login(){
    const [mensagemErro, setMensagemErro] = useState("");
    const [possuiErro, setPossuiErro] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navegate = useNavigate();
    const theme = useTheme();

    async function login(event){
      event.preventDefault();//evita o refresh da tela

      const data = {
          email,
          password
      }

      try{
          const response = await api.post('v1/Autenticacao/Login', data);
          localStorage.setItem('email', email);
          localStorage.setItem('token', response.data.message.accessToken);

          navegate("/");
      }
      catch(error){
        if(error.response === undefined){
          toogleMensagemErro("Ocorreu uma exception, contate o suporte!");
        }else if(error.response.status === 400){
          if(error.response.data.errors === undefined){
            toogleMensagemErro(error.response.data.message);
          }else{
            if(error.response.data.errors.Email !== undefined){
              error.response.data.errors.Email.map((item) => 
              toogleMensagemErro(item))
            }
            if(error.response.data.errors.Password !== undefined){
              error.response.data.errors.Password.map((item) => 
              toogleMensagemErro(item))
            }
          }
        }
      }
    }

    const toogleMensagemErro =(erro) =>{
      setMensagemErro(erro);
      setPossuiErro(true);
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#950000" }}>
            <LockOutlinedIcon
              sx={{
                position: "relative",
                borderRadius: theme.shape.borderRadius,
                color: "#ffffff",
              }}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          {possuiErro === true ? 
            <Alert severity="error">{mensagemErro}
            </Alert> : 
            <></>}
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              id="senha"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ 
                ':hover': {
                  bgcolor: '#b96c6c',
                },
                mt: 3, mb: 2, color: "#ffffff", backgroundColor: "#950000" }}
            >
              Logar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/recuperar" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/cadastro" variant="body2">
                  {"Não possue conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}