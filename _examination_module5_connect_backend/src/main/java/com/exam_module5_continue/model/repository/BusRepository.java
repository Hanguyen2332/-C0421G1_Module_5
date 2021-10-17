package com.exam_module5_continue.model.repository;

import com.exam_module5_continue.model.entity.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BusRepository extends JpaRepository<Bus,Integer> {
    //Note: 1. tên field: trùng tên columns trong DB (vì native query)
    //      2. @Query(value = ... ,countQuery=...;)  --> chú ý dấu ',' và ';'
    //      3. SELECT * --> Để tránh lỗi 'not fount column xxx'
    @Query(value = "SELECT *" +
            "FROM bus \n" +
            "WHERE (?1 IS NULL OR `name` LIKE %?1% )\n" +
            "AND (?2 IS NULL OR starting_point_id = ?2)",

            countQuery = "SELECT *" +
                    "FROM bus \n" +
                    "WHERE (?1 IS NULL OR `name` LIKE %?1%)\n" +
                    "AND (?2 IS NULL OR starting_point_id = ?2);",
            nativeQuery = true)
    Page<Bus> searchByKeyword(String name, Integer locationId, Pageable pageable);
}
