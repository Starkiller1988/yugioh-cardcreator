package com.example.demo.LoginRegister;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User createUser(UserCreationData userCreationData) {
        LOGGER.info("trying to create user with username {}", userCreationData.getUsername());
        if (userCreationDataIsValid(userCreationData)) {
            User user = new User(null, userCreationData.getUsername(), passwordEncoder.encode(userCreationData.getPassword()));
            User saved = userRepository.save(user);
            LOGGER.info("created user {} with id {}", userCreationData.getUsername(), saved.getId());
            return saved;
        }
        throw new PasswordsDoNotMatchException();
    }

    private boolean userCreationDataIsValid(UserCreationData userCreationData) {
        userRepository.findByUsername(userCreationData.getUsername())
                .ifPresent(user -> {
                    throw new UserAlreadyExistsException();
                });
        return Objects.equals(userCreationData.getPassword(), userCreationData.getPasswordAgain());
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}