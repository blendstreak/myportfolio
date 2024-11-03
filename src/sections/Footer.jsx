import React from 'react'

const Footer = () => {
    return (
        <footer className='c-space p-5 border-t border-gray-700 flex flex-col lg:flex-row justify-between items-center flex-wrap gap-5 max-w-7xl m-auto'>
            <div className='text-neutral-400 flex gap-2'>
                <p>Designed & Built by</p>
                <a href='https://abhaysrana.com' target='_blank' rel='noopener noreferrer'>Abhay Singh Rana</a>
            </div>
            <div className='flex flex-col lg:flex-row gap-3 items-center'>
                <div className="social-icon text-2xl flex gap-3">
                    <a className="fab fa-github" href='https://github.com/blendstreak' target='_blank' rel='noopener noreferrer' aria-label='githubLink'></a>
                    <a className="fab fa-linkedin" href='https://linkedin.com/in/abhaysira' target='_blank' rel='noopener noreferrer' aria-label='linkedinLink'></a>
                    <a className="fab fa-youtube" href='https://www.youtube.com/@blendstreak4290' target='_blank' rel='noopener noreferrer'aria-label='youtubeLink'></a>
                </div>
            </div>
            <p className='text-neutral-400'>© 2024 Abhay Singh Rana. All rights reserved.</p>
        </footer>
    )
}

export default Footer