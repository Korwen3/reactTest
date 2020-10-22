import React from 'react';
import { Services } from '../http-services';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: ""
            }
    }

    componentDidMount() {
        
    }

    addPost = () => {
        Services.postPost(this.state.newPost);
    }

    changeHandler = (event) => {
        this.setState({ newPost: event.target.value });
        console.log(event.target.value);
    }


    render() {
        return <>

            <form onSubmit={this.addPost}>
                <label>
                    Post :
          <input type="text" value={this.state.newPost} onChange={this.changeHandler} />
                </label>
                <input type="submit" value="Poster" />
            </form>
        </>
    }

}
