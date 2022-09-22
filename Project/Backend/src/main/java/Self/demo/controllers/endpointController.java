package Self.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import Self.demo.services.RandomService;

@RestController
public class endpointController {
    
    @Autowired
    private RandomService randomService;

    @GetMapping(value = "/getWeapon")
    public String getSomething(){
        return randomService.getRandom();
    }
}
