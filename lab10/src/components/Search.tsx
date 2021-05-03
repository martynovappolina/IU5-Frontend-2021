import "./Search.css";
import Card from './Card';
import React, {useState} from 'react';
import { Interface } from "node:readline";

const Search = () => {

    const [data, setData] = useState({name: String, avatar_url: String, url: String,
    location: String, bio: String});
    const [UserName, SetUserName] = useState("");
    const[repositories, SetRepositories] = useState([{name: String, html_url: String}]);

    const user: UserPage = {name : data.name as unknown as string, avatar_url: data.avatar_url as unknown as string, 
        url: data.url as unknown as string, bio: data.bio as unknown as string, 
        location: data.location as unknown as string}; 
    
    const rep:Rep[] =  
        repositories.map ( i => (
            {name: i.name as unknown as string,
            html_url: i.html_url as unknown as string }
            )) 
        ;


    const [visibleForm, setFormVisible] = useState(false);

    const ToggleFormVisible = () => {
        setFormVisible(!visibleForm);
    }

    async function submitHandler () {

        // e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${UserName}`);

        if (profile.ok) {

           const profileJson = await profile.json();    
           const repositories = await fetch(profileJson.repos_url);
           const repositoriesJson = await repositories.json();
    
           if (profileJson) {
            setData(profileJson);
            SetRepositories(repositoriesJson);
           }

           ToggleFormVisible();
         }
        else {
            alert('Пользователь не найден');
        }
    }

    return (
        <div>
        {!visibleForm ?
          <div className="ui search">
          <div className="ui icon input">
            <i className="search icon"></i>
            <input
              className="prompt"
              placeholder="Введите имя пользователя"
              type="text"
              value={UserName}
              onChange = {e => {SetUserName(e.target.value);}}
            //   onChange={onChangeHandler}
            />
            </div>

            <button 
                className="ui primary button"
                type = "submit" 
                onClick={e => {e.preventDefault(); submitHandler()}}>
                <i className="github icon"></i>
            Поиск
            </button>
            </div> 

            :
            
        <div>
            {console.log(repositories)}
            <Card user={user} rep={rep}/>
            <button 
            className = "ui primary button"
            onClick = {ToggleFormVisible}>
            <i className="heart outline icon"></i>
            Назад</button>
            </div>
        }
        </div>
    );
}

export default Search;
export interface UserPage{         
    name: string;
    avatar_url:string;
    url:string;
    bio:string;
    location:string;
};
export interface Rep{  
        name: string;
        html_url: string;  
};