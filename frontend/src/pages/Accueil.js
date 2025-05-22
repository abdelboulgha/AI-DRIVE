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
  Chip
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
  KeyboardArrowRight
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
      icon: <DirectionsCar />,
      title: 'Flotte Intelligente',
      description: 'Gérez votre parc automobile avec intelligence artificielle',
      color: '#1976d2',
      stats: '500+ véhicules'
    },
    {
      icon: <LocationOn />,
      title: 'Tracking en Temps Réel',
      description: 'Localisez instantanément tous vos véhicules',
      color: '#f44336',
      stats: 'GPS précis à 1m'
    },
    {
      icon: <People />,
      title: 'Monitoring Clients',
      description: 'Surveillez le comportement de conduite de vos locataires',
      color: '#4caf50',
      stats: '1000+ profils'
    },
    {
      icon: <Analytics />,
      title: 'Analytics Avancées',
      description: 'Tableaux de bord et rapports détaillés',
      color: '#ff9800',
      stats: '24/7 insights'
    }
  ];

  const benefits = [
    'Réduction de 40% des accidents',
    'Économies d\'assurance jusqu\'à 25%',
    'Amélioration satisfaction client',
    'ROI positif en 3 mois'
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "EuroRent",
      text: "AI-Drive a révolutionné notre gestion de flotte. Nous avons réduit nos sinistres de 50%.",
      avatar: "M"
    },
    {
      name: "Jean Martin",
      company: "CityDrive",
      text: "Interface intuitive et données précieuses. Nos clients apprécient la transparence.",
      avatar: "J"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Floating Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        animation: 'float 6s ease-in-out infinite'
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: 150,
        height: 150,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        animation: 'float 8s ease-in-out infinite reverse'
      }} />

      {/* Navigation Header */}
      <Slide direction="down" in={showContent} timeout={800}>
        <Box sx={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          background: 'rgba(255,255,255,0.1)'
        }}>
          <Container maxWidth="lg" sx={{ py: 2 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
                  <DirectionsCar />
                </Avatar>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                  AI-Drive Professional
                </Typography>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': { bgcolor: '#f5f5f5' }
                }}
                onClick={() => navigate('/login')}
              >
                Se Connecter
              </Button>
            </Stack>
          </Container>
        </Box>
      </Slide>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, pt: 12 }}>
        
        <Zoom in={showContent} timeout={1000}>
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Chip 
              label="🚀 Nouvelle Génération" 
              sx={{ 
                mb: 3, 
                bgcolor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
            
            <Typography variant="h1" sx={{ 
              color: 'white', 
              fontWeight: 900, 
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              background: 'linear-gradient(45deg, #fff, #e3f2fd)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              lineHeight: 1.2
            }}>
              RÉVOLUTIONNEZ
              <br />
              VOTRE AGENCE
            </Typography>
            
            <Typography variant="h5" sx={{ 
              color: 'rgba(255,255,255,0.9)', 
              mb: 6, 
              maxWidth: 600, 
              mx: 'auto',
              fontWeight: 300
            }}>
              La première plateforme IA dédiée aux agences de location automobile.
              Sécurité, performance et rentabilité maximisées.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  bgcolor: '#ff4081',
                  color: 'white',
                  px: 4,
                  py: 2,
                  borderRadius: 10,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 32px rgba(255,64,129,0.4)',
                  '&:hover': {
                    bgcolor: '#e91e63',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(255,64,129,0.6)'
                  },
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate('/login')}
              >
                DÉMARRER MAINTENANT
              </Button>
              
            </Stack>
          </Box>
        </Zoom>

        {/* Features Grid */}
        <Slide direction="up" in={showContent} timeout={1200}>
          <Box sx={{ py: 8 }}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ 
                    height: '100%',
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 4,
                    transition: 'all 0.4s ease',
                    '&:hover': { 
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
                    }
                  }}>
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Avatar sx={{ 
                        bgcolor: feature.color, 
                        width: 60, 
                        height: 60, 
                        mx: 'auto', 
                        mb: 2,
                        fontSize: '2rem'
                      }}>
                        {feature.icon}
                      </Avatar>
                      
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {feature.title}
                      </Typography>
                      
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                        {feature.description}
                      </Typography>
                      
                      <Chip 
                        label={feature.stats} 
                        size="small" 
                        sx={{ 
                          bgcolor: feature.color, 
                          color: 'white',
                          fontWeight: 'bold'
                        }} 
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Slide>

        {/* Benefits Section */}
        <Slide direction="left" in={showContent} timeout={1400}>
          <Box sx={{ py: 8 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Card sx={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 4,
                  p: 4
                }}>
                  <Typography variant="h3" sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent'
                  }}>
                    Pourquoi Nous Choisir ?
                  </Typography>
                  
                  <Stack spacing={2}>
                    {benefits.map((benefit, index) => (
                      <Stack direction="row" alignItems="center" spacing={2} key={index}>
                        <CheckCircle sx={{ color: '#4caf50', fontSize: 24 }} />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {benefit}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ 
                      mt: 4,
                      py: 2,
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      borderRadius: 3,
                      fontWeight: 'bold'
                    }}
                    endIcon={<KeyboardArrowRight />}
                    onClick={() => navigate('/login')}
                  >
                    ACCÉDER À LA PLATEFORME
                  </Button>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  {testimonials.map((testimonial, index) => (
                    <Card key={index} sx={{
                      background: 'rgba(255,255,255,0.9)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: 3,
                      p: 3,
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateX(8px)' }
                    }}>
                      <Stack direction="row" spacing={2} alignItems="start">
                        <Avatar sx={{ bgcolor: '#667eea' }}>
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1 }}>
                            "{testimonial.text}"
                          </Typography>
                          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                            {testimonial.name} - {testimonial.company}
                          </Typography>
                          <Stack direction="row" spacing={0.5} sx={{ mt: 1 }}>
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} sx={{ color: '#ffc107', fontSize: 16 }} />
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </Card>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Slide>

        {/* Call to Action */}
        <Zoom in={showContent} timeout={1600}>
          <Box sx={{ 
            py: 8, 
            textAlign: 'center',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 4,
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
              Prêt à Transformer Votre Business ?
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
              Rejoignez plus de 200 agences qui font confiance à AI-Drive Professional
            </Typography>
            
            <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: '#ff4081', fontWeight: 'bold' }}>
                  200+
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Agences Partenaires
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                  15K+
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Véhicules Connectés
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ color: '#ff9800', fontWeight: 'bold' }}>
                  99.8%
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Satisfaction Client
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Zoom>

      </Container>

      {/* Floating Action Button */}
      <Fab
        color="secondary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: '#ff4081',
          '&:hover': { bgcolor: '#e91e63' }
        }}
        onClick={() => navigate('/login')}
      >
        <PlayArrow />
      </Fab>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Accueil;