package com.exam_module5_continue.model.repository;


import com.exam_module5_continue.model.entity.BusLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusLocationRepository extends JpaRepository<BusLocation,Integer> {
}
