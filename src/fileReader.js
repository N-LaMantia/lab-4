async function readJsonFile(filename) {
    try {
        const response = await fetch(`/${filename}`); // or '/data/quiz.json' if in public/data/
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('JSON content:', data);
        return data;
    } catch (err) {
        console.error('Error reading JSON file:', err);
        return null;
    }
}


export { readJsonFile };