const { useRouter } = require("next/router");
const { Image } = require("react-bootstrap");
const { useSelector } = require("react-redux");
const { default: LoginButton } = require("./login");

import styles from './profile.module.css'

const ProfilePicture = () => {
    const user = useSelector(state => state.user);
    const router = useRouter();

    if (user.loggedIn) {
        return (
            <a onClick={() => router.push('/dashboard')}><Image fluid className={styles.avatar} src={user.avatar.url} alt="profile picture"/></a>
        )
    }

    return (
        <LoginButton>Login</LoginButton>
    )
}

export default ProfilePicture;