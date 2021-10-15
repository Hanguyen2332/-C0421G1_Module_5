package com.exam_module5_continue.model.service;

import com.exam_module5_continue.model.entity.Bus;

import java.util.List;
import java.util.Optional;

public interface IBusService {

    List<Bus> findAll();

    Optional<Bus> findById(Integer id);

    void delete(Integer id);

    Bus save(Bus object);
}
