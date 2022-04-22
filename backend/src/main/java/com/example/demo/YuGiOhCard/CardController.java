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
    public Collection<YugiohCard> createCard(@RequestBody YugiohCard card){
        cardService.createCard(card);
        return cardService.getCards();
    }

    @GetMapping
    public Collection<YugiohCard> getCards(){
        return cardService.getCards();
    }

   @GetMapping("/{id}")
   public YugiohCard getCard(@PathVariable String id){
        return cardService.getCard(id);
   }

    @PutMapping("/{id}")
    public Collection<YugiohCard> changeCard(@PathVariable String id, @RequestBody YugiohCard card){
        cardService.changeCard(id, card);
        return cardService.getCards();
    }

    @DeleteMapping("/{id}")
    public Collection<YugiohCard> deleteCard(@PathVariable String id){
        cardService.deleteCard(id);
        return cardService.getCards();
    }

    @DeleteMapping()
    public Collection<YugiohCard> deleteCard(){
        cardService.deleteCards();
        return cardService.getCards();
    }



}
