import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

const data = [
    {name: "CJ", salary: 800+"$", increase: false},
    {name: "Son-Ki-Hun", salary: 3800+"$", increase: true},
    {name: "CalL", salary: 1800+"$", increase: false},
];

function App() {
    return (
        <div className="app">
            <AppInfo/>
           
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <EmployeesList data={data}/>            
            </div>
            <EmployeesAddForm/>
        </div>
        
    );
}

export default App;