package br.com.days.primeiro_projeto_spring_boot.controler;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class PrimeiroControler {

    @GetMapping("/first")
    public String firstMethod() {
        return "my firt api rest";
    }

}
