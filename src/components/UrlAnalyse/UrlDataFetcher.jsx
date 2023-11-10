import React, { useState } from 'react';
import cheerio from 'cheerio'; // 你需要安装 cheerio 或其他 HTML 解析库

function UrlDataFetcher() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const fetchData = () => {
    // 发送数据请求
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((html) => {
        const $ = cheerio.load(html);
        
        // 提取标题
        const pageTitle = $('title').text();
        setTitle(pageTitle);
        
        // 提取封面图像
        const ogImage = $('meta[property="og:image"]').attr('content');
        setCoverImage(ogImage);
        
        // 提取正文内容（示例：提取所有段落文本）
        const paragraphs = $('p').map((_, elem) => $(elem).text()).get();
        setContent(paragraphs.join('\n'));
        
        setError(null);
      })
      .catch((error) => {
        setTitle('');
        setCoverImage('');
        setContent('');
        setError(error.message);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter a URL"
      />
      <button onClick={fetchData}>Get Content</button>
      {title && <h2>Title: {title}</h2>}
      {coverImage && <img src={coverImage} alt="Cover" />}
      {content && <div>{content}</div>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default UrlDataFetcher;
