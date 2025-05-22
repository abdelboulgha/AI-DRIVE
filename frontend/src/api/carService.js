import api from './api';

const mockCars = [
  {
    id: 1,
    brand: 'Renault',
    model: 'Clio',
    year: 2020,
    licensePlate: '123456-A-1',
    color: 'Rouge',
    userId: 1,
    status: 'ACTIVE',
    lastActivity: '2025-05-17T08:15:00Z',
    fuelType: 'Essence',
    mileage: 28500,
    deviceId: 'D2001',
    vin: 'VF1RFB00067123456',
    safetyScore: 87,
    alertsCount: 2,
    owner: {
      id: 1,
      firstName: 'Admin',
      lastName: 'Système'
    }
  }
];

// Service pour la gestion des voitures
const CarService = {
  getAllCars: async (params) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Filtrer les voitures en fonction des paramètres
      let filteredCars = [...mockCars];
      
      if (params?.userId) {
        filteredCars = filteredCars.filter(car => car.userId === parseInt(params.userId));
      }
      
      if (params?.search) {
        const searchLower = params.search.toLowerCase();
        filteredCars = filteredCars.filter(car => 
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.licensePlate.toLowerCase().includes(searchLower) ||
          `${car.owner.firstName} ${car.owner.lastName}`.toLowerCase().includes(searchLower)
        );
      }
      
      if (params?.status) {
        filteredCars = filteredCars.filter(car => car.status === params.status);
      }
      
      // Trier les résultats
      if (params?.sort) {
        const [field, order] = params.sort.split(':');
        filteredCars.sort((a, b) => {
          let comparison = 0;
          
          if (field === 'brand') {
            comparison = a.brand.localeCompare(b.brand);
          } else if (field === 'model') {
            comparison = a.model.localeCompare(b.model);
          } else if (field === 'year') {
            comparison = a.year - b.year;
          } else if (field === 'lastActivity') {
            comparison = new Date(a.lastActivity) - new Date(b.lastActivity);
          } else if (field === 'safetyScore') {
            comparison = a.safetyScore - b.safetyScore;
          }
          
          return order === 'desc' ? -comparison : comparison;
        });
      }
      
      // Compter le total avant pagination
      const total = filteredCars.length;
      
      // Paginer
      const page = params?.page || 1;
      const limit = params?.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedCars = filteredCars.slice(start, end);
      
      return {
        data: paginatedCars,
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
  
  getCarById: async (id) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const car = mockCars.find(car => car.id === parseInt(id));
      
      if (!car) {
        throw { response: { status: 404, data: { message: 'Véhicule non trouvé' } } };
      }
      
      return { data: car };
      
    } catch (error) {
      throw error;
    }
  },
  
  getCarsByUserId: async (userId, params = {}) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 700));
      
      // Filtrer les voitures de l'utilisateur
      const userCars = mockCars.filter(car => car.userId === parseInt(userId));
      
      let filteredCars = [...userCars];
      
      if (params?.search) {
        const searchLower = params.search.toLowerCase();
        filteredCars = filteredCars.filter(car => 
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.licensePlate.toLowerCase().includes(searchLower)
        );
      }
      
      if (params?.status) {
        filteredCars = filteredCars.filter(car => car.status === params.status);
      }
      
      // Compter le total avant pagination
      const total = filteredCars.length;
      
      // Paginer
      const page = params?.page || 1;
      const limit = params?.limit || 10;
      const start = (page - 1) * limit;
      const end = start + limit;
      
      const paginatedCars = filteredCars.slice(start, end);
      
      return {
        data: paginatedCars,
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
  
  createCar: async (carData) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Créer une nouvelle voiture 
      const newCar = {
        id: Math.max(...mockCars.map(c => c.id)) + 1,
        ...carData,
        status: 'ACTIVE',
        lastActivity: null,
        alertsCount: 0,
        safetyScore: 100
      };
      
      
      return { 
        success: true, 
        data: newCar,
        message: 'Véhicule créé avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  updateCar: async (id, carData) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const carIndex = mockCars.findIndex(car => car.id === parseInt(id));
      
      if (carIndex === -1) {
        throw { response: { status: 404, data: { message: 'Véhicule non trouvé' } } };
      }
      
      // Simulation de la voiture mise à jour
      const updatedCar = { 
        ...mockCars[carIndex], 
        ...carData, 
        updatedAt: new Date().toISOString() 
      };
      
      return { 
        success: true, 
        data: updatedCar,
        message: 'Véhicule mis à jour avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  deleteCar: async (id) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const carIndex = mockCars.findIndex(car => car.id === parseInt(id));
      
      if (carIndex === -1) {
        throw { response: { status: 404, data: { message: 'Véhicule non trouvé' } } };
      }
      
      return { 
        success: true,
        message: 'Véhicule supprimé avec succès'
      };
      
    } catch (error) {
      throw error;
    }
  },
  
  getCarStats: async (userId) => {
    try {
      // Simuler un délai réseau
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Filtrer les voitures de l'utilisateur si nécessaire
      const relevantCars = userId 
        ? mockCars.filter(car => car.userId === parseInt(userId))
        : mockCars;
      
      // Calculer des statistiques à partir des données mockées
      const totalCars = relevantCars.length;
      const activeCars = relevantCars.filter(car => car.status === 'ACTIVE').length;
      const inactiveCars = totalCars - activeCars;
      
      // Calculer la répartition par marque
      const brandDistribution = {};
      relevantCars.forEach(car => {
        if (!brandDistribution[car.brand]) {
          brandDistribution[car.brand] = 0;
        }
        brandDistribution[car.brand]++;
      });
      
      const brandStats = Object.entries(brandDistribution).map(([brand, count]) => ({
        brand,
        count,
        percentage: Math.round((count / totalCars) * 100)
      }));
      
      // Calculer la répartition par année
      const yearDistribution = {};
      relevantCars.forEach(car => {
        if (!yearDistribution[car.year]) {
          yearDistribution[car.year] = 0;
        }
        yearDistribution[car.year]++;
      });
      
      const yearStats = Object.entries(yearDistribution).map(([year, count]) => ({
        year: parseInt(year),
        count
      })).sort((a, b) => a.year - b.year);
      
      // Calculer la répartition par type de carburant
      const fuelDistribution = {};
      relevantCars.forEach(car => {
        if (!fuelDistribution[car.fuelType]) {
          fuelDistribution[car.fuelType] = 0;
        }
        fuelDistribution[car.fuelType]++;
      });
      
      const fuelStats = Object.entries(fuelDistribution).map(([fuelType, count]) => ({
        fuelType,
        count,
        percentage: Math.round((count / totalCars) * 100)
      }));
      
      // Calculer la répartition par score de sécurité
      const safetyScoreRanges = {
        excellent: relevantCars.filter(car => car.safetyScore >= 90).length,
        good: relevantCars.filter(car => car.safetyScore >= 80 && car.safetyScore < 90).length,
        average: relevantCars.filter(car => car.safetyScore >= 70 && car.safetyScore < 80).length,
        poor: relevantCars.filter(car => car.safetyScore < 70).length
      };
      
      const avgSafetyScore = relevantCars.length > 0
        ? Math.round(relevantCars.reduce((sum, car) => sum + car.safetyScore, 0) / relevantCars.length)
        : 0;
      
      return {
        data: {
          totalCars,
          activeCars,
          inactiveCars,
          brandStats,
          yearStats,
          fuelStats,
          safetyScoreRanges,
          avgSafetyScore,
          alertsCount: relevantCars.reduce((sum, car) => sum + car.alertsCount, 0),
          totalMileage: relevantCars.reduce((sum, car) => sum + car.mileage, 0)
        }
      };
      
    } catch (error) {
      throw error;
    }
  }
};

export default CarService;