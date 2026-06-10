const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export async function fetchServices() {
    try {
        const res = await fetch(`${API_URL}/admin/services`); // Reusing admin list for marketing
        const data = await res.json();
        return data.services || [];
    } catch (error) {
        console.error('Fetch services failed:', error);
        return [];
    }
}
