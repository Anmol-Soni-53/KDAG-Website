import { useState } from "react";
import Particless from "../Common/Particles/Particless";
import username from "../../assets/pics/username.png";
import name from "../../assets/pics/name.png";
import email from "../../assets/pics/email.png";
import college from "../../assets/pics/college.png";
import username2 from "../../assets/pics/username2.png";
import name2 from "../../assets/pics/name2.png";
import email2 from "../../assets/pics/email2.png";
import college2 from "../../assets/pics/college2.png";
import user_profile from "../../assets/pics/user_profile.png";
import Fade from "react-reveal/Fade";
import "./UserProfilePublic.css";

const UserProfilePublic = () => {
	const [activeContent, setActiveContent] = useState("content3");

	const handleMouseOver = (contentId) => {
		setActiveContent(contentId);
	};

	return (
		<div className="outer_profile_container">
			<Fade left>
				<div className="profile_container">
					<div className="profile_icon">
						<div
							className={`profile_img_box ${
								activeContent === "content1" && "profile_active"
							}`}
							style={{ "--i": "1" }}
							onMouseOver={() => handleMouseOver("content1")}
						>
							<img src={username2} />
						</div>

						<div
							className={`profile_img_box ${
								activeContent === "content2" && "profile_active"
							}`}
							style={{ "--i": "2" }}
							onMouseOver={() => handleMouseOver("content2")}
						>
							<img src={name2} />
						</div>

						<div
							className={`profile_img_box ${
								activeContent === "content3" && "profile_active"
							}`}
							style={{ "--i": "3" }}
							onMouseOver={() => handleMouseOver("content3")}
						>
							<img src={user_profile} />
						</div>

						<div
							className={`profile_img_box ${
								activeContent === "content4" && "profile_active"
							}`}
							style={{ "--i": "4" }}
							onMouseOver={() => handleMouseOver("content4")}
						>
							<img src={college2} />
						</div>

						<div
							className={`profile_img_box ${
								activeContent === "content5" && "profile_active"
							}`}
							style={{ "--i": "5" }}
							onMouseOver={() => handleMouseOver("content5")}
						>
							<img src={email2} />
						</div>
					</div>

					<div className="profile_content">
						<div
							className={`profile_content_box ${
								activeContent === "content3" && "profile_active"
							}`}
							id="content3"
						>
							<div className="profile_card">
								<div className="profile_img_box">
									<img src={user_profile} />
								</div>
								<div className="profile_text_box">
									<h2>
										Welcome to the <strong>KDAG</strong>  <br />
									</h2>
								</div>
							</div>
						</div>
						<div
							className={`profile_content_box ${
								activeContent === "content1" && "profile_active"
							}`}
							id="content1"
						>
							<div className="profile_card">
								<div className="profile_img_box">
									<img src={username} />
								</div>
								<div className="profile_text_box">
									<h2>
										__user__profile123 <br />
										<span>Username</span>
									</h2>
								</div>
							</div>
						</div>

						<div
							className={`profile_content_box ${
								activeContent === "content2" && "profile_active"
							}`}
							id="content2"
						>
							<div className="profile_card">
								<div className="profile_img_box">
									<img src={name} />
								</div>
								<div className="profile_text_box">
									<h2>
										FirstName lastname <br />
										<span>Name</span>
									</h2>
								</div>
							</div>
						</div>

						<div
							className={`profile_content_box ${
								activeContent === "content4" && "profile_active"
							}`}
							id="content4"
						>
							<div className="profile_card">
								<div className="profile_img_box">
									<img src={college} />
								</div>
								<div className="profile_text_box">
									<h2>
										Indian Institute of Technology, Kharagpur <br />
										<span>College</span>
									</h2>
								</div>
							</div>
						</div>

						<div
							className={`profile_content_box ${
								activeContent === "content5" && "profile_active"
							}`}
							id="content5"
						>
							<div className="profile_card">
								<div className="profile_img_box">
									<img src={email} />
								</div>
								<div className="profile_text_box">
									<h2>
										email.abc123@email.com <br />
										<span>Email</span>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
			<Particless />
		</div>
	);
};

export default UserProfilePublic;
