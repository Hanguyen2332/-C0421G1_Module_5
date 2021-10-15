package com.exam_module5_continue.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.List;


@Entity
@CrossOrigin(origins = "*")
public class BusLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    //1-n:Bus
    @JsonBackReference
    @OneToMany(mappedBy = "startingPoint", cascade = CascadeType.ALL)
    private List<Bus> listBus;
    //1-n:Bus
    @JsonBackReference
    @OneToMany(mappedBy = "destination", cascade = CascadeType.ALL)
    private List<Bus> listBusArrival;

    public BusLocation() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
