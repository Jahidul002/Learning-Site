import React from 'react';
import Navber from './Navber';

const Blog = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='mx-20'>
                <div>
                    <p className='text-2xl font-extralight my-5'>1. What is Cors?</p>
                    <p className='font-semibold text-yellow-900'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.CORS is an abbreviation for Cross-Origin Response Sharing. It is what allows the website on one URL to request data from a different URL, and it frustrates both the frontend and backend devs alike.</p>
                </div>
                <div>
                    <p className='text-2xl font-extralight my-5'>2. Why we use Firebase? What other options do for me to implement authentication?</p>
                    <p className='font-semibold text-yellow-900'>Firebase helps us develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. on the other hand firebase is created by Google . Its most sucurityfull and Easy to use. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                </div>
                <div>
                    <p className='text-2xl font-extralight my-5'>3. How does the private route work?</p>
                    <p className='font-semibold text-yellow-900'>The private route component is used to protect selected pages in a React app from unauthenticated users.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div>
                    <p className='text-2xl font-extralight my-5'>4. what is node? How does node works?</p>
                    <p className='font-semibold text-yellow-900'>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;