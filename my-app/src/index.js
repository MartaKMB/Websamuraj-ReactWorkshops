import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function Komponent() {
//     return <h1>komponent</h1>
// }

// const Komponent = () => {
//     return <h1>komponent</h1>
// }

class Komponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            click: 0
        }
        this.handleClick = this.handleClick.bind(this);

        console.log('Komponent: constructor');
    }

    handleClick() {

        console.log('Komponent: handleClick');

        // this.setState({click : 3});
        // this.setState(click: ++this.state.click});
        this.setState((prevState) => ({click: ++prevState.click}))
    }

    render() {

        console.log('Komponent: render');

        return (
            // <div>
            //     <h1>{this.props.name}</h1>
            //     <h2>{this.props.type}</h2>
            // </div>
            <div>
                <button onClick={this.handleClick}>kliknij</button>
                <p>Klików - {this.state.click}</p>
            </div>
        )
    }
}

const element = <Komponent name="websamuraj" type="react"/>
// const wieleElementow = (<div><Komponent name="websamuraj" type="react"/><Komponent /></div>)

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
        console.log('didmount');
    }

    render() {
        console.log('render');
        return (
            // <div>Aktualny czas: {this.state.date.toTimeString()}</div>
            <div>Aktualny czas: {this.state.date.toTimeString()}</div>
        )
    }
}

const timer = <Timer />

class AppIf extends React.Component {
    render() {
        const warunek = false;

        let h1;
        if (warunek) {
            h1 = <h1>True</h1>
        } else {
            h1 = <h1>False</h1>
        }

        return (
            <div>
                {/* {warunek && <h1>True</h1>} */}
                {/* {warunek ? <h1>True</h1> : <h1>False</h1>} */}
                {h1}
            </div>
        )
    }
}

const appif = <AppIf />

class AppPetle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            example : [
                {
                    name: 'Kasia'
                },
                {
                    name: 'Basia'
                },
                {
                    name: 'Tomek'
                }
            ]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            // zwracany nowy state, nową tablicę ... bierze tablicę, którą ma przepisuje do nowej zawartość i na końcu dodajemy nową wartość
            return {example: [...prevState.example, {name: 'Agata'}]}
        })
    }

    render() {
        
        return (
            <div>
                {this.state.example.map((item, key) => <p key={key}>{item.name}</p>)}
                <button onClick={this.handleClick}>Kliknij</button>
            </div>
        )
    }
}

const petle = <AppPetle /> /* blad */

class Formularze extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <input type='text' onChange={this.handleChange} />
            </div>
        )
    }
}

const formularz = <Formularze />

class Losowanie  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            liczby: ['aaa', 'BBB', 'ccc'],
            wylosowanaLiczbaIndeks: 0
        };

        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        const dlugosc = this.state.liczby.length;
        const wylosowany = Math.floor(Math.random() * dlugosc);

        this.setState({wylosowanaLiczbaIndeks: wylosowany});

        
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Losuj</button>   
                <h1>{this.state.liczby[this.state.wylosowanaLiczbaIndeks]}</h1>             
            </div>
        )
    }

}

const zadanie = <Losowanie />

const all = (<div><Komponent /><Timer /><AppIf /><AppPetle /><Formularze /><Losowanie /></div>)

ReactDOM.render(all, document.getElementById('root'));
