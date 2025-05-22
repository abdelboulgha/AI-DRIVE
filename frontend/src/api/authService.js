import api from './api';

const authService = {
  login: async (email, password) => {
    try {
      if (email === 'admin@ai-drive.com' && password === 'admin123'){
        
        const isAdmin = email === 'admin@ai-drive.com';
        
        const mockResponse = {
          token: 'demo-token-' + Math.random().toString(36).substr(2, 9),
          role: isAdmin ? 'ADMIN' : 'USER',
          userId: isAdmin ? '1' : '2',
          user: {
            id: isAdmin ? '1' : '2',
            email: email,
            firstName: isAdmin ? 'Admin' : 'Utilisateur',
            lastName: isAdmin ? 'Système' : 'Standard',
            role: isAdmin ? 'ADMIN' : 'USER',
            createdAt: new Date().toISOString()
          }
        };
        
        await new Promise(resolve => setTimeout(resolve, 800));
        
        return mockResponse;
      } else {
        // Simuler une erreur d'authentification
        throw { response: { data: { message: 'Email ou mot de passe incorrect' } } };
      }
    } catch (error) {
      throw error;
    }
  },
  
  forgotPassword: async (email) => {
    try {
      // Simuler un délai de réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        success: true,
        message: 'Un email de réinitialisation a été envoyé si le compte existe'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  resetPassword: async (token, newPassword) => {
    try {
      // Simuler un délai de réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      return {
        success: true,
        message: 'Mot de passe réinitialisé avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  },
  
  isAdmin: () => {
    return localStorage.getItem('userRole') === 'ADMIN';
  },
  
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  
  getCurrentUserId: () => {
    return localStorage.getItem('userId');
  }
};

export default authService;