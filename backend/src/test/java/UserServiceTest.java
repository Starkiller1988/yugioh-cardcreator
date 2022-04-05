import com.example.demo.LoginRegister.*;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.password.PasswordEncoder;
import static org.assertj.core.api.Assertions.assertThatExceptionOfType;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class UserServiceTest {

    @Test
    void shouldCreateUser() {
        // Given
        UserCreationData userCreationData = new UserCreationData("alice", "123456a.", "123456a.");
        User user = new User(null, "alice", "myVerySecureHash");
        User savedUser = new User("4711", "alice", "myVerySecureHash");

        UserRepository userRepository = mock(UserRepository.class);
        when(userRepository.save(user)).thenReturn(savedUser);

        PasswordEncoder passwordEncoder = mock(PasswordEncoder.class);
        when(passwordEncoder.encode("123456a.")).thenReturn("myVerySecureHash");

        // when
        UserService userService = new UserService(userRepository, passwordEncoder);
        User actual = userService.createUser(userCreationData);

        // Then
        assertThat(actual).isSameAs(savedUser);
    }

    @Test
    void shouldNotCreateUser_userAlreadyExists() {
        // Given
        UserCreationData userCreationData = new UserCreationData("alice", "123456a.", "123456a.");
        User existingUser = new User("0815", "alice", "hash");

        UserRepository userRepository = mock(UserRepository.class);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(existingUser));

        // when
        UserService userService = new UserService(userRepository, mock(PasswordEncoder.class));

        // Then
        assertThatExceptionOfType(UserAlreadyExistsException.class)
                .isThrownBy(() -> userService.createUser(userCreationData))
                .withMessage("user already exists");
    }

    @Test
    void shouldNotCreateUser_passwordsDoNotMatch() {
        // Given
        UserCreationData userCreationData = new UserCreationData("alice", "123456a.", ".987654");

        UserRepository userRepository = mock(UserRepository.class);
        PasswordEncoder passwordEncoder = mock(PasswordEncoder.class);

        // when
        UserService userService = new UserService(userRepository, passwordEncoder);

        // Then
        assertThatExceptionOfType(PasswordsDoNotMatchException.class)
                .isThrownBy(() -> userService.createUser(userCreationData))
                .withMessage("passwords do not match");
    }

    @Test
    void shouldFindUserByUsername() {
        User user = new User("1234", "bob", "hashedPassword");

        UserRepository userRepository = mock(UserRepository.class);
        when(userRepository.findByUsername("bob")).thenReturn(Optional.of(user));

        UserService userService = new UserService(userRepository, mock(PasswordEncoder.class));

        assertThat(userService.findByUsername("bob")).contains(user);
    }


}
