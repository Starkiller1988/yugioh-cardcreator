package com.example.demo.YuGiOhCard;



import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "cards")
@Data
@NoArgsConstructor
public class YugiohCard {

@Id
private String id;
private String name;
private String attribute;
private int xyzLevel;
private int normalLevel;
private String type;
private String cardtype;
private String race;
private String description;
private String attack;
private String defence;
private String image;
}
