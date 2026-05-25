import React, { useState } from "react";
import * as data from "../../data/siteData";

const { figmaBlogPosts } = data;
const toSlug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function BlogPage({ page }) {
    const selectedSlug = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("post") : null;
    const selectedPost = selectedSlug ? figmaBlogPosts.find((post) => toSlug(post.title) === selectedSlug) : null;

    const [expandedPosts, setExpandedPosts] = useState(() => (selectedPost ? { [selectedPost.title]: true } : {}));

    const togglePost = (title) => {
        setExpandedPosts((prev) => ({
            ...prev,
            [title]: !prev[title],
        }));
    };

    const postsToRender = selectedPost ? [selectedPost] : figmaBlogPosts;

    return (
        <main className="kg-container" style={{ padding: "40px 20px" }}>
            <h1>{page.heading}</h1>
            <p>{page.summary}</p>

            <ul style={{ marginTop: "24px" }}>
                {postsToRender.map((post) => (
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
