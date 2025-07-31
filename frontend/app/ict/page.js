
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function IctPage() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/files/ict`)
            .then(res => setFiles(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Ict Department</h1>
            <ul>
                {files.map(file => (
                    <li key={file.id} className="border-b p-2">{file.filename}</li>
                ))}
            </ul>
        </div>
    );
}
    