import React, { useState, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Paper, 
  Grid, 
  Divider,
  IconButton,
  InputAdornment,
  Alert,
  Link,
  Avatar,
  Stack,
  Chip,
  Fade,
  Slide
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock, 
  Google, 
  Facebook,
  DirectionsCar,
  Security,
  AutoAwesome,
  LoginRounded,
  KeyboardArrowRight
} from '@mui/icons-material';
import authService from '../api/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await authService.login(email, password);
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userRole', response.role);
      localStorage.setItem('userId', response.userId);
      navigate('/');
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 
        'Échec de connexion. Vérifiez vos identifiants.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail('admin@ai-drive.com');
      setPassword('admin123');
    } else {
      setEmail('user@ai-drive.com');
      setPassword('user123');
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: { xs: 2, md: 4 }
    }}>
      
      {/* Background Pattern Sophistiqué */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), 
                         radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
        animation: 'backgroundMove 20s ease-in-out infinite'
      }} />

      {/* Floating Elements Décoratifs */}
      <Box sx={{
        position: 'absolute',
        top: '12%',
        right: '8%',
        width: { xs: 80, md: 120 },
        height: { xs: 80, md: 120 },
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        animation: 'float 8s ease-in-out infinite',
        backdropFilter: 'blur(10px)'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '12%',
        left: '6%',
        width: { xs: 60, md: 100 },
        height: { xs: 60, md: 100 },
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        animation: 'float 10s ease-in-out infinite reverse',
        backdropFilter: 'blur(8px)'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Fade in={showContent} timeout={1000}>
          <Paper sx={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.90))',
            backdropFilter: 'blur(25px)',
            borderRadius: 6,
            border: '2px solid rgba(255,255,255,0.3)',
            boxShadow: '0 25px 80px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            maxWidth: 1100,
            mx: 'auto',
            minHeight: { xs: 'auto', md: 650 }
          }}>
            <Grid container sx={{ minHeight: { xs: 'auto', md: 650 } }}>
              {/* Section Gauche - Branding */}
              <Grid item xs={12} md={6} sx={{ 
                display: 'flex',
                order: { xs: 1, md: 1 }
              }}>
                <Box sx={{
                  background: 'linear-gradient(135deg, #1976d2, #0d47a1)',
                  width: '100%',
                  minHeight: { xs: 250, md: 650 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 3, md: 4 },
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Éléments flottants dans la section branding */}
                  <Box sx={{
                    position: 'absolute',
                    top: '18%',
                    right: '12%',
                    width: { xs: 40, md: 60 },
                    height: { xs: 40, md: 60 },
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    animation: 'float 6s ease-in-out infinite'
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '8%',
                    width: { xs: 30, md: 40 },
                    height: { xs: 30, md: 40 },
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    animation: 'float 8s ease-in-out infinite reverse'
                  }} />

                  <Slide direction="right" in={showContent} timeout={800}>
                    <Box sx={{ 
                      textAlign: 'center', 
                      zIndex: 2,
                      width: '100%',
                      maxWidth: { xs: 280, md: 350 }
                    }}>
                      <Avatar sx={{ 
                        bgcolor: 'white', 
                        color: '#1976d2',
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        mx: 'auto',
                        mb: { xs: 2, md: 3 },
                        boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                        border: '4px solid rgba(255,255,255,0.3)'
                      }}>
                        <DirectionsCar sx={{ fontSize: { xs: 30, md: 40 } }} />
                      </Avatar>
                      
                      <Typography variant="h3" sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        mb: { xs: 1, md: 2 },
                        textShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        fontSize: { xs: '1.8rem', md: '3rem' }
                      }}>
                        AI-Drive
                      </Typography>
                      
                      <Typography variant="h6" sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        mb: { xs: 2, md: 4 },
                        fontWeight: 300,
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}>
                        Solution Premium pour Agences
                      </Typography>

                      <Stack spacing={1.5} sx={{ mb: { xs: 2, md: 4 } }}>
                        <Chip 
                          icon={<Security sx={{ fontSize: { xs: 16, md: 20 } }} />}
                          label="Sécurisé & Certifié" 
                          sx={{ 
                            bgcolor: 'rgba(76,175,80,0.2)', 
                            color: 'white',
                            fontWeight: 'bold',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(76,175,80,0.3)',
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            height: { xs: 28, md: 32 }
                          }} 
                        />
                        <Chip 
                          icon={<AutoAwesome sx={{ fontSize: { xs: 16, md: 20 } }} />}
                          label="Technologie IA Avancée" 
                          sx={{ 
                            bgcolor: 'rgba(255,193,7,0.2)', 
                            color: 'white',
                            fontWeight: 'bold',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,193,7,0.3)',
                            fontSize: { xs: '0.75rem', md: '0.875rem' },
                            height: { xs: 28, md: 32 }
                          }} 
                        />
                      </Stack>

                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        px: { xs: 1, md: 0 }
                      }}>
                        Accédez à votre tableau de bord pour gérer vos véhicules, 
                        analyser les performances et optimiser votre activité.
                      </Typography>
                    </Box>
                  </Slide>
                </Box>
              </Grid>
              
              {/* Section Droite - Formulaire */}
              <Grid item xs={12} md={6} sx={{ 
                display: 'flex',
                order: { xs: 2, md: 2 }
              }}>
                <Slide direction="left" in={showContent} timeout={1000}>
                  <Box sx={{ 
                    p: { xs: 3, md: 6 }, 
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    minHeight: { xs: 'auto', md: 650 }
                  }}>
                    {/* En-tête du formulaire */}
                    <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ 
                        fontWeight: 'bold', 
                        mb: 1,
                        background: 'linear-gradient(45deg, #1976d2, #0d47a1)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '1.75rem', md: '2.125rem' }
                      }}>
                        Connexion
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: 'text.secondary',
                        fontSize: { xs: '0.875rem', md: '0.875rem' }
                      }}>
                        Bienvenue ! Connectez-vous à votre compte
                      </Typography>
                    </Box>

                    {/* Message d'erreur */}
                    {errorMessage && (
                      <Alert 
                        severity="error" 
                        sx={{ 
                          mb: 3,
                          borderRadius: 3,
                          '& .MuiAlert-icon': {
                            fontSize: 20
                          }
                        }}
                      >
                        {errorMessage}
                      </Alert>
                    )}
                    
                    {/* Formulaire */}
                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                      <TextField
                        label="Adresse email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        required
                        type="email"
                        sx={{
                          mb: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 4px 15px rgba(25, 118, 210, 0.15)'
                            },
                            '&.Mui-focused': {
                              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email sx={{ color: '#1976d2' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                      
                      <TextField
                        label="Mot de passe"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        required
                        sx={{
                          mb: 2,
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              boxShadow: '0 4px 15px rgba(25, 118, 210, 0.15)'
                            },
                            '&.Mui-focused': {
                              boxShadow: '0 6px 20px rgba(25, 118, 210, 0.2)'
                            }
                          }
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock sx={{ color: '#1976d2' }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                edge="end"
                                sx={{ 
                                  color: '#1976d2',
                                  '&:hover': {
                                    bgcolor: 'rgba(25, 118, 210, 0.04)'
                                  }
                                }}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                      
                      {/* Lien mot de passe oublié */}
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'flex-end', 
                        mb: 3 
                      }}>
                        <Link 
                          component={RouterLink} 
                          to="/forgot-password" 
                          underline="hover"
                          sx={{ 
                            fontSize: { xs: 13, md: 14 },
                            color: '#1976d2',
                            fontWeight: 500,
                            '&:hover': {
                              color: '#0d47a1'
                            }
                          }}
                        >
                          Mot de passe oublié ?
                        </Link>
                      </Box>
                      
                      {/* Bouton de connexion */}
                      <Button 
                        type="submit" 
                        variant="contained" 
                        fullWidth 
                        size="large"
                        endIcon={<LoginRounded />}
                        sx={{ 
                          py: { xs: 1.5, md: 2 },
                          mb: 3,
                          fontWeight: 'bold',
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          borderRadius: 4,
                          background: 'linear-gradient(45deg, #1976d2, #0d47a1)',
                          boxShadow: '0 8px 25px rgba(25, 118, 210, 0.3)',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 35px rgba(25, 118, 210, 0.4)',
                            background: 'linear-gradient(45deg, #1565c0, #0d47a1)'
                          },
                          '&:disabled': {
                            background: 'linear-gradient(45deg, #9e9e9e, #757575)'
                          },
                          transition: 'all 0.4s ease'
                        }}
                        disabled={isLoading}
                      >
                        {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                      </Button>

                     
                    </Box>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(2deg);
            }
          }
          
          @keyframes backgroundMove {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(5px) translateY(-5px); }
            50% { transform: translateX(-3px) translateY(8px); }
            75% { transform: translateX(-5px) translateY(-3px); }
          }
        `}
      </style>
    </Box>
  );
};

export default Login;