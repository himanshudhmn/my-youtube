import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Himanshu Dhiman",
    text: "loreum ipsum dior fitona",
    replies: [],
  },
  {
    name: "Himanshu Dhiman",
    text: "loreum ipsum dior fitona",
    replies: [
      {
        name: "Himanshu Dhiman",
        text: "loreum ipsum dior fitona",
        replies: [],
      },
      {
        name: "Himanshu Dhiman",
        text: "loreum ipsum dior fitona",
        replies: [
          {
            name: "Himanshu Dhiman",
            text: "loreum ipsum dior fitona",
            replies: [
              {
                name: "Himanshu Dhiman",
                text: "loreum ipsum dior fitona",
                replies: [],
              },
            ],
          },
          {
            name: "Himanshu Dhiman",
            text: "loreum ipsum dior fitona",
            replies: [],
          },
          {
            name: "Himanshu Dhiman",
            text: "loreum ipsum dior fitona",
            replies: [],
          },
        ],
      },
      {
        name: "Himanshu Dhiman",
        text: "loreum ipsum dior fitona",
        replies: [],
      },
    ],
  },
  {
    name: "Himanshu Dhiman",
    text: "loreum ipsum dior fitona",
    replies: [],
  },
];

const CommentsList = ({ data }) => {
  return (
    <div>
      {data.map((comment) => (
        <>
          <Comment data={comment} />
          <div className="pl-4 border-l border-slate-400 ml-5">
            <CommentsList data={comment.replies} />
          </div>
        </>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-xl font-bold">Comments :</h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
