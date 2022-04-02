import com.example.demo.Card;
import com.example.demo.CardRepository;
import com.example.demo.CardService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class CardServiceTest {

    @Test
    void shouldAddNewCard(){

        Card card1 = new Card();
        card1.setName("Blue-Eyes Dark Dragon");
        card1.setAttribute("Dark");
        card1.setLevel(12);
        card1.setType("Effect Monster");
        card1.setRace("Dragon");
        card1.setDescription("Hahahahahaha");
        card1.setAttack(3000);
        card1.setDefence(2500);
        card1.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");

        CardRepository repository = Mockito.mock(CardRepository.class);
        CardService cardService = new CardService(repository);

        cardService.createCard(card1);

        verify(repository).save(card1);
    }



    @Test
    void shouldGetSpecificCard(){

        Card card1 = new Card();
        card1.setName("Blue-Eyes Dark Dragon");
        card1.setAttribute("Dark");
        card1.setLevel(12);
        card1.setType("Effect Monster");
        card1.setRace("Dragon");
        card1.setDescription("Hahahahahaha");
        card1.setAttack(3000);
        card1.setDefence(2500);
        card1.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");

        CardRepository repository = Mockito.mock(CardRepository.class);
        Mockito.when(repository.findById(card1.getId())).thenReturn(Optional.of(card1));

        CardService cardService = new CardService(repository);

        Card actual = cardService.getCard(card1.getId());

        assertThat(actual).isEqualTo(card1);
    }

    @Test
    void shouldDeleteCard(){

        String id = "21313h131gccg13132213";

        CardRepository repository = Mockito.mock(CardRepository.class);
        CardService cardService = new CardService(repository);

        cardService.deleteCard(id);

        verify(repository).deleteById(id);
    }

    @Test
    void shouldChangeCard(){

        Card card1 = new Card();
        card1.setId("2324");
        card1.setName("Blue-Eyes Dark Dragon");
        card1.setAttribute("Dark");
        card1.setLevel(12);
        card1.setType("Effect Monster");
        card1.setRace("Dragon");
        card1.setDescription("Hahahahahaha");
        card1.setAttack(3000);
        card1.setDefence(2500);
        card1.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");

        Card savedCard = new Card();
        savedCard.setId("2324");
        savedCard.setName("Blue-Eyes Dark Dragon");
        savedCard.setAttribute("Dark");
        savedCard.setLevel(10);
        savedCard.setType("Normal Monster");
        savedCard.setRace("Dragon");
        savedCard.setDescription("Hahahahahaha");
        savedCard.setAttack(3000);
        savedCard.setDefence(2500);
        savedCard.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");


        CardRepository repository = Mockito.mock(CardRepository.class);
        Mockito.when(repository.findById("2324")).thenReturn(Optional.of(card1));

        CardService cardService = new CardService(repository);

        cardService.changeCard("2324", savedCard);

        verify(repository).save(savedCard);


    }

    @Test
    void shouldDeleteAllCards(){
        Card card1 = new Card();
        card1.setId("2324");
        card1.setName("Blue-Eyes Dark Dragon");
        card1.setAttribute("Dark");
        card1.setLevel(12);
        card1.setType("Effect Monster");
        card1.setRace("Dragon");
        card1.setDescription("Hahahahahaha");
        card1.setAttack(3000);
        card1.setDefence(2500);
        card1.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");

        Card savedCard = new Card();
        savedCard.setId("2324");
        savedCard.setName("Blue-Eyes Dark Dragon");
        savedCard.setAttribute("Dark");
        savedCard.setLevel(10);
        savedCard.setType("Normal Monster");
        savedCard.setRace("Dragon");
        savedCard.setDescription("Hahahahahaha");
        savedCard.setAttack(3000);
        savedCard.setDefence(2500);
        savedCard.setImage("https://i.pinimg.com/originals/e5/3e/5c/e53e5cda7e26ef3569277b41e48cbda0.jpg");

        CardRepository repository = Mockito.mock(CardRepository.class);

        CardService cardService = new CardService(repository);

        cardService.deleteCards();

        verify(repository).deleteAll();
    }



}
