import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./DiscussionCard.css";
import profileImage from "./profile.jpeg";
import icon_viewed from "./asset_viewed.png";
import icon_commented from "./asset_comment.png";
import DiscussionComment from "./DiscussionComment";
import { jwtDecode } from "jwt-decode";
import { useHistory } from "react-router-dom";

const HeaderDiscussion = () => {
	const history = useHistory();
	const { post_id } = useParams();
	const [post, setPost] = useState([]);
	const [userId, setUserId] = useState("empty");
	const token = localStorage.getItem("access_token");
	// useEffect(() => {
	// 	if (token) {
	// 		try {
	// 			const decodedToken = jwtDecode(token);
	// 			if (decodedToken && decodedToken.sub && decodedToken.sub.user_id) {
	// 				setUserId(decodedToken.sub.user_id);
	// 				console.log(userId)
	// 			}
	// 		} catch (error) {
	// 			console.error("Error decoding token:", error);
	// 		}
	// 	}
	// }, [token]);
	const fetchUserDetails = async () => {
		try {
			const token = localStorage.getItem('access_token');
			const response = await fetch('http://127.0.0.1:8090/user/auth_profile', {
				method: 'POST',
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			if (!response.ok) {
				throw new Error('Failed to fetch user details');
			}
			const userData = await response.json();
			// console.log('User Details:', userData);
			setUserId(userData['_id']);
			console.log(userId);
		} catch (error) {
			console.error('Error fetching user details:', error.message);
		}
	};

	fetchUserDetails();


	const userProfileLink =
		userId === post.author_id
			? `/user_profile_self/${post.author_id}`
			: `/user_profile_public/${post.author_id}`;

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				// const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/get_posts`, {
				const response = await fetch(
					`http://127.0.0.1:8090/get_post/${post_id}`,
					{
						method: "GET",
					}
				);
				if (!response.ok) {
					const jsonData = await response.json();
					// toast.error(jsonData.message);
					console.log(jsonData);
				} else {
					const jsonData = await response.json();
					console.log("Post fetched successfully:", jsonData.message);
					setPost(jsonData.post);
					console.log(jsonData);
				}
			} catch (error) {
				console.error("Error fetching posts:", error);
				// toast.error("Error fetching posts. Please try again later.");
			}
		};

		fetchPosts();
	}, []);

	const handleDelete = async () => {
		try {
			// Make an API call to delete the data on the server
			const token = localStorage.getItem('access_token');
			const response = await fetch(`http://127.0.0.1:8090/delete_post/${post_id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				headers: {
					'Authorization': `Bearer ${token}`
				}
				// You can include a request body if required
				// body: JSON.stringify({}),
			});

			// Check if the deletion was successful
			if (response.ok) {
				console.log('Data deleted successfully');
				history.push("/forum");

			} else {
				// Handle error response from the server
				const errorData = await response.json();
				console.error('Error deleting data:', errorData);
			}
		} catch (error) {
			// Handle network errors or other unexpected errors
			console.error('Error deleting data:', error);
		}
	};

	const [showReplies, setShowReplies] = useState(false);

	const toggleReplies = () => {
		setShowReplies(!showReplies);
	};

	const replies = [
		<Fade bottom key={1}>
			<DiscussionComment />
		</Fade>,
		<Fade bottom key={2}>
			<DiscussionComment />
		</Fade>,
		<Fade bottom key={3}>
			<DiscussionComment />
		</Fade>,
		<Fade bottom key={4}>
			<DiscussionComment />
		</Fade>,
	];

	return (
		<div className="header-discussion-card-container">
			<div className="header-discussion-card">
				{/* <div className="header-discussion-card-image-container">
					<img src={profileImage} />
				</div> */}
				<div className="header-discussion-card-description">
					<div className="header-discussion-card-description-poster">
						<img
							src="https://img.freepik.com/free-photo/cyberpunk-urban-scenery_23-2150712464.jpg"
							alt="img"
						/>
					</div>

					{/* <div className="header-discussion-card-description-heading">
						Description Title Description Title Description Title
					</div> */}
					<div className="header-discussion-card-posted-by">
						<Link to={userProfileLink}>{post.author_name}</Link>
					</div>
					<div className="header-discussion-card-last-comment-date">
						posted <span>13:35 22 Dec 2023</span>
					</div>

					<div className="header-discussion-card-description-details">
						{post.message}
					</div>
					<div className="header-discussion-card-actions">
						{/* <div className="header-discussion-card-actions-viewed">
							<img src={icon_viewed} />
							53
						</div> */}
						<div className="header-discussion-card-actions-commented">
							<button onClick={toggleReplies}>
								<img src={icon_commented} />
								17
							</button>
						</div>
						<div className="header-discussion-card-actions-delete">
							<Link to="/create_comment">Comments</Link>
						</div>
						<div className="header-discussion-card-actions-delete">
							<button onClick={handleDelete}>Delete post</button>
						</div>
					</div>
				</div>
			</div>

			{showReplies && replies}
		</div>
	);
};

export default HeaderDiscussion;
