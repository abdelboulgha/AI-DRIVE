package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.entity.Vehicle;
import com.example.backend.repository.VehicleRepository;
import com.example.backend.service.AuthService;
import com.example.backend.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {

    private final VehicleService vehicleService;
    private final AuthService authService;
    private VehicleRepository vehicleRepository;

    @Autowired
    public VehicleController(VehicleService vehicleService, AuthService authService, VehicleRepository vehicleRepository) {
        this.vehicleService = vehicleService;
        this.authService = authService;
        this.vehicleRepository = vehicleRepository;
    }
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Vehicle>> getVehiclesByUserId(@PathVariable Long userId) {
        List<Vehicle> vehicles = vehicleService.getVehiclesByUserId(userId);
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleService.getAllVehicles();
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    @PostMapping("/vehicles/create")
    public ResponseEntity<Vehicle> createVehicle(@RequestBody Vehicle vehicle) {
        try {
            if (vehicleRepository.existsByLicensePlate(vehicle.getLicensePlate())) {
                throw new RuntimeException("Un véhicule avec cette plaque d'immatriculation existe déjà");
            }
            if (vehicle.getStatus() == null) {
                vehicle.setStatus("ACTIF");
            }

            if (vehicle.getLastActivity() == null) {
                vehicle.setLastActivity(LocalDateTime.now());
            }

            Vehicle savedVehicle = vehicleRepository.save(vehicle);
            return new ResponseEntity<>(savedVehicle, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la création du véhicule: " + e.getMessage());
        }
    }

    @GetMapping("/user")
    public ResponseEntity<List<Vehicle>> getVehiclesByUser(
            @RequestHeader("Authorization") String token) {
        User user = authService.getUserByToken(token);
        List<Vehicle> vehicles = vehicleService.getVehiclesByUserId(user.getId());
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    @PostMapping("/{vehicleId}/assign")
    public ResponseEntity<?> assignVehicleToUser(
            @PathVariable Long vehicleId,
            @RequestHeader("Authorization") String token) {
        User user = authService.getUserByToken(token);
        vehicleService.assignVehicleToUser(user.getId(), vehicleId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getVehicleStats() {
        Map<String, Object> stats = vehicleService.getVehicleStats();
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/stats/user")
    public ResponseEntity<Map<String, Object>> getUserVehicleStats(
            @RequestHeader("Authorization") String token) {
        User user = authService.getUserByToken(token);
        Map<String, Object> stats = vehicleService.getVehicleStatsByUserId(user.getId());
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Vehicle>> getVehiclesByStatus(
            @PathVariable String status) {
        List<Vehicle> vehicles = vehicleService.getVehiclesByStatus(status);
        return ResponseEntity.ok(vehicles);
    }

    @GetMapping("/fuel-type/{fuelType}")
    public ResponseEntity<List<Vehicle>> getVehiclesByFuelType(
            @PathVariable String fuelType) {
        List<Vehicle> vehicles = vehicleService.getVehiclesByFuelType(fuelType);
        return ResponseEntity.ok(vehicles);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteVehicleUnsecured(@PathVariable Long id) {
        try {
            // Récupérer le véhicule
            Vehicle vehicle = vehicleService.getVehicleById(id);
            if (vehicle == null) {
                return new ResponseEntity<>("Véhicule introuvable", HttpStatus.NOT_FOUND);
            }
            vehicleService.deleteVehicle(id);

            return new ResponseEntity<>("Véhicule supprimé avec succès", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Erreur lors de la suppression: " + e.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //yarbii
    @PutMapping("/update-unsecured/{id}")
    public ResponseEntity<Vehicle> updateVehicleUnsecured(
            @PathVariable Long id,
            @RequestBody Vehicle vehicleDetails) {
        try {
            Vehicle existingVehicle = vehicleService.getVehicleById(id);
            if (existingVehicle == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }
            if (vehicleDetails.getBrand() != null) {
                existingVehicle.setBrand(vehicleDetails.getBrand());
            }
            if (vehicleDetails.getModel() != null) {
                existingVehicle.setModel(vehicleDetails.getModel());
            }
            if (vehicleDetails.getColor() != null) {
                existingVehicle.setColor(vehicleDetails.getColor());
            }
            if (vehicleDetails.getYear() != null) {
                existingVehicle.setYear(vehicleDetails.getYear());
            }
            if (vehicleDetails.getMileage() != null) {
                existingVehicle.setMileage(vehicleDetails.getMileage());
            }
            if (vehicleDetails.getFuelType() != null) {
                existingVehicle.setFuelType(vehicleDetails.getFuelType());
            }
            if (vehicleDetails.getSafetyScore() != null) {
                existingVehicle.setSafetyScore(vehicleDetails.getSafetyScore());
            }
            if (vehicleDetails.getStatus() != null) {
                existingVehicle.setStatus(vehicleDetails.getStatus());
            }
            existingVehicle.updateActivity();
            Vehicle updatedVehicle = vehicleRepository.save(existingVehicle);

            return new ResponseEntity<>(updatedVehicle, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null,
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}