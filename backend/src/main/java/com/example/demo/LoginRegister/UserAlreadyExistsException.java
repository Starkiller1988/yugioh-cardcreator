package com.example.demo.LoginRegister;

public class UserAlreadyExistsException extends IllegalStateException {
    UserAlreadyExistsException(){
    super("user already exists");
    }
}
