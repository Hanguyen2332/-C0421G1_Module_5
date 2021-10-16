package com.exam_module5_continue.model.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String phone;
    private String email;
    private String startime;
    private String endTime;
    private int busType;
    //n-1: location
    @JsonManagedReference
    @ManyToOne(targetEntity = BusLocation.class)
    @JoinColumn(referencedColumnName = "id")
    private BusLocation startingPoint;
    //n-1: location
    @JsonManagedReference
    @ManyToOne(targetEntity = BusLocation.class)
    @JoinColumn(referencedColumnName = "id")
    private BusLocation destination;

    public Bus() {
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartime() {
        return startime;
    }

    public void setStartime(String startime) {
        this.startime = startime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public void setBusType(int busType) {
        this.busType = busType;
    }

    public BusLocation getStartingPoint() {
        return startingPoint;
    }

    public void setStartingPoint(BusLocation startingPoint) {
        this.startingPoint = startingPoint;
    }

    public BusLocation getDestination() {
        return destination;
    }

    public void setDestination(BusLocation destination) {
        this.destination = destination;
    }

    public Integer getBusType() {
        return busType;
    }

    public void setBusType(Integer busType) {
        this.busType = busType;
    }
}

