import React from 'react';

function EmbedReel() {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPrometheusPr%2Fvideos%2F208857277659564%2F&show_text=false&width=560&t=0"
          className="w-full h-full pointer-events-auto"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          autoplay
        ></iframe>
      </div>
    </div>
  );
}

export default EmbedReel;
