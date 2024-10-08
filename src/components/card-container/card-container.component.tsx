import './card-container.styles.scss';
import { Card } from '../card/card.component';
import { useEffect } from 'react';

type CardContainerProps {
    searchField: string;
}

export const CardContainer:React.FC<CardContainerProps> = ({ searchField }) => {

    return (
        <div>
            <Card />
        </div>
    );
}