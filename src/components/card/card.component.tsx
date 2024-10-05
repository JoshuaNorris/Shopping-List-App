import './card.styles.scss';


export const Card = () => {
    return (
        <div className='card'>
            <img className="card-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="John Doe"/>
            <div className="card-info-container">
                <h4 className="card-title">John Doe</h4>
                <p className="card-description">Architect and Engineer</p>
            </div>
        </div>
    );
}