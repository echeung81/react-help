import React, { Component } from 'react';

const Counter = ({stuffType, number}) => ( <div>
											 <h2 align="center">{"# of " + stuffType + ": " + number}</h2>
											</div>);

export default Counter;