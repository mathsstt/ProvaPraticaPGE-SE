import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import Logo from './assets/logo-2.png';

function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Sistema desenvolvido pela CODIN | SGP © 2010 - 2022 '}
            <Grid>
                {'desenvolvimento@pge.se.gov.br'}
            </Grid>
          <Grid>
                {'Versão 2.14.0'}
          </Grid>
      </Typography>
  )
}

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('usuario'),
      password: data.get('senha'),
    });
  };

  const [state, setState] = useState(false);

    const toggleBtn = () => {
      setState(prevState => !prevState);
    }

  return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
              item
              xs={false}
              sm={4}
              md={6}
              sx={{
                backgroundImage: 'url(https://www.pge.se.gov.br/wp-content/uploads/2021/08/IMG-20210817-WA0138.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
          />
          <Grid item xs={12} sm={8} md={6} square>
            <Box
                sx={{
                  my: 7,
                  mx: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
            >
                <img src={Logo} alt="Logo" width="300" height="100" />
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '41ch' }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    label="Usuário"
                    name="usuario"
                    autoComplete="usuario"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="senha"
                    id="senha"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    variant="contained" disableElevation
                    sx={{ mt: 4, mb: 2 }}
                >
                  Entrar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Esqueceu sua senha ou bloqueou seu usuário?
                    </Link>
                  </Grid>
                  <Grid item>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 10 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}