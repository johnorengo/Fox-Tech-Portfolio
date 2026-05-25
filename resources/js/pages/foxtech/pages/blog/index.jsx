import React, { useState } from "react";
import * as data from "../../data/siteData";

const { figmaBlogPosts } = data;

export function BlogPage({ page }) {
    const [expandedPosts, setExpandedPosts] = useState({});

    const togglePost = (title) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    return (
        <main className="kg-container" style={{ padding: "40px 20px" }}>
            <h1>{page.heading}</h1>
            <p>{page.summary}</p>

            <ul style={{ marginTop: "24px" }}>
                {figmaBlogPosts.map((post) => (
                    <li key={post.title} style={{ marginBottom: "16px" }}>
                        <h2 style={{ marginBottom: "6px" }}>{post.title}</h2>
                        <p style={{ whiteSpace: "pre-line" }}>
                            {expandedPosts[post.title] ? post.story : post.excerpt}
                        </p>
                        <button
                            type="button"
                            onClick={() => togglePost(post.title)}
                            style={{
                                marginTop: "8px",
                                padding: "6px 10px",
                                border: "1px solid #222",
                                background: "#fff",
                                cursor: "pointer",
                            }}
                        >
                            {expandedPosts[post.title] ? "Show less" : "Read more"}
                        </button>
                    </li>
                ))}
            </ul>
        </main>
    );
}
