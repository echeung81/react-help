import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Counter from './Counter.jsx';


//Individual card for a film
const FilmCard = ({key, title, director, description})  => {

			return (
                <div key={key}>
                    <Card >
                        <CardContent>
                            <Typography variant="headline">{title}</Typography>
                            <Typography>Directed By: {director}</Typography>
                            <Typography color="textSecondary">{description}</Typography>
                        </CardContent>
                    </Card>
                </div>
            );
           };

//Set of film cards
const FilmCards = ({films, show}) => {

    if(!show)
        return (<div></div>);

    if(!films)
        return null;

	return (
                <div>
                { /*Show counter with number of films */} 
                <Counter stuffType={"Films"} number={films.length} />
                { /*Show list of films */} 
                <hr />
                { films.map((film) => (<FilmCard {...film} />)) }
                </div>
            );
}

export {
	FilmCard,
	FilmCards,
};


