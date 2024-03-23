import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./DiscussionComment.css";
import DiscussionComment2 from "./DiscussionComment2";
import icon_commented from "./asset_comment.png";
import profileImage from "./profile.jpeg";
import icon_heart from "./asset_heart.png";

const DiscussionComment = () => {
	const [showReplies, setShowReplies] = useState(false);

	const toggleReplies = () => {
		setShowReplies(!showReplies);
	};

	const replies = [
		<Fade bottom key={1}>
			<DiscussionComment2 />
		</Fade>,
		<Fade bottom key={2}>
			<DiscussionComment2 />
		</Fade>,
		<Fade bottom key={2}>
			<DiscussionComment2 />
		</Fade>,
	];
	return (
		<div className="discussion-comment-container">
			<div className="discussion-comment">
				{/* <div className="discussion-comment-image-container">
					<img src={profileImage} />
				</div> */}
				<div className="discussion-comment-description">
					<div className="discussion-comment-description-details">
						This is a sample text that represents what will be written here,
						lorem ipsum blah blah blah blah lorem ipsum blah blah blah blah This
						is a sample text that represents what will be written here, lorem
						ipsum blah blah blah blah lorem ipsum blah blah blah blah This is a
						sample text that represents what will be written here, lorem ipsum
						blah blah lorem ipsum blah blah blah blah This is a sample text
					</div>
					<div className="discussion-comment-bottom">
						<div className="discussion-comment-posted-by">_username.abc123</div>

						<div className="discussion-comment-last-comment-date">
							posted on <span>22 Dec 2023</span>
						</div>
						<div className="discussion-comment-actions-commented">
							<button onClick={toggleReplies}>
								<img src={icon_commented} />
								17
							</button>
						</div>
						<div className="header-discussion-card-actions-delete">
							<button>Delete post</button>
						</div>
						{/* <div className="discussion-comment-actions">
							<div className="discussion-comment-actions-liked">
								<img src={icon_heart} />
								53
							</div>
						</div> */}
					</div>
				</div>
			</div>
			{showReplies && replies}
		</div>
	);
};

export default DiscussionComment;
