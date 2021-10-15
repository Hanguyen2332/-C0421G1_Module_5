package com.exam_module5_continue.model.service;

import com.exam_module5_continue.model.entity.BusLocation;
import com.exam_module5_continue.model.repository.BusLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IBusLocationServiceImpl implements IBusLocationService{

    @Autowired
    private BusLocationRepository busLocationRepos;
    @Override
    public List<BusLocation> findAll() {
        return this.busLocationRepos.findAll();
    }
}
