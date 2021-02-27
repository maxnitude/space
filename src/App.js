import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Features from './components/features/Features';
import Footer from './components/Footer/Footer';
import FetchData from  './service/FetchData';


class App extends React.Component {
	
	fetchData = new FetchData()
	
	state = {
		rocket: 'Falcon 1',
		rocketFeatures: null,
		rockets: [],
		companyData: null
	}

	componentDidMount() {
		this.updateRocket();
		this.updateCompany();
	}
	
	updateRocket() {
		this.fetchData.getRocket()
			.then(data => {
				this.setState({rockets: data.map(item => item.name)});
				return data;
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFeatures => {
				this.setState({rocketFeatures});
			});
	}

	changeRocket = rocket => {
		this.setState({
			rocket
		}, this.updateRocket);
	}

	updateCompany = () => {
		this.fetchData.getCompany()
		.then(companyData => this.setState({companyData}))
	}
	  
	render() {
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
				<Route exact 
					path='/' 
					render={() => this.state.companyData && <Home company={this.state.companyData}/>}
				/>

				<Route path='/rocket/:rocket' render={
					({match}) => {		
						const {rocket} = match.params;
						console.log(rocket);
						return (
							<>
							<Main  rocketName={rocket}/>
							{this.state.rocketFeatures && <Features {...this.state.rocketFeatures} rocketName={rocket} changeRocket={this.changeRocket}/>}
							</>
						)	
					}
				}/>
				
				<Route path="/calendar" component={Calendar}/>

				<Route path="/details/:id" component={Details}/>

				{this.state.companyData && <Footer {...this.state.companyData.links} />}
	 		</BrowserRouter>
  		);
	}
}

export default App;