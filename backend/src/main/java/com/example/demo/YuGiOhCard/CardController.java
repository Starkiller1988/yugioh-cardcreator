package com.example.demo.YuGiOhCard;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/cards")
public class CardController {

    private final CardService cardService;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Collection<Card> createCard(@RequestBody Card card){
        cardService.createCard(card);
        return cardService.getCards();
    }

    @GetMapping
    public Collection<Card> getCards(){
        return cardService.getCards();
    }

   @GetMapping("/{id}")
   public Card getCard(@PathVariable String id){
        return cardService.getCard(id);
   }

    @PutMapping("/{id}")
    public Collection<Card> changeCard(@PathVariable String id, @RequestBody Card card){
        cardService.changeCard(id, card);
        return cardService.getCards();
    }

    @DeleteMapping("/{id}")
    public Collection<Card> deleteCard(@PathVariable String id){
        cardService.deleteCard(id);
        return cardService.getCards();
    }

    @DeleteMapping()
    public Collection<Card> deleteCard(){
        cardService.deleteCards();
        return cardService.getCards();
    }



}
