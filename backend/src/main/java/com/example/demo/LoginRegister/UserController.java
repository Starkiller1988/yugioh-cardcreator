package com.example.demo.LoginRegister;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private static Logger LOGGER = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody UserCreationData userCreationData) {
        LOGGER.info("user with username {} should be created", userCreationData.getUsername());
        try {
            userService.createUser(userCreationData);
            LOGGER.info("user with username {} was created", userCreationData.getUsername());
            return ResponseEntity.status(201).body("user was created");
        } catch (UserAlreadyExistsException e) {
            LOGGER.info("user with username {} already exists", userCreationData.getUsername());
            return ResponseEntity.status(409).body(e.getMessage());
        } catch (PasswordsDoNotMatchException e) {
            LOGGER.info("user with username {} did send passwords that did not match", userCreationData.getUsername());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Token> login(@RequestBody LoginData loginData) {
        LOGGER.info("user with username {} tries to log in", loginData.getUsername());
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginData.getUsername(), loginData.getPassword()));
            return ResponseEntity.ok(new Token(jwtUtils.createToken(new HashMap<>(), loginData.getUsername())));
        } catch (AuthenticationException e) {
            LOGGER.info("user " + loginData.getUsername() + " could not be authenticated", e);
            return ResponseEntity.status(401).build();
        }
    }

}