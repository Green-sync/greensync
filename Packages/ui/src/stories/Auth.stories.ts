import { AuthComponent } from "../components";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    component: AuthComponent,
    title: "Components/Auth",
    args: {
        option: "login", theme: "default"
    }
}  satisfies Meta<typeof AuthComponent>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
    args: {
        userData: {
        email: "",
        password: "",
        lastName: "",
        firstName: "string",
        },
        authType: "login",
        authenticate: () => "",
        handleInputChange: () => "",
        image: "/login.jpeg",
        option: "login",
    }
}

export const Register: Story = {
    args: {
        userData: {
        email: "",
        password: "",
        lastName: "",
        firstName: "",
        },
        authType: "register",
        authenticate: () => "",
        handleInputChange: () => "",
        image: "/login.jpeg",
        option: "login",
    }
}
