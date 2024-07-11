import React from 'react';
import './scss/Section1Component.scss';

export default function Section1Component() {
    return (
        <section id="section1">
            <div className="container">
                <div className="title">
                    <h2>섹션2</h2>
                </div>
                <div className="content">
                        <svg style={{width:'100px', height:'100px'}}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#5f0080"></path><path d="M7 12.6667L10.3846 16L18 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <br/>
                        <img src="./img/header/3df368c8-e124-4d06-a9e9-af4c10d01b53.jpeg" alt="" />
                </div>
                
            </div>
        </section>
    );
}
