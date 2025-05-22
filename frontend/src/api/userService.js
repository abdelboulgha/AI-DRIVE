import api from './api';

const mockUsers = [
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'Système',
    email: 'admin@ai-drive.com',
    phone: '+212 661 123456',
    role: 'ADMIN',
    status: 'ACTIVE',
    licenseNumber: 'A123456',
    createdAt: '2023-01-15T10:30:00Z',
    lastLogin: '2025-05-16T08:45:00Z',
    carsCount: 3
  }
];

const UserService = {
  getAllUsers: async (params) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Filtrer et paginer si nécessaire
      let filteredUsers = [...mockUsers];
      
      if (params?.search) {
        const searchLower = params.search.toLowerCase();
        filteredUsers = filteredUsers.filter(user => 
          user.firstName.toLowerCase().includes(searchLower) ||
          user.lastName.toLowerCase().includes(searchLower) ||
          user.email.toLowerCase().includes(searchLower)
        );
      }
      
      if (params?.role) {
        filteredUsers = filteredUsers.filter(user => user.role === params.role);
      }
      
      if (params?.status) {
        filteredUsers = filteredUsers.filter(user => user.status === params.status);
      }
      
      // Compter le total avant pagination
      const total = filteredUsers.length;
      
      // Paginer
      const page = params?.page || 1;
      const limit = params?.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedUsers = filteredUsers.slice(start, end);
      
      return {
        data: paginatedUsers,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit)
        }
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  getUserById: async (id) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const user = mockUsers.find(user => user.id === parseInt(id));
      
      if (!user) {
        throw { response: { status: 404, data: { message: 'Utilisateur non trouvé' } } };
      }
      
      return { data: user };
      
    } catch (error) {
      throw error;
    }
  },
  
  createUser: async (userData) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Créer un nouvel utilisateur mockée
      const newUser = {
        id: Math.max(...mockUsers.map(u => u.id)) + 1,
        ...userData,
        createdAt: new Date().toISOString(),
        lastLogin: null,
        carsCount: 0,
        status: 'ACTIVE'
      };
      
      
      return { 
        success: true, 
        data: newUser,
        message: 'Utilisateur créé avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  updateUser: async (id, userData) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const userIndex = mockUsers.findIndex(user => user.id === parseInt(id));
      
      if (userIndex === -1) {
        throw { response: { status: 404, data: { message: 'Utilisateur non trouvé' } } };
      }
      
      const updatedUser = { 
        ...mockUsers[userIndex], 
        ...userData, 
        updatedAt: new Date().toISOString() 
      };
      
      return { 
        success: true, 
        data: updatedUser,
        message: 'Utilisateur mis à jour avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  deleteUser: async (id) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const userIndex = mockUsers.findIndex(user => user.id === parseInt(id));
      
      if (userIndex === -1) {
        throw { response: { status: 404, data: { message: 'Utilisateur non trouvé' } } };
      }
      
      
      return { 
        success: true,
        message: 'Utilisateur supprimé avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  getUserStats: async () => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Calculer des statistiques à partir des données mockées
      const totalUsers = mockUsers.length;
      const activeUsers = mockUsers.filter(user => user.status === 'ACTIVE').length;
      const inactiveUsers = totalUsers - activeUsers;
      const adminUsers = mockUsers.filter(user => user.role === 'ADMIN').length;
      const managerUsers = mockUsers.filter(user => user.role === 'MANAGER').length;
      const regularUsers = mockUsers.filter(user => user.role === 'USER').length;
      
      return {
        data: {
          totalUsers,
          activeUsers,
          inactiveUsers,
          adminUsers,
          managerUsers,
          regularUsers,
          usersWithCars: mockUsers.filter(user => user.carsCount > 0).length,
          usersWithoutCars: mockUsers.filter(user => user.carsCount === 0).length,
          registrationsByMonth: [
            { month: 'Jan', count: 1 },
            { month: 'Feb', count: 1 },
            { month: 'Mar', count: 1 },
            { month: 'Apr', count: 1 },
            { month: 'May', count: 1 },
            { month: 'Jun', count: 1 },
            { month: 'Jul', count: 0 },
            { month: 'Aug', count: 0 },
            { month: 'Sep', count: 0 },
            { month: 'Oct', count: 0 },
            { month: 'Nov', count: 0 },
            { month: 'Dec', count: 0 }
          ]
        }
      };
      
    } catch (error) {
      throw error;
    }
  }
};

export default UserService;