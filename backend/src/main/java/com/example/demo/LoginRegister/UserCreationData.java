package com.example.demo.LoginRegister;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreationData {

    private String username;
    private String password;
    private String passwordAgain;
}
