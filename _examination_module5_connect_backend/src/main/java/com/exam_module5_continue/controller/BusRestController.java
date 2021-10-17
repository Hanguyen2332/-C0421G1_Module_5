package com.exam_module5_continue.controller;

import com.exam_module5_continue.model.entity.Bus;
import com.exam_module5_continue.model.entity.BusLocation;
import com.exam_module5_continue.model.service.IBusLocationService;
import com.exam_module5_continue.model.service.IBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
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

    //    //getAllPage + Search
    @GetMapping()
    public ResponseEntity<Page<Bus>> showListBus(@RequestParam(name = "name", required = false) String name,
                                                 @RequestParam(name = "startingPointId", required = false) Integer locationId,
                                                 @PageableDefault() Pageable pageable) {
        Page<Bus> busList = iBusService.findByKeyword(name, locationId, pageable);
        if (busList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(busList, HttpStatus.OK);
    }

//    //getListBus:
//    @GetMapping("/list")
//    public ResponseEntity<Page<Bus>> getBusList(@PageableDefault(value = 3) Pageable pageable) {
//        Page<Bus> busList = iBusService.findAll(pageable);
//        if (busList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//
//        return new ResponseEntity<>(busList, HttpStatus.OK);
//    }

    //findById
    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Integer id) {
        Optional<Bus> busOptional = iBusService.findById(id);
        if (!busOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(busOptional.get(), HttpStatus.OK);
    }

    //    //create
    @PostMapping()
    public ResponseEntity<Bus> createBus(@RequestBody Bus bus) {
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
//        Bus currentBus = busOptional.get();
        iBusService.save(bus);

        return new ResponseEntity<>(bus, HttpStatus.OK);
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
