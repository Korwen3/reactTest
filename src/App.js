import React from 'react';
import { Services } from './http-services';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPosts: []
        }
    }

    render() {
        return <>
            <ul>
                {this.state.allPosts.map((post) => <li>{post.id}, {post.content}, {post.comment}</li>)}
            </ul>
        </>
    }

    componentDidMount() {
        Services.getAllPosts().then((results) => {
            this.setState({
                allPosts: results.data
            });
            console.log(this.allPosts);
        });
    }
}