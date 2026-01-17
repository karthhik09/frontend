import axios from 'axios';

const API_BASE_URL = 'https://todo-backend-1fzd.onrender.com/api/notifications';


export const notificationAPI = {
    // Get all notifications for a user
    getNotifications: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching notifications:', error);
            throw error;
        }
    },

    // Get unread notification count
    getUnreadCount: async (userId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/unread-count?userId=${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching unread count:', error);
            throw error;
        }
    },

    // Mark notification as read
    markAsRead: async (notificationId) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/${notificationId}/read`);
            return response.data;
        } catch (error) {
            console.error('Error marking notification as read:', error);
            throw error;
        }
    },

    // Delete notification
    deleteNotification: async (notificationId) => {
        try {
            await axios.delete(`${API_BASE_URL}/${notificationId}`);
        } catch (error) {
            console.error('Error deleting notification:', error);
            throw error;
        }
    }
};
