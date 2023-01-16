import React, { useEffect } from 'react';
import './blog.scss';

const Blog = () => {
    useEffect(() => {
        const ball = document.querySelector("div.ball") as HTMLElement
        let mouseX = 0;
        let mouseY = 0;
        let ballX = 0;
        let ballY = 0;
        let speed = 0.08;

        function animate(){
        
            let distX = mouseX - ballX;
            let distY = mouseY - ballY;
            
            
            ballX = ballX + (distX * speed);
            ballY = ballY + (distY * speed);
            
            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";
            
            requestAnimationFrame(animate);
        }

        animate();

        document.addEventListener("mousemove", function(event){
        mouseX = event.pageX;
        mouseY = event.pageY;
        })
    }, [])

    return (
        <div>
            <div className='ball'></div>
            Blog
        </div>
    )
}

export default Blog;