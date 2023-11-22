import moongose from 'mongoose';

const UserSchema = new moongose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 3,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: [],
        },
        location: {
            type: String,
            default: "",
        },
        occupation: {
            type: String,
            default: "",
        },
        viewedProfile: {
            type: Number,
        },
        impressions: {
            type: Number,
        },
    },
    { timestamps: true}
);

const User = moongose.model("User", UserSchema);
export default User;