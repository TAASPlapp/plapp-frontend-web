export class UserDetails {
    userId: number;
    username: string;
    firstName: string;
    lastName: string;
    bio: string;
    birthdate: Date;
    profilePicture: string;

    constructor(userId = -1, profilePicture = "", username = "",
                firstName = "", lastName = "", bio = "") {
        this.userId = userId
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bio = bio;
        this.birthdate = new Date("2019-01-16");
        this.profilePicture = profilePicture;
    }
}
