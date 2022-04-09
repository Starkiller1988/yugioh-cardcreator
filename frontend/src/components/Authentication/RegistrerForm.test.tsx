import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import RegisterForm from "./RegisterForm"

test('that user cannot login', async () => {

    jest.spyOn(window, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 401
        } as Response)
    });

    render(<AuthProvider><RegisterForm /></AuthProvider>, { wrapper: MemoryRouter })

    const loginUsername = screen.getByTestId('login-username');
    const loginPassword = screen.getByTestId('login-password');

    fireEvent.change(loginUsername, { target: { value: 'schabel' }});
    fireEvent.change(loginPassword, { target: { value: 'schabel' }});

    screen.getByTestId('login-button').click();

    await waitFor(() => {
        expect(screen.getByTestId('error-message').textContent).toEqual('Benutzername oder Passwort sind falsch');
    })
})