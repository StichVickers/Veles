import React, { useState, useEffect } from "react";

const GetItem = () => {
    const [data, setData] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://2e729940-d5c2-43ba-99f6-6dfc37c589e0-00-17cduo2hpewm1.sisko.replit.dev/comm')
            .then(response => response.json())
            .then(response => {
                const formattedData = response.map(post => ({
                    ...post,
                }));
                setData(formattedData);
                console.log(formattedData);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch('https://2e729940-d5c2-43ba-99f6-6dfc37c589e0-00-17cduo2hpewm1.sisko.replit.dev/comm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(response => {
            console.log('Post added:', response);

            fetchData();
 
            setNewPost({ title: '', description: '' });
        })
        .catch(error => {
            console.error('Error adding post:', error);

        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок отзыва"
                    value={newPost.title}
                    onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                />
                <textarea
                    placeholder="Описание"
                    value={newPost.description}
                    onChange={e => setNewPost({ ...newPost, description: e.target.value })}
                />
                <button type="submit">Добавить отзыв</button>
            </form>
            
            {data.length > 0 ? (
                data.map(post => (
                    <div key={post.id} className='post'>
                        <div className='post__content'>
                            <strong><h3>{post.title}</h3></strong>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GetItem;
