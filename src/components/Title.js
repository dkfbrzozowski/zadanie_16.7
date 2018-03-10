import React from 'react';
import style from './Title.css';
const Title = props => <h1 className={style.Title}>{props.title}</h1>
//const Title = props => <h1>{props.title}</h1>

export default Title;