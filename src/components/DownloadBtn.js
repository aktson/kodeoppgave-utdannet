import { saveAs } from 'file-saver';
import React from 'react';
import { FaDownload } from "react-icons/fa"

function DownloadBtn({ user }) {
    const downloadImage = () => {
        saveAs(user.picture.large, 'image.jpg')
    }

    return <button className='btn bg-red' onClick={downloadImage}><FaDownload />Download Image</button>
}


export default DownloadBtn