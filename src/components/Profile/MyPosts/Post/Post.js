import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.post}>
            <img src="https://imagej.nih.gov/ij/images/baboon.jpg" alt="img" />
            <div className={classes.postText}>
                {props.message}
            </div>
            <ul className={classes.socialBar}>
                <li className={classes.socialBarItem}>
                    <button className={classes.socialBarLikes} ariaLabel='Likes count'>
                        {props.likesCount}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Post;