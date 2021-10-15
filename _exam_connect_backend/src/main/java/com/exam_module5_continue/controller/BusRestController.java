package com.exam_module5_continue.controller;

import com.exam_module5_continue.model.entity.Bus;
import com.exam_module5_continue.model.entity.BusLocation;
import com.exam_module5_continue.model.service.IBusLocationService;
import com.exam_module5_continue.model.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class BusRestController {

    @Autowired
    private IBusService iBusService;
    @Autowired
    private IBusLocationService iBusLocationService;


    //getListLocation:
    @GetMapping("/location")
    public ResponseEntity<List<BusLocation>> getListLocation() {
        List<BusLocation> locationList = iBusLocationService.findAll();
        if (locationList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(locationList, HttpStatus.OK);
    }


        //getListBus:
    @GetMapping("/list")
    public ResponseEntity<List<Bus>> getList() {
        List<Bus> busList = iBusService.findAll();
        if (busList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(busList, HttpStatus.OK);
    }

    //create
    @PostMapping
    public ResponseEntity<Bus> createBus(@RequestBody Bus bus) {  //@RequestBody --> function?
        return new ResponseEntity<>(iBusService.save(bus), HttpStatus.OK);
    }

    //Update
    @PatchMapping("/{id}") //update theo id

    public ResponseEntity<Bus> editCategory(@PathVariable Integer id,
                                            @RequestBody Bus bus) {
        Optional<Bus> busOptional = iBusService.findById(id);
        if (!busOptional.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        Bus currentBus = busOptional.get();
//        currentCustomer.setFirstName(customer.getFirstName());
//        currentCustomer.setLastName(customer.getLastName());

        iBusService.save(currentBus);

        return new ResponseEntity<>(currentBus, HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/{id}") //delete theo id

    public ResponseEntity<Bus> deleteCategory(@PathVariable Integer id) {
        Optional<Bus> busOptional = iBusService.findById(id);
        if (!busOptional.isPresent()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        iBusService.delete(id);
        return new ResponseEntity<>(busOptional.get(), HttpStatus.NO_CONTENT);
    }
}
