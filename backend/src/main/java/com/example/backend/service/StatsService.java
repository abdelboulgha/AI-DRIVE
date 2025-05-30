package com.example.backend.service;

import com.example.backend.dto.DashboardDataDTO;
import com.example.backend.dto.DeviceActivityDTO;
import com.example.backend.dto.StatsSummaryDTO;
import com.example.backend.entity.AccelerometerData;
import com.example.backend.entity.GPSData;
import com.example.backend.entity.GyroscopeData;
import com.example.backend.entity.User;
import com.example.backend.repository.AccelerometerRepository;
import com.example.backend.repository.GPSRepository;
import com.example.backend.repository.GyroscopeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class StatsService {

    private final AccelerometerRepository accelerometerRepository;
    private final GPSRepository gpsRepository;
    private final GyroscopeRepository gyroscopeRepository;

    @Autowired
    public StatsService(AccelerometerRepository accelerometerRepository,
                        GPSRepository gpsRepository,
                        GyroscopeRepository gyroscopeRepository) {
        this.accelerometerRepository = accelerometerRepository;
        this.gpsRepository = gpsRepository;
        this.gyroscopeRepository = gyroscopeRepository;
    }

    public StatsSummaryDTO getStatsSummary() {
        StatsSummaryDTO summary = new StatsSummaryDTO();

        // Compter les appareils uniques
        Set<String> uniqueDevices = new HashSet<>();
        uniqueDevices.addAll(accelerometerRepository.findDistinctDeviceIds());
        uniqueDevices.addAll(gpsRepository.findDistinctDeviceIds());
        uniqueDevices.addAll(gyroscopeRepository.findDistinctDeviceIds());

        summary.setActiveDevices(uniqueDevices.size());
        summary.setTotalGPSPoints(gpsRepository.count());
        summary.setTotalAccelerometerReadings(accelerometerRepository.count());
        summary.setTotalGyroscopeReadings(gyroscopeRepository.count());

        return summary;
    }

    public StatsSummaryDTO getStatsSummaryByUser(User user) {
        StatsSummaryDTO summary = new StatsSummaryDTO();

        // Compter les appareils uniques pour cet utilisateur
        Set<String> uniqueDevices = new HashSet<>();
        uniqueDevices.addAll(accelerometerRepository.findDistinctDeviceIdsByUser(user));
        uniqueDevices.addAll(gpsRepository.findDistinctDeviceIdsByUser(user));
        uniqueDevices.addAll(gyroscopeRepository.findDistinctDeviceIdsByUser(user));

        summary.setActiveDevices(uniqueDevices.size());
        summary.setTotalGPSPoints(gpsRepository.findByUser(user).size());
        summary.setTotalAccelerometerReadings(accelerometerRepository.findByUser(user).size());
        summary.setTotalGyroscopeReadings(gyroscopeRepository.findByUser(user).size());

        return summary;
    }

    public List<String> getAllDeviceIds() {
        Set<String> uniqueDevices = new HashSet<>();
        uniqueDevices.addAll(accelerometerRepository.findDistinctDeviceIds());
        uniqueDevices.addAll(gpsRepository.findDistinctDeviceIds());
        uniqueDevices.addAll(gyroscopeRepository.findDistinctDeviceIds());

        return new ArrayList<>(uniqueDevices);
    }

    public List<String> getDeviceIdsByUser(User user) {
        Set<String> uniqueDevices = new HashSet<>();
        uniqueDevices.addAll(accelerometerRepository.findDistinctDeviceIdsByUser(user));
        uniqueDevices.addAll(gpsRepository.findDistinctDeviceIdsByUser(user));
        uniqueDevices.addAll(gyroscopeRepository.findDistinctDeviceIdsByUser(user));

        return new ArrayList<>(uniqueDevices);
    }

    public DashboardDataDTO getDashboardData() {
        DashboardDataDTO dashboardData = new DashboardDataDTO();

        // Récupérer les statistiques générales
        StatsSummaryDTO summary = getStatsSummary();
        dashboardData.setActiveDevices(summary.getActiveDevices());
        dashboardData.setTotalGPSPoints(summary.getTotalGPSPoints());
        dashboardData.setTotalAccelerometerReadings(summary.getTotalAccelerometerReadings());
        dashboardData.setTotalGyroscopeReadings(summary.getTotalGyroscopeReadings());

        // Obtenir les données récentes (dernières 24h)
        LocalDateTime yesterday = LocalDateTime.now().minusDays(1);

        List<GPSData> recentGPSData = gpsRepository.findByTimestampAfter(yesterday);
        List<AccelerometerData> recentAccelerometerData = accelerometerRepository.findByTimestampAfter(yesterday);
        List<GyroscopeData> recentGyroscopeData = gyroscopeRepository.findByTimestampAfter(yesterday);

        dashboardData.setRecentGPSData(recentGPSData);
        dashboardData.setRecentAccelerometerData(recentAccelerometerData);
        dashboardData.setRecentGyroscopeData(recentGyroscopeData);

        // Générer des activités d'appareils
        List<DeviceActivityDTO> activities = generateDeviceActivities(recentGPSData, recentAccelerometerData, recentGyroscopeData);
        dashboardData.setDeviceActivities(activities);

        return dashboardData;
    }

    public DashboardDataDTO getDashboardDataByUser(User user) {
        DashboardDataDTO dashboardData = new DashboardDataDTO();

        // Récupérer les statistiques pour l'utilisateur
        StatsSummaryDTO summary = getStatsSummaryByUser(user);
        dashboardData.setActiveDevices(summary.getActiveDevices());
        dashboardData.setTotalGPSPoints(summary.getTotalGPSPoints());
        dashboardData.setTotalAccelerometerReadings(summary.getTotalAccelerometerReadings());
        dashboardData.setTotalGyroscopeReadings(summary.getTotalGyroscopeReadings());

        // Obtenir les données récentes (dernières 24h) pour l'utilisateur
        LocalDateTime yesterday = LocalDateTime.now().minusDays(1);

        List<GPSData> recentGPSData = gpsRepository.findByUserAndTimestampAfter(user, yesterday);
        List<AccelerometerData> recentAccelerometerData = accelerometerRepository.findByUserAndTimestampAfter(user, yesterday);
        List<GyroscopeData> recentGyroscopeData = gyroscopeRepository.findByUserAndTimestampAfter(user, yesterday);

        dashboardData.setRecentGPSData(recentGPSData);
        dashboardData.setRecentAccelerometerData(recentAccelerometerData);
        dashboardData.setRecentGyroscopeData(recentGyroscopeData);

        // Générer des activités d'appareils pour cet utilisateur
        List<DeviceActivityDTO> activities = generateDeviceActivities(recentGPSData, recentAccelerometerData, recentGyroscopeData);
        dashboardData.setDeviceActivities(activities);

        return dashboardData;
    }

    private List<DeviceActivityDTO> generateDeviceActivities(List<GPSData> gpsData,
                                                             List<AccelerometerData> accelerometerData,
                                                             List<GyroscopeData> gyroscopeData) {
        List<DeviceActivityDTO> activities = new ArrayList<>();

        if (!gpsData.isEmpty()) {
            activities.addAll(gpsData.stream()
                    .limit(10)
                    .map(data -> {
                        DeviceActivityDTO activity = new DeviceActivityDTO();
                        activity.setDeviceId(data.getDeviceId());
                        activity.setActivityType("GPS");
                        activity.setTimestamp(data.getTimestamp());
                        activity.setDescription("Localisation enregistrée à " +
                                data.getLatitude() + ", " + data.getLongitude());
                        return activity;
                    })
                    .collect(Collectors.toList()));
        }

        return activities.stream()
                .sorted((a1, a2) -> a2.getTimestamp().compareTo(a1.getTimestamp()))
                .limit(20)
                .collect(Collectors.toList());
    }
}