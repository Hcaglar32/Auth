import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Homepage() {
    const { user, logout } = useContext(AuthContext);
    return (
        <>
            <h1>Burası Ana Sayfa</h1>
            {user ?
                <>
                    <h2>{user.email} Giriş Yaptı</h2>
                </>
                :
                <>
                    <p>Kullanıcı Verisi Yok</p>
                </>
            }
        </>

    )
}
export default Homepage;