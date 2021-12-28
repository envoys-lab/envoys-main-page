import Api from "api";
import React from "react";

const FileUploader: React.FC<{to: string, onChange: (filename: string) => void}> = ({to, onChange}) => {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(selectedFile === null) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("to", to);
        const alias = window.prompt("Name file", "Мой файл");
        formData.append("alias", alias);

        Api.method("/files/upload", {
            "Content-Type": "multipart/form-data",
        }).post(formData).then(res => {
            setLoading(false);
            onChange(res);
        });

    }, [selectedFile]);
    return <>
        {
            loading ? <span>Loading</span> : <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        }
    </>
}

export default FileUploader;