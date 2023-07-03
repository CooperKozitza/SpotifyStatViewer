import { logout } from "@/redux/user/userActions";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const LogoutButton = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    return (
        <Button
            variant="outline-danger"
            onClick={() => {
                dispatch(logout())
                router.push('/')
            }}
        >
            Log Out
        </Button>
    )
}

export default LogoutButton