import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(1);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, message, rating };
        setReviews([...reviews, newReview]);
        setName('');
        setMessage('');
        setRating(1);
    };

    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div
                    className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => handleTabChange('description')}
                >
                    Luxe    
                </div>
                <div
                    className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
                    onClick={() => handleTabChange('reviews')}
                >
                    Reviews ({reviews.length})
                </div>
            </div>

            <div className="descriptionbox-content">
                {activeTab === 'description' && (
                    <div>
                        <h2>Can you give any feedback of the products?</h2>
                        <p>You can click the reviews on the top of the right corner.</p>
                    </div>
                )}

                {activeTab === 'reviews' && (
                    <div>
                        <h2>Customer Reviews</h2>

                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Review:</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <select
                                    id="rating"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <option value="1">1 - Poor</option>
                                    <option value="2">2 - Fair</option>
                                    <option value="3">3 - Good</option>
                                    <option value="4">4 - Very Good</option>
                                    <option value="5">5 - Excellent</option>
                                </select>
                            </div>
                            <button type="submit">Submit Review</button>
                        </form>

                        <div className="reviews-list">
                            {reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <div key={index} className="review-item">
                                        <h4>{review.name}</h4>
                                        <p>{review.message}</p>
                                        <p>Rating: {review.rating}/5</p>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews yet. Be the first to review!</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionBox;
