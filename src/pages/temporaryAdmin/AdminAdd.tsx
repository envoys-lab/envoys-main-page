import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import useCompany, { Company } from "../../hooks/useCompany";
import Config from "../../config";
import Api from "api";
import FileUploader from "components/File/FileUploader";

const AdminAdd: React.FC<{id?: number}> = ({id}) => {
    const params = useParams();
    // const category = isString
    let targetId: number | undefined = undefined;
    let [category, setCategory] = React.useState(params.target);
    if(params.target) {
        targetId = parseInt(params.target);
        if(isNaN(targetId)) {
            targetId = undefined;
        }
    }

    let company: Company | undefined = useCompany(targetId!);
    const form = [
        {
            title: "Название",
            name: "name",
            state: React.useState("")
        },
        {
            title: "Ценная бумага",
            name: "paper",
            state: React.useState("")
        },
        {
            title: "Торговый символ",
            name: "symbol",
            state: React.useState("")
        },
        {
            title: "Отрасль",
            name: "branch",
            state: React.useState("")
        },
        {
            title: "Вид деятельности",
            name: "kind",
            state: React.useState("")
        },
        {
            title: "Руководитель",
            name: "owner",
            state: React.useState("")
        },
        {
            title: "Должность руководителя",
            name: "ownerRank",
            state: React.useState("")
        },
        {
            title: "Адрес",
            name: "address",
            state: React.useState("")
        },
        {
            title: "Телефон/Факс",
            name: "phone",
            state: React.useState("")
        },
        {
            title: "Аудитор",
            name: "auditor",
            state: React.useState("")
        },
        {
            title: "Регистратор",
            name: "registrator",
            state: React.useState("")
        },
        {
            title: "Маркет мейкер",
            name: "marketmaker",
            state: React.useState("")
        },
        {
            title: "Последняя цена",
            name: "lastPrice",
            state: React.useState("")
        },
        {
            title: "Капитализация",
            name: "capitalization",
            state: React.useState("")
        },
        {
            title: "Количество ЦБ",
            name: "quantity",
            state: React.useState("")
        },
        {
            title: "Анкета",
            name: "sv",
            state: React.useState("")
        },
        
    ];
    const [files, setFiles] = React.useState([]);

    React.useEffect(() => {
        if(company) {
            const keys = Object.keys(company!);
            const values = Object.values(company!);
            const keyvalue: {
                [key: string]: string;
            } = {};

            keys.map((key, index) => {
                keyvalue[key] = values[index];
            })

            form.map(item => {
                const set = item.state[1];
                set(keyvalue[item.name]);
            })

            setCategory(company!.category);

            if(company!.files.length > 1) {
                const files = company!.files.split(";");
                setFiles(files);
            }
            
        }
    }, [company])
    

    const send = () => {
        let formData: {[key: string]: string} = {};
        form.map(item => {
            formData[item.name] = item.state[0];
        })

        const suffix = company ? `/${company.id}` : "";
        console.log(files.join(";"));
        Api.method(`/add${suffix}`).post({
            ...formData,
            category: category,
            files: files.join(";")
        }).then(res => {
            if(res && res.id > 0) {
                return window.location.href = "/allinfo/" + res.id;
            } 
        })
    }

    const remove = () => {

        axios.post("${Config.api}/remove/"+ targetId).then(res => {
            console.log(res.data);
        });
    }


    const onFileUploaded = (filename) => {
        setFiles([...files, filename]);
    }
    const removeFile = (filename) => {
        const newFiles = files.filter(file => file !== filename);
        setFiles(newFiles);
    }
    return <>

        <form>
            {form.map((item) => {
                const {name, title, state} = item;
                const [getter, setter] = state;

                return <div key={"" + name} className="form-group">
                    <label>{title}</label>
                    <input type="text" name={"" + name} className="form-control" value={getter} onChange={(val) => setter(val.target.value)} placeholder="" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
            })}
            
            {files.map(file => {
                return <div>
                    File 
                    <a href={`${Config.api}/companies/${file}`} target="blank"> {file}</a>
                    <button onClick={() => removeFile(file)} type="button" className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>x</button>
                </div>
            })}
            <FileUploader onChange={onFileUploaded} to={`companies`} />

            <br></br>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={send}>Submit</button>
            </div>
            <br></br>
            {targetId && (<>
                <div className="form-group">
                    <button type="button" className="btn btn-danger" onClick={remove}>Delete</button>
                </div>
                <br></br>

            </>)
            }
        </form>

    </>;
}

export default AdminAdd;