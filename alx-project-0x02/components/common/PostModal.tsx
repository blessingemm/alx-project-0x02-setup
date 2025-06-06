import React, { useState } from 'react';

interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
