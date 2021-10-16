package com.exam_module5_continue.model.repository;

import com.exam_module5_continue.model.entity.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusRepository extends JpaRepository<Bus,Integer> {
    @Query(value = "SELECT id,`name`, bus_type, email, phone\n" +
            "FROM bus b\n" +
            "WHERE (?1 IS NULL OR b.name LIKE %?1% )\n" +
            "AND (?2 IS NULL OR starting_point_id = ?2);",

            countQuery = "SELECT id,`name`, bus_type, email, phone\n" +
                    "FROM bus b\n" +
                    "WHERE (?1 IS NULL OR b.name LIKE %?1%)\n" +
                    "AND (?2 IS NULL OR starting_point_id = ?2);",
            nativeQuery = true)
    Page<Bus> searchByKeyword(String name, Integer locationId, Pageable pageable);
}
