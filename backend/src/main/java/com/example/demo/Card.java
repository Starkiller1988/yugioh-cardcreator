package com.example.demo;


import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "cards")
@Data
@NoArgsConstructor
public class Card {

@Id
private String id;
private String name;
private String attribute;
private int level;
private String type;
private String race;
private String description;
private int attack;
private int defence;
private String image;


}
