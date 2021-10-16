package com.exam_module5_continue.model.service;

import com.exam_module5_continue.model.entity.Bus;
import com.exam_module5_continue.model.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IBusServiceImpl implements IBusService {
    @Autowired
    private BusRepository busRepository;
    @Override
    public Page<Bus> findAll(Pageable pageable) {
        return this.busRepository.findAll(pageable);
    }

    @Override
    public Optional<Bus> findById(Integer id) {
        return this.busRepository.findById(id);
    }

    @Override
    public void delete(Integer id) {
        this.busRepository.deleteById(id);
    }

    @Override
    public Bus save(Bus object) {
        return this.busRepository.save(object);
    }

    @Override
    public Page<Bus> findByKeyword(String name, Integer locationId, Pageable pageable) {
        return this.busRepository.searchByKeyword(name,locationId,pageable);
    }
}
