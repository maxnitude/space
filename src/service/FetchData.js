export default class FetchData {
    
    startUrl = 'https://api.spacexdata.com/v4/';
    
    getData = async url => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error (`Произошла ошибка: ${response.status}`);
        } else {
        return await response.json();
        }
    };

    getRocket = async () => await this.getData(this.startUrl + 'rockets');
    getLaunches = async () => await this.getData(this.startUrl + 'launches/past' ); 
    getCompany = async () => await  this.getData(this.startUrl + 'company');

};