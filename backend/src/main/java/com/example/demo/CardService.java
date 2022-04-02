package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CardService {


    private final CardRepository cardRepository;

    public void createCard(Card card){
        cardRepository.save(card);
    }

    public Collection<Card> getCards(){
        return cardRepository.findAll()
                .stream()
                .sorted()
                .toList();
    }

    public Card getCard(String id){
        return cardRepository.findById(id).orElse(null);
    }

    public void deleteCard(String id){
        cardRepository.deleteById(id);
    }


    public void changeCard(String id, Card changedCard){
        Card card = cardRepository.findById(id).orElseThrow();

        card.setName(changedCard.getName());
        card.setAttribute(changedCard.getAttribute());
        card.setLevel(changedCard.getLevel());
        card.setType(changedCard.getType());
        card.setDescription(changedCard.getDescription());
        card.setAttack(changedCard.getAttack());
        card.setDefence(changedCard.getDefence());
        card.setImage(changedCard.getImage());

        cardRepository.save(card);
    }

    public void deleteCards() {
        cardRepository.deleteAll();
    }
}
