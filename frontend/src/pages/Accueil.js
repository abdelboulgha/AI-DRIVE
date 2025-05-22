import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Stack,
  Fab,
  Slide,
  Zoom,
  useTheme,
  useMediaQuery,
  Avatar,
  Chip,
  Badge,
  Divider,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  DirectionsCar,
  LocationOn,
  People,
  Analytics,
  Shield,
  Smartphone,
  PlayArrow,
  TrendingUp,
  Star,
  CheckCircle,
  KeyboardArrowRight,
  Security,
  Speed,
  Visibility,
  Timeline,
  AutoAwesome,
  Rocket,
  VerifiedUser,
  TrendingUpSharp,
  HeadsetMic
} from '@mui/icons-material';

const Accueil = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const features = [
    {
      icon: <LocationOn />,
      title: 'Tracking Temps Réel',
      description: 'Localisez instantanément tous vos véhicules avec une précision GPS inégalée',
      color: '#1565c0',
      stats: 'GPS précis à 1m',
      badge: 'LIVE',
      benefits: ['Géofencing intelligent', 'Alertes instantanées', 'Historique complet']
    },
    {
      icon: <People />,
      title: 'Monitoring Clients',
      description: 'Surveillez le comportement de conduite avec analyses comportementales avancées',
      color: '#42a5f5',
      stats: '1000+ profils',
      badge: 'PRO',
      benefits: ['Score de conduite', 'Profils détaillés', 'Prédictions risques']
    },
    {
      icon: <Analytics />,
      title: 'Analytics Avancées',
      description: 'Tableaux de bord interactifs et rapports personnalisables pour pilotage optimal',
      color: '#0d47a1',
      stats: '24/7 insights',
      badge: 'NEW',
      benefits: ['Dashboards personnalisés', 'Rapports automatiques', 'KPIs métier']
    }
  ];

  const benefits = [
    { text: 'Réduction de 40% des accidents', icon: <Security />, color: '#4caf50' },
    { text: 'Économies d\'assurance jusqu\'à 25%', icon: <TrendingUpSharp />, color: '#ff9800' },
    { text: 'Amélioration satisfaction client', icon: <Star />, color: '#2196f3' },
    { text: 'ROI positif en 3 mois', icon: <Timeline />, color: '#9c27b0' }
  ];

  const testimonials = [
    {
      name: "Kaoutar Boubkari",
      company: "EuroRent",
      text: "AI-Drive a révolutionné notre gestion de flotte. Nous avons réduit nos sinistres de 50% et optimisé nos coûts opérationnels.",
      avatar: "K",
      rating: 5,
      position: "Directrice Générale"
    },
    {
      name: "Abdelillah Boulgha",
      company: "CityDrive",
      text: "Interface intuitive et données précieuses. Nos clients apprécient la transparence et nous gagnons en efficacité.",
      avatar: "A",
      rating: 5,
      position: "Responsable Flotte"
    }
  ];

  const stats = [
    { number: '200+', label: 'Agences Partenaires', icon: <VerifiedUser />, color: '#4caf50' },
    { number: '15K+', label: 'Véhicules Connectés', icon: <DirectionsCar />, color: '#2196f3' },
    { number: '99.8%', label: 'Satisfaction Client', icon: <Star />, color: '#ff9800' },
    { number: '24/7', label: 'Support Premium', icon: <HeadsetMic />, color: '#9c27b0' }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
      position: 'relative',
      overflow: 'hidden'
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

      {/* Floating Elements Améliorés */}
      <Box sx={{
        position: 'absolute',
        top: '8%',
        right: '8%',
        width: { xs: 120, md: 200 },
        height: { xs: 120, md: 200 },
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        animation: 'float 8s ease-in-out infinite',
        backdropFilter: 'blur(10px)'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: { xs: 100, md: 150 },
        height: { xs: 100, md: 150 },
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
        animation: 'float 10s ease-in-out infinite reverse',
        backdropFilter: 'blur(8px)'
      }} />

      {/* Navigation Header Premium */}
      <Slide direction="down" in={showContent} timeout={800}>
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backdropFilter: 'blur(20px)',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
        }}>
          <Container maxWidth="lg" sx={{ py: 3 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={2}>
                <Badge badgeContent="PRO" color="secondary" sx={{ '& .MuiBadge-badge': { fontSize: '0.7rem', fontWeight: 'bold' } }}>
                  <Avatar sx={{ 
                    bgcolor: 'white', 
                    color: '#1976d2',
                    width: 56,
                    height: 56,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    border: '3px solid rgba(255,255,255,0.3)'
                  }}>
                    <DirectionsCar sx={{ fontSize: 32 }} />
                  </Avatar>
                </Badge>
                <Box>
                  <Typography variant="h5" sx={{ 
                    color: 'white', 
                    fontWeight: 'bold',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    lineHeight: 1.2
                  }}>
                    AI-Drive Professional
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    Solution Premium pour Agences
                  </Typography>
                </Box>
              </Stack>
              <Button
                variant="contained"
                size="large"
                startIcon={<Rocket />}
                sx={{
                  bgcolor: 'white',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  borderRadius: 10,
                  boxShadow: '0 6px 25px rgba(0,0,0,0.15)',
                  '&:hover': { 
                    bgcolor: '#f8f9fa',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 35px rgba(0,0,0,0.2)'
                  },
                  transition: 'all 0.4s ease'
                }}
                onClick={() => navigate('/login')}
              >
                Accès Plateforme
              </Button>
            </Stack>
          </Container>
        </Box>
      </Slide>

      {/* Hero Section Ultra Premium */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        <Zoom in={showContent} timeout={1000}>
          <Box sx={{ 
            textAlign: 'center', 
            pt: { xs: 18, md: 22 },
            pb: { xs: 8, md: 12 },
            px: { xs: 2, md: 0 }
          }}>
            <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
              <Chip 
                icon={<AutoAwesome />}
                label="🚀 Innovation 2024" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.25)', 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  py: 2.5,
                  px: 3,
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }} 
              />
              <Chip 
                icon={<Security />}
                label="Certifié ISO" 
                sx={{ 
                  bgcolor: 'rgba(76,175,80,0.2)', 
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  py: 2.5,
                  px: 3,
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(76,175,80,0.3)'
                }} 
              />
            </Stack>
            
            <Typography variant="h1" sx={{ 
              color: 'white', 
              fontWeight: 900, 
              mb: 4,
              fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
              lineHeight: 1.1,
              textShadow: '0 6px 30px rgba(0,0,0,0.4)',
              maxWidth: 900,
              mx: 'auto'
            }}>
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #ffffff, #e3f2fd)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }}>
                RÉVOLUTIONNEZ
              </Box>
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #ffeb3b, #ff9800)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block',
                fontSize: '0.9em'
              }}>
                VOTRE AGENCE
              </Box>
            </Typography>
            
            <Typography variant="h4" sx={{ 
              color: 'rgba(255,255,255,0.95)', 
              mb: 6, 
              maxWidth: 800, 
              mx: 'auto',
              fontWeight: 400,
              lineHeight: 1.6,
              px: { xs: 2, md: 0 },
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              La première plateforme <Box component="span" sx={{ fontWeight: 'bold', color: '#ffeb3b' }}>IA</Box> dédiée aux agences de location.
              <Box component="span" sx={{ display: 'block', mt: 1, fontSize: '0.9em' }}>
                Sécurité • Performance • Rentabilité maximisées
              </Box>
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center" sx={{ mb: 8 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  bgcolor: 'white',
                  color: '#1976d2',
                  px: 6,
                  py: 3,
                  borderRadius: 15,
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                  '&:hover': {
                    bgcolor: '#f8f9fa',
                    transform: 'translateY(-4px) scale(1.02)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                  },
                  transition: 'all 0.4s ease'
                }}
                onClick={() => navigate('/login')}
              >
                DÉMARRER MAINTENANT
              </Button>
            </Stack>

            {/* Statistiques Premium */}
            <Paper sx={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '1px solid rgba(255,255,255,0.2)',
              p: 4,
              maxWidth: 800,
              mx: 'auto'
            }}>
              <Grid container spacing={4}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Avatar sx={{ 
                        bgcolor: stat.color, 
                        width: 48, 
                        height: 48, 
                        mx: 'auto', 
                        mb: 1,
                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                      }}>
                        {stat.icon}
                      </Avatar>
                      <Typography variant="h3" sx={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        fontSize: { xs: '1.8rem', md: '2.5rem' }
                      }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        fontWeight: 500
                      }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Box>
        </Zoom>

        {/* Features Section Ultra Premium */}
        <Slide direction="up" in={showContent} timeout={1200}>
          <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}>
                  Solutions Premium
                </Typography>
                <Typography variant="h6" sx={{
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: 600,
                  mx: 'auto'
                }}>
                  Technologies de pointe pour transformer votre activité
                </Typography>
              </Box>
              
              <Grid container spacing={5}>
                {features.map((feature, index) => (
                  <Grid item xs={12} md={6} lg={3} key={index}>
                    <Card sx={{ 
                      height: '100%',
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95))',
                      backdropFilter: 'blur(25px)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: 4,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${feature.color}, ${feature.color}66)`
                      },
                      '&:hover': { 
                        transform: 'translateY(-20px) scale(1.03)',
                        boxShadow: '0 30px 70px rgba(0,0,0,0.25)',
                        '& .feature-icon': {
                          transform: 'scale(1.1) rotate(5deg)'
                        }
                      }
                    }}>
                      <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ position: 'relative', mb: 3 }}>
                          <Badge 
                            badgeContent={feature.badge} 
                            color="secondary"
                            sx={{ 
                              position: 'absolute', 
                              top: -10, 
                              right: -10,
                              '& .MuiBadge-badge': { 
                                fontSize: '0.7rem', 
                                fontWeight: 'bold',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                              }
                            }}
                          >
                            <Avatar 
                              className="feature-icon"
                              sx={{ 
                                bgcolor: feature.color, 
                                width: 80, 
                                height: 80, 
                                mx: 'auto',
                                fontSize: '2.5rem',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              {feature.icon}
                            </Avatar>
                          </Badge>
                        </Box>
                        
                        <Typography variant="h5" sx={{ 
                          fontWeight: 'bold', 
                          mb: 2, 
                          color: feature.color,
                          textAlign: 'center'
                        }}>
                          {feature.title}
                        </Typography>
                        
                        <Typography variant="body1" sx={{ 
                          color: 'text.secondary', 
                          mb: 3, 
                          lineHeight: 1.6,
                          textAlign: 'center',
                          flex: 1
                        }}>
                          {feature.description}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Stack spacing={1} sx={{ mb: 3 }}>
                          {feature.benefits.map((benefit, idx) => (
                            <Stack direction="row" alignItems="center" spacing={1} key={idx}>
                              <CheckCircle sx={{ color: feature.color, fontSize: 16 }} />
                              <Typography variant="caption" sx={{ fontSize: '0.85rem' }}>
                                {benefit}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                        
                        <Chip 
                          label={feature.stats} 
                          size="medium" 
                          sx={{ 
                            bgcolor: feature.color, 
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                          }} 
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Slide>

        {/* Benefits Section Premium */}
        <Slide direction="left" in={showContent} timeout={1400}>
          <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={12} lg={6}>
                  <Paper sx={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95))',
                    backdropFilter: 'blur(25px)',
                    borderRadius: 4,
                    p: 6,
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                    width: '180%',
                  }}>
                    <Typography variant="h2" sx={{ 
                      fontWeight: 'bold', 
                      mb: 2,
                      background: 'linear-gradient(45deg, #1976d2, #0d47a1)',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textAlign: 'center'
                    }}>
                      Résultats Garantis
                    </Typography>

                    <Typography variant="body1" sx={{ 
                      color: 'text.secondary', 
                      textAlign: 'center',
                      mb: 4,
                      fontSize: '1.1rem'
                    }}>
                      Des bénéfices mesurables dès le premier mois
                    </Typography>
                    
                    <Stack spacing={4}>
                      {benefits.map((benefit, index) => (
                        <Paper 
                          key={index}
                          sx={{
                            p: 3,
                            background: `linear-gradient(135deg, ${benefit.color}15, ${benefit.color}08)`,
                            border: `1px solid ${benefit.color}30`,
                            borderRadius: 3
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={3}>
                            <Avatar sx={{ bgcolor: benefit.color, width: 50, height: 50 }}>
                              {benefit.icon}
                            </Avatar>
                            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.2rem' }}>
                              {benefit.text}
                            </Typography>
                          </Stack>
                        </Paper>
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      fullWidth
                      size="large"
                      startIcon={<Rocket />}
                      sx={{ 
                        mt: 6,
                        py: 3,
                        background: 'linear-gradient(45deg, #1976d2, #0d47a1)',
                        borderRadius: 3,
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        boxShadow: '0 12px 30px rgba(25, 118, 210, 0.3)',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 18px 40px rgba(25, 118, 210, 0.4)'
                        }
                      }}
                      endIcon={<KeyboardArrowRight />}
                      onClick={() => navigate('/login')}
                    >
                      ACCÉDER À LA PLATEFORME
                    </Button>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} lg={6}>
                  <Stack spacing={4}>
                    <Typography variant="h3" sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      mb: 2,
                      textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}>
                      Témoignages Clients
                    </Typography>
                    
                    {testimonials.map((testimonial, index) => (
                      <Paper 
                        key={index} 
                        sx={{
                          background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9))',
                          backdropFilter: 'blur(20px)',
                          borderRadius: 4,
                          p: 4,
                          transition: 'all 0.4s ease',
                          border: '2px solid rgba(255,255,255,0.3)',
                          '&:hover': { 
                            transform: 'translateX(15px) scale(1.02)',
                            boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                          }
                        }}
                      >
                        <Stack direction="row" spacing={3} alignItems="start">
                          <Badge 
                            badgeContent={<Star sx={{ fontSize: 16 }} />}
                            color="warning"
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          >
                            <Avatar sx={{ 
                              bgcolor: '#1976d2',
                              width: 70,
                              height: 70,
                              fontSize: '1.8rem',
                              fontWeight: 'bold',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                            }}>
                              {testimonial.avatar}
                            </Avatar>
                          </Badge>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ 
                              fontStyle: 'italic', 
                              mb: 2,
                              lineHeight: 1.7,
                              fontSize: '1.1rem',
                              color: 'text.primary'
                            }}>
                              "{testimonial.text}"
                            </Typography>
                            <Typography variant="h6" sx={{ 
                              fontWeight: 'bold',
                              color: '#1976d2',
                              mb: 0.5
                            }}>
                              {testimonial.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ 
                              color: 'text.secondary',
                              mb: 1
                            }}>
                              {testimonial.position} - {testimonial.company}
                            </Typography>
                            <Stack direction="row" spacing={0.5}>
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} sx={{ color: '#ffc107', fontSize: 22 }} />
                              ))}
                            </Stack>
                          </Box>
                        </Stack>
                      </Paper>
                    ))}
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Slide>
      </Container>

      {/* Floating Action Button Premium */}
      <Fab
        size="large"
        sx={{
          position: 'fixed',
          bottom: 50,
          right: 50,
          bgcolor: 'white',
          color: '#1976d2',
          width: 70,
          height: 70,
          boxShadow: '0 12px 35px rgba(0,0,0,0.2)',
          '&:hover': { 
            bgcolor: '#f5f5f5',
            transform: 'scale(1.15) rotate(5deg)',
            boxShadow: '0 18px 45px rgba(0,0,0,0.3)'
          },
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -5,
            left: -5,
            right: -5,
            bottom: -5,
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
            zIndex: -1,
            animation: 'pulse 2s ease-in-out infinite'
          }
        }}
        onClick={() => navigate('/login')}
      >
        <PlayArrow sx={{ fontSize: 36 }} />
      </Fab>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-25px) rotate(3deg);
            }
          }
          
          @keyframes backgroundMove {
            0%, 100% { transform: translateX(0) translateY(0); }
            25% { transform: translateX(10px) translateY(-10px); }
            50% { transform: translateX(-5px) translateY(15px); }
            75% { transform: translateX(-10px) translateY(-5px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.05); }
          }
        `}
      </style>
    </Box>
  );
};

export default Accueil;