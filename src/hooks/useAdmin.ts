import React from "react";

const useAdmin = () => {
    const [admin, setAdmin] = React.useState(false);
    const [authKey, setAuthKey] = React.useState(undefined);

    React.useEffect(() => {
        const key = localStorage.getItem("admin_auth_key");
        if(key) {
            setAdmin(true);
            setAuthKey(key);
        }
    }, []);

    return {isAdmin: admin, authKey: authKey};
}

export default useAdmin;
