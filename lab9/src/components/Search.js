import "./Search.css";
import Card from './Card';
import React, {useState} from 'react';

const Search = () => {
    const [data, setData] = useState({});
    const [UserName, SetUserName] = useState("");
    const[repositories, SetRepositories] = useState([]);

    const [visibleForm, setFormVisible] = useState(false);

    const ToggleFormVisible = () => {
        setFormVisible(!visibleForm);
    }

    const onChangeHandler = e => {
        SetUserName(e.target.value);
    }

    const submitHandler = async e => {

        e.preventDefault();

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
       else alert('Пользователь не найден');
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
              onChange={onChangeHandler}
            />
            </div>

            <button 
                className="ui primary button"
                type = "submit" 
                onClick = {submitHandler}>
                <i className="github icon"></i>
            Поиск
            </button>
            </div> 

            :
            
        <div>
            {console.log(data.name)}
            <Card data={data} repositories={repositories}/>
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
