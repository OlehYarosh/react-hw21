import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../store/actions';
import '../styles/Posts.css';
import like from '../assets/like-icon.png';
import comment from '../assets/comments-icon.png';
import view from '../assets/views-icon.png';

class PostList extends React.Component {
    state = {
        text: '',
        author: '',
        authorImage: '',
        postImage: '',
    };

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { text, author, authorImage, postImage } = this.state;
        if (text.trim() === '' || author.trim() === '' || authorImage.trim() === '' || postImage.trim() === '') return;
        const newPost = {
        id: Date.now(),
        author: author,
        authorImage: authorImage,
        authorNickname: '@' + author.toLowerCase().replace(' ', '_'),
        date: new Date().toISOString().slice(0, 10),
        text: text,
        postImage: postImage,
        likes: 0,
        comments: 0,
        shares: 0,
        };
        this.props.addPost(newPost);
        this.setState({ text: '', authorImage: '', postImage: '' });
    };

    render() {
        return (
            <div>
                <div className='addPost'>
                    <h2>Додати публікацію</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="author"
                            placeholder="Ім'я автора"
                            value={this.state.author}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="authorImage"
                            placeholder="Посилання на зображення автора"
                            value={this.state.authorImage}
                            onChange={this.handleInputChange}
                        />
                        <input
                            type="text"
                            name="postImage"
                            placeholder="Посилання на зображення публікації"
                            value={this.state.postImage}
                            onChange={this.handleInputChange}
                        />
                        <textarea
                            name="text"
                            placeholder="Текст публікації"
                            value={this.state.text}
                            onChange={this.handleInputChange}
                        ></textarea>
                        <button className='button' type="submit">Додати</button>
                    </form>
                </div>
                <h1>Публікації</h1>
                <div>
                    {this.props.posts.map((post) => (
                        <div key={post.id} className="post-container">
                            <div className="author-info">
                                <div className='author-image-name'>
                                <img className='author-image' src={post.authorImage} alt={post.author} />
                                <h3 className="author-name">{post.author}</h3>
                                <h3 className='author-nickname'>{post.authorNickname}</h3>
                                </div>
                                <span>{post.date}</span>
                            </div>
                            <p className="post-text">{post.text}</p>
                            <img className='post-image' src={post.postImage} alt="Публікація" />
                            <div className="icon-container">
                                <div className="icon">
                                    <img className="img-icon" src={like} alt="Like Icon" />
                                    {post.likes}
                                </div>
                                <div className="icon">
                                    <img className="img-icon" src={comment} alt="Comment Icon" />
                                    {post.comments}
                                </div>
                                <div className="icon">
                                    <img className="img-icon" src={view} alt="View Icon" />
                                    {post.shares}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
