class Homepage extends React.Component {
	render(){
		return <div>Welcome! Check out our <a href="/cards">trading cards</a>.
        <br></br><br></br><br></br>
        <img src="https://www.raccoongames.es/med/img/productos/figura-team-fortress-2-balloonicorn-15cm/1380_team_fortress_balloonicorn_vinyl_figure_inhand.jpg"></img>
        </div>;
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));