package com.example.backend.controller;

import com.example.backend.dto.DashboardDataDTO;
import com.example.backend.dto.StatsSummaryDTO;
import com.example.backend.entity.User;
import com.example.backend.service.AuthService;
import com.example.backend.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stats")
@CrossOrigin(origins = "*")
public class StatsController {

    private final StatsService statsService;
    private final AuthService authService;

    @Autowired
    public StatsController(StatsService statsService, AuthService authService) {
        this.statsService = statsService;
        this.authService = authService;
    }

    @GetMapping("/summary")
    public ResponseEntity<StatsSummaryDTO> getStatsSummary(
            @RequestHeader("Authorization") String token) {
        User user = authService.getUserByToken(token);
        StatsSummaryDTO summary = statsService.getStatsSummaryByUser(user);
        return ResponseEntity.ok(summary);
    }
}