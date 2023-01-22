import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={classes.posts}>
            <h2 className={classes.title}>
                New Posts
            </h2>
            <div className={classes.inputWrapper}>
                <textarea className={classes.input}></textarea>
                <button className={classes.button}>
                    Send
                </button>
            </div>
            <h2 className={classes.title}>
                My posts
            </h2>
            <ul className={classes.postsList}>
                <li className={classes.postsItem}>
                    <Post
                        message='Hi, how are you?'
                        likesCount='20'
                    />
                </li>
                <li className={classes.postsItem}>
                    <Post
                        message='This is my first post'
                        likesCount='50'
                    />
                </li>
            </ul>
        </div>
    );
};

export default MyPosts;