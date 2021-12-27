import React from "react";

const useAdmin = () => {
    const [admin, setAdmin] = React.useState(false);

    React.useEffect(() => {
        setAdmin(true);
    }, []);

    return admin;
}

export default useAdmin;
