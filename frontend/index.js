
import { useState } from 'react';

export default function Home() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [department, setDepartment] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file || !department) return;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('department', department);
        const res = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await res.json();
        setMessage(`File uploaded: ${data.filename}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            <h1 className="text-2xl font-bold text-[#157EBC]">File Management Portal</h1>
            <input type="text" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} className="mt-4 p-2 border" />
            <input type="file" onChange={handleFileChange} className="mt-4" />
            <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-[#E42D2C] text-white rounded">Upload</button>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
}
    