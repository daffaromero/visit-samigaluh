import React from "react";

export default function PostItem({ categories, content }) {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
      <br />
    </div>
  );
}
