import { UserData } from "@app/models/auth.models";

export const UserMock: UserData = {
    uid: 'q1w2e3r4t5y6',
    email: 'user@test.com',
    created: new Date(),
    username: 'TestUser69',
    avatar: 'https://test-avatar.svg',
    achievements: [],
    role: 'user'
}
