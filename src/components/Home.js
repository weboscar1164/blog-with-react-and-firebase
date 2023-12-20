import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import "./Home.css";

const Home = () => {
	const [postList, setPostList] = useState([]);
	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(collection(db, "posts"));
			// console.log(data);
			// console.log(data.docs);
			// console.log(data.docs.map((doc) => ({ doc })));
			// console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getPosts();
		// console.log(postList);
	}, []);

	const handleDelete = async (id) => {
		await deleteDoc(doc(db, "posts", id));
		window.location.href = "/";
	};

	console.log(auth);
	return (
		<div className="homePage">
			{postList.map((post) => {
				return (
					<div className="postContents" key={post.id}>
						<div className="postHeader">
							<h1>{post.title}</h1>
						</div>
						<div className="postTextContainer">{post.postText}</div>
						<div className="nameAndDeleteButton">
							<h3>@{post.author.username}</h3>
							{post.author.id === auth.currentUser?.uid && (
								<button onClick={() => handleDelete(post.id)}>削除</button>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
