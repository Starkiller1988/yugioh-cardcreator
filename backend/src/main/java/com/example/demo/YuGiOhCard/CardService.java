package com.example.demo.YuGiOhCard;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class CardService {


    private final CardRepository cardRepository;

    public void createCard(YugiohCard card){
        cardRepository.save(card);
    }

    public Collection<YugiohCard> getCards(){
        return cardRepository.findAll(Sort.by("name"));
    }

    public YugiohCard getCard(String id){
        return cardRepository.findById(id).orElse(null);
    }

    public void deleteCard(String id){
        cardRepository.deleteById(id);
    }


    public void changeCard(String id, YugiohCard changedCard){
        YugiohCard card = cardRepository.findById(id).orElseThrow();

        card.setName(changedCard.getName());
        card.setAttribute(changedCard.getAttribute());
        card.setNormalLevel(changedCard.getNormalLevel());
        card.setXyzLevel(changedCard.getXyzLevel());
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
