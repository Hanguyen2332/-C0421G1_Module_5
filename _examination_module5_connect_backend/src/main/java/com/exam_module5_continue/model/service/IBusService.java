package com.exam_module5_continue.model.service;

import com.exam_module5_continue.model.entity.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBusService {

    Page<Bus> findAll(Pageable pageable);

    Optional<Bus> findById(Integer id);

    void delete(Integer id);

    Bus save(Bus object);

    Page<Bus> findByKeyword(String name, Integer locationId, Pageable pageable);
}
