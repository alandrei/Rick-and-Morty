import React, { Component } from 'react';
import Input from '../../components/form/input/index.jsx';
import Grid from '../../components/grid/index.jsx';
import Card from '../../components/card/index.jsx';
import Modal from '../../components/modal/index.jsx';
import List from '../../components/list/index.jsx';

import { getCharacter, searchCharacters, debounce } from '../../utils';

class Home extends Component {
    state = {
        searchKey: '',
        list: [],
        dialogOpen: false,
        details: {},
    };

    submitSearch = debounce((value) => {
        searchCharacters(value).then(data => this.setState({
            list: data.results.map(({ id, name, image }) => ({
                id,
                name,
                image,
            })),
        }));
    }, 500);

    componentDidMount() {
        searchCharacters().then(data => this.setState({
            list: data.results.map(({ id, name, image }) => ({
                id,
                name,
                image,
            })),
        }));
    }

    handleSearch = (event) => {
        this.setState({ searchKey: event.target.value });
        this.submitSearch(event.target.value);
    };

    onSelectCard = (id) => {
        this.setState({
            dialogOpen: true,
        });
        getCharacter(id).then((data) => {
            this.setState({
                details: {
                    name: data.name,
                    origin: data.origin.name,
                    location: data.location.name,
                    created: new Date(data.created).toLocaleDateString(),
                    species: data.species,
                    status: data.status,
                    gender: data.gender,
                },
            });
        });
    };

    closeModal = () => {
        this.setState({
            dialogOpen: false,
            details: {},
        });
    };

    render() {
        const { searchKey, list, dialogOpen, details } = this.state;

        return (
            <div>
                <Input value={searchKey} onChange={this.handleSearch} placeholder="Type to filter the results" />
                <Grid>
                    {list.map(item => (
                        <Card
                            key={item.id}
                            title={item.name}
                            image={item.image}
                            onClick={() => this.onSelectCard(item.id)}
                            onKeyDown={() => this.onSelectCard(item.id)}
                            tabIndex={item.id}
                        />
                    ))}
                    {list.length === 0 && 'No results found'}
                </Grid>
                {dialogOpen && (
                    <Modal title={details.name} onClose={() => this.closeModal()}>
                        <List items={details} />
                    </Modal>
                )}
            </div>
        );
    }
}

export default Home;
