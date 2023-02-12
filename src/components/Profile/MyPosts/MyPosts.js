import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    const posts = [
        { message: 'Hi, how are you?', likesCount: 20 },
        { message: 'This is my first post', likesCount: 50 },
    ];

    const postsItems = posts.map(p => {
        return (
            <li className={classes.postsItem}>
                <Post
                    message={p.message}
                    likesCount={p.likesCount}
                />
            </li>
        )
    })

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
                {postsItems}
            </ul>
        </div>
    );
};

export default MyPosts;