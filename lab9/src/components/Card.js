import React from 'react';

const Card = ({ data, repositories }) => {
    return (
        <div className = "Profile"> 

        <div className = "Human"> 

             <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />

            <div className = "Name">
            <div Style = "font-weight: bold">Ссылка:</div> <a href = {data.url}>{data.url}</a>
            <div Style = "font-weight: bold"> Имя: </div> {!data.name ? 'данных нет' : <div>{data.name}</div>} 
            <div Style = "font-weight: bold">Местоположение:</div> {!data.location ? 'данных нет' : <div>{data.location}</div>} 
            <div Style = "font-weight: bold">Био:</div> {!data.bio ? 'данных нет' : <div>{data.bio}</div>} 
            </div>
        </div>

        <div className = "Rep">
        <td>
            {repositories.map(repo => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <a href={repo.html_url} className="header" target="_blank">
                      {repo.name}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </td>
          </div>
    </div>
    );
}

export default Card;
