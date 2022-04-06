package com.example.demo.LoginRegister;

public class PasswordsDoNotMatchException extends IllegalStateException {

    PasswordsDoNotMatchException() {
        super("passwords do not match");
    }

}