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
            <div>
                {this.state.allPosts.map((post, index) => <div key={index} style={{color:'blue'}}>
                    {post.id}, {post.content}

                    {post.comments.map((comment, index) => <div key={index} style={{color:'lightblue'}}>
                        {comment.id}, {comment.content}</div>)}
                </div>)}
            </div>
        </>
    }

    componentDidMount() {
        Services.getAllPosts().then((results) => {
            this.setState({
                allPosts: results.data
            });
            console.log(JSON.stringify(results));
        });
    }


}