import React from 'react';

interface VideoProps {
  onClose: () => void;
}

const Video: React.FC<VideoProps> = ({ onClose }) => {
  return (
    <aside className="fixed inset-0 bg-[#191536e6] flex items-center justify-center z-50 overflow-auto">
      <div className="relative w-full max-w-4xl bg-black p-4 rounded-lg">
        <button
          className="absolute top-0 right-2 text-white text-4xl font-normal z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full border-none"
            src="https://www.youtube.com/embed/SvTbB19bvIw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </aside>
  );
};

export default Video;