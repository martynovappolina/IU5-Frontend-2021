import React from 'react';
import {UserPage} from './Search'
import {Rep} from './Search'

const Card = (props: {user: UserPage, rep:Rep[]}) => {
    return (
        <div className = "Profile"> 

        <div className = "Human"> 

             <img
                className="ui small circular image"
                src={props.user.avatar_url}
                alt={props.user.avatar_url}
              />

            <div className = "Name">
              <div>Ссылка:</div> <a href = {props.user.url}>{props.user.url}</a>
              <div> Имя: </div> {!props.user.name ? 'данных нет' : <div>{props.user.name}</div>} 
              <div>Местоположение:</div> {!props.user.location ? 'данных нет' : <div>{props.user.location}</div>} 
              <div>Био:</div> {!props.user.bio ? 'данных нет' : <div>{props.user.bio}</div>} 
            </div>
        </div>

        <div className = "Rep">
        <td>
            {props.rep.map(repo => (
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
