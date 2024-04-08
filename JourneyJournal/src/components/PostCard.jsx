import React from 'react';
import appwriteservice from '../services/config';
import { Link } from 'react-router-dom';

function PostCard({$id,title,featuredImages}) {
    return (
        <link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteservice.getFilePreview(featuredImages)} alt="{title}" className='rounded-xl' />
                 </div>
                <h2 className='text-fl font-bold'>{title}</h2>
                </div>
        </link>
    );
}

export default PostCard;