import './UserInfo.css';


export function UserInfo({photo, name, nickname}){
    return(
        <div className="info-container">
            <div className="user-photo">
                <img src={photo} alt="user photo" className='photo'/>
            </div>
            <div className="user-info">
                <p className='user-name'>{name}</p>
                <p className='user-nick'>{nickname}</p>
            </div>
        </div>

    );
}